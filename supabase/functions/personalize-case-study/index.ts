import { createClient } from 'npm:@supabase/supabase-js@2.45.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

interface VideoInfo {
  type?: string;
  country?: string;
  category?: string;
  language?: string;
  short_description?: string;
  [key: string]: unknown;
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { video_id } = await req.json().catch(() => ({ video_id: null }));
    if (!video_id || typeof video_id !== 'string') {
      return new Response(JSON.stringify({ error: 'video_id required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    );

    const [resultRes, libRes] = await Promise.all([
      supabase.from('result').select('video_info, id').eq('video_id', video_id).maybeSingle(),
      supabase
        .from('sample_video_libaray')
        .select('id, category, language, country, type, duration, description')
        .not('link', 'is', null),
    ]);

    if (resultRes.error) throw resultRes.error;
    if (libRes.error) throw libRes.error;

    const userId = (resultRes.data as { id?: string } | null)?.id ?? null;
    let userEmail: string | null = null;
    if (userId) {
      try {
        const { data: emailData } = await supabase.rpc('get_auth_user_email', { p_user_id: userId });
        if (typeof emailData === 'string') userEmail = emailData;
      } catch (e) {
        console.error('email lookup failed', e);
      }
    }

    const videoInfo = resultRes.data?.video_info as VideoInfo | null | undefined;
    if (!videoInfo || Object.keys(videoInfo).length === 0) {
      return new Response(
        JSON.stringify({ personalized: false, user_id: userId, user_email: userEmail }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const library = (libRes.data ?? []) as Array<{
      id: number;
      category: string | null;
      language: string | null;
      country: string | null;
      type: string | null;
      duration: number | null;
      description: string | null;
    }>;

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) throw new Error('LOVABLE_API_KEY missing');

    const compactLibrary = library.map((v) => ({
      id: v.id,
      cat: v.category,
      lang: v.language,
      country: v.country,
      type: v.type,
      dur: v.duration,
      desc: (v.description ?? '').slice(0, 220),
    }));

    const systemPrompt = `You write conversion-focused, human-sounding marketing copy for Zockto, an AI ad video generator, AND you rank a library of sample videos by relevance to the visitor.

VISITOR CONTEXT:
- They just generated their first FREE 4-second sample on Zockto.
- They are on /case-studies evaluating whether to buy credits.
- Fears: "Will longer 15–60s ads look good?", "Is this working for others in my category/country?", "Will I waste money?", "Can it replace an agency?".

RANKING RULES (for rankedVideoIds):
- You are given a library of real sample videos with id, category, language, country, type, duration, description.
- Rank by how RELEVANT each is to the visitor's business (category/type/country/language and short_description match).
- Same category > sibling category (e.g. skincare ~ fragrance ~ wellness) > same type (product vs service) > same country > same language > other.
- Return ALL ids from the library, most-relevant FIRST. Never invent ids. Never drop ids.

COPY RULES:
- Punchy, specific, no generic AI fluff.
- Match visitor language style: Hinglish = casual Latin-script English-Hindi mix; Hindi = Devanagari; else match naturally.
- Reference their category/country naturally.
- Hero acknowledges the 4-second sample.
- FinalCta anchors on: ₹999/month = 8–10 full ad videos = ~₹100–125 per video; agencies charge ₹15,000+ per video.`;

    const userPrompt = `Visitor business context (from their first sample):\n${JSON.stringify(videoInfo, null, 2)}\n\nSample video library to rank:\n${JSON.stringify(compactLibrary)}\n\nReturn personalised copy AND rankedVideoIds (ALL ids, most relevant first) via the personalize_case_study tool.`;

    const aiResp = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-3.1-flash-lite-preview',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt },
        ],
        tools: [
          {
            type: 'function',
            function: {
              name: 'personalize_case_study',
              description: 'Return personalised copy and ranked video ids for the case studies page.',
              parameters: {
                type: 'object',
                properties: {
                  hero: {
                    type: 'object',
                    properties: {
                      headline: { type: 'string' },
                      subheadline: { type: 'string' },
                      ctaLabel: { type: 'string' },
                    },
                    required: ['headline', 'subheadline', 'ctaLabel'],
                    additionalProperties: false,
                  },
                  library: {
                    type: 'object',
                    properties: {
                      heading: { type: 'string' },
                      subheading: { type: 'string' },
                      rankedVideoIds: { type: 'array', items: { type: 'number' } },
                    },
                    required: ['heading', 'subheading', 'rankedVideoIds'],
                    additionalProperties: false,
                  },
                  founder: {
                    type: 'object',
                    properties: { heading: { type: 'string' }, body: { type: 'string' } },
                    required: ['heading', 'body'],
                    additionalProperties: false,
                  },
                  socialProof: {
                    type: 'object',
                    properties: { heading: { type: 'string' } },
                    required: ['heading'],
                    additionalProperties: false,
                  },
                  useCases: {
                    type: 'object',
                    properties: { heading: { type: 'string' }, subheading: { type: 'string' } },
                    required: ['heading', 'subheading'],
                    additionalProperties: false,
                  },
                  finalCta: {
                    type: 'object',
                    properties: {
                      headline: { type: 'string' },
                      subheadline: { type: 'string' },
                      buttonLabel: { type: 'string' },
                      egoTrigger: { type: 'string' },
                    },
                    required: ['headline', 'subheadline', 'buttonLabel', 'egoTrigger'],
                    additionalProperties: false,
                  },
                },
                required: ['hero', 'library', 'founder', 'socialProof', 'useCases', 'finalCta'],
                additionalProperties: false,
              },
            },
          },
        ],
        tool_choice: { type: 'function', function: { name: 'personalize_case_study' } },
      }),
    });

    if (!aiResp.ok) {
      const txt = await aiResp.text();
      console.error('AI gateway error', aiResp.status, txt);
      return new Response(
        JSON.stringify({ personalized: false, video_info: videoInfo, error: 'ai_unavailable' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const aiJson = await aiResp.json();
    const toolCall = aiJson.choices?.[0]?.message?.tool_calls?.[0];
    let copy: any = null;
    try {
      copy = JSON.parse(toolCall?.function?.arguments ?? '{}');
    } catch (e) {
      console.error('failed to parse tool args', e);
    }

    // Safety: ensure all library ids are present in rankedVideoIds (append any missing)
    if (copy?.library) {
      const allIds = library.map((v) => v.id);
      const ranked: number[] = Array.isArray(copy.library.rankedVideoIds)
        ? copy.library.rankedVideoIds.filter((n: unknown) => typeof n === 'number')
        : [];
      const set = new Set(ranked);
      for (const id of allIds) if (!set.has(id)) ranked.push(id);
      copy.library.rankedVideoIds = ranked.filter((id) => allIds.includes(id));
    }

    return new Response(
      JSON.stringify({ personalized: !!copy, video_info: videoInfo, copy }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (e) {
    console.error('personalize-case-study error', e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : 'unknown' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
