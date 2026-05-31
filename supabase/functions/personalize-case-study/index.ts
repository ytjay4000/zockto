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

    const { data: row, error } = await supabase
      .from('result')
      .select('video_info')
      .eq('video_id', video_id)
      .maybeSingle();

    if (error) throw error;

    const videoInfo = row?.video_info as VideoInfo | null | undefined;
    if (!videoInfo || Object.keys(videoInfo).length === 0) {
      return new Response(
        JSON.stringify({ personalized: false }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) throw new Error('LOVABLE_API_KEY missing');

    const systemPrompt = `You write conversion-focused, human-sounding marketing copy for Zockto, an AI ad video generator. The visitor's business context is provided as JSON. Tailor every field to their category, country and language style (e.g. Hinglish = casual English-Hindi mix in Latin script). Keep copy punchy, specific, and free of generic AI fluff. Reference their business category naturally.`;

    const userPrompt = `Visitor business context:\n${JSON.stringify(videoInfo, null, 2)}\n\nReturn a personalised JSON object using the personalize_case_study tool.`;

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
              description: 'Return personalised copy for the case studies page.',
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
                      categoryOrder: { type: 'array', items: { type: 'string' } },
                    },
                    required: ['heading', 'subheading', 'categoryOrder'],
                    additionalProperties: false,
                  },
                  founder: {
                    type: 'object',
                    properties: {
                      heading: { type: 'string' },
                      body: { type: 'string' },
                    },
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
                    properties: {
                      heading: { type: 'string' },
                      subheading: { type: 'string' },
                    },
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
    let copy: unknown = null;
    try {
      copy = JSON.parse(toolCall?.function?.arguments ?? '{}');
    } catch (e) {
      console.error('failed to parse tool args', e);
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
