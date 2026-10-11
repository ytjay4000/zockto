import { useEffect, useRef, useState } from 'react';
import { Play, Pause, BadgeCheck } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useVoicePlayback } from '@/context/VoicePlaybackContext';
import { VoiceTestimonial } from '@/data/voiceTestimonials';
import { cn } from '@/lib/utils';

const formatTime = (s: number) => {
  if (!isFinite(s) || s < 0) s = 0;
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, '0')}`;
};

const BAR_COUNT = 28;

const Waveform = ({ progress }: { active: boolean; progress: number }) => {
  const heights = Array.from({ length: BAR_COUNT }, (_, i) => {
    const v = Math.sin(i * 1.3) * 0.5 + Math.cos(i * 0.7) * 0.5;
    return 30 + Math.abs(v) * 60;
  });
  return (
    <div className="flex-1 flex items-center gap-[3px] h-8 overflow-hidden">
      {heights.map((h, i) => {
        const filled = i / BAR_COUNT <= progress;
        return (
          <span
            key={i}
            className={cn(
              'w-[3px] rounded-full transition-colors duration-150',
              filled ? 'bg-primary' : 'bg-slate-200',
            )}
            style={{ height: `${h}%` }}
          />
        );
      })}
    </div>
  );
};

const initials = (name: string) =>
  name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

interface Props {
  testimonial: VoiceTestimonial;
}

const VoiceTestimonialCard = ({ testimonial }: Props) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const { playingId, setPlayingId } = useVoicePlayback();
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [current, setCurrent] = useState(0);

  // Pause when another card starts playing
  useEffect(() => {
    if (playingId !== testimonial.id && audioRef.current && !audioRef.current.paused) {
      audioRef.current.pause();
    }
  }, [playingId, testimonial.id]);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (a.paused) {
      setPlayingId(testimonial.id);
      a.play().catch(() => {});
    } else {
      a.pause();
    }
  };

  const onSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const a = audioRef.current;
    if (!a || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    a.currentTime = Math.max(0, Math.min(duration, pct * duration));
  };

  const progress = duration ? current / duration : 0;

  return (
    <div className="bg-white rounded-2xl p-5 md:p-6 border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(245,158,11,0.12)] transition-all duration-300 flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <Avatar className="h-12 w-12 border border-slate-200">
          {testimonial.photo && <AvatarImage src={testimonial.photo} alt={testimonial.name} />}
          <AvatarFallback className="bg-slate-100 text-slate-600 font-semibold text-sm">
            {initials(testimonial.name)}
          </AvatarFallback>
        </Avatar>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <span className="font-display font-semibold text-slate-900 truncate">{testimonial.name}</span>
            <BadgeCheck className="w-4 h-4 text-primary shrink-0" aria-label="Verified client" />
          </div>
          <p className="text-xs text-slate-500 truncate">{testimonial.role}</p>
        </div>
      </div>

      {testimonial.quote && (
        <p className="text-sm text-slate-700 leading-relaxed line-clamp-3">
          "{testimonial.quote}"
        </p>
      )}

      <div className="flex items-center gap-3 mt-auto">
        <button
          onClick={toggle}
          aria-label={isPlaying ? 'Pause testimonial' : 'Play testimonial'}
          className="shrink-0 w-11 h-11 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground flex items-center justify-center shadow-lg shadow-primary/20 hover:scale-105 transition-all"
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
        </button>
        <div
          className="flex-1 cursor-pointer"
          onClick={onSeek}
          role="slider"
          aria-valuenow={Math.round(progress * 100)}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <Waveform active={isPlaying} progress={progress} />
        </div>
      </div>

      <audio
        ref={audioRef}
        src={testimonial.audio}
        preload="none"
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onTimeUpdate={(e) => setCurrent(e.currentTarget.currentTime)}
        onPlay={() => {
          setIsPlaying(true);
          setPlayingId(testimonial.id);
        }}

        onPause={() => setIsPlaying(false)}
        onEnded={() => {
          setIsPlaying(false);
          setCurrent(0);
        }}
      />
    </div>
  );
};

export default VoiceTestimonialCard;
