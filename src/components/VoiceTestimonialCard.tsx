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

const Waveform = ({ active, progress }: { active: boolean; progress: number }) => {
  // Stable pseudo-random heights
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
              filled ? 'bg-primary' : 'bg-muted-foreground/30',
              active && 'animate-pulse',
            )}
            style={{
              height: `${h}%`,
              animationDelay: active ? `${i * 40}ms` : undefined,
              animationDuration: active ? '900ms' : undefined,
            }}
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
    <div className="p-5 rounded-2xl gradient-card border border-border/50 hover:shadow-card-hover transition-shadow flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <Avatar className="h-12 w-12 border border-border/50">
          {testimonial.photo && <AvatarImage src={testimonial.photo} alt={testimonial.name} />}
          <AvatarFallback className="gradient-primary text-primary-foreground font-semibold text-sm">
            {initials(testimonial.name)}
          </AvatarFallback>
        </Avatar>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <span className="font-display font-semibold truncate">{testimonial.name}</span>
            <BadgeCheck className="w-4 h-4 text-primary shrink-0" aria-label="Verified client" />
          </div>
          <p className="text-xs text-muted-foreground truncate">{testimonial.role}</p>
        </div>
      </div>

      {testimonial.quote && (
        <p className="text-sm text-foreground/80 leading-relaxed line-clamp-3">
          "{testimonial.quote}"
        </p>
      )}

      <div className="flex items-center gap-3 mt-auto">
        <button
          onClick={toggle}
          aria-label={isPlaying ? 'Pause testimonial' : 'Play testimonial'}
          className="shrink-0 w-11 h-11 rounded-full gradient-primary text-primary-foreground flex items-center justify-center shadow-glow hover:scale-105 transition-transform"
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
        <span className="text-xs tabular-nums text-muted-foreground shrink-0 w-12 text-right">
          {formatTime(current)} / {formatTime(duration)}
        </span>
      </div>

      <audio
        ref={audioRef}
        src={testimonial.audio}
        preload="metadata"
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onTimeUpdate={(e) => setCurrent(e.currentTarget.currentTime)}
        onPlay={() => {
          setIsPlaying(true);
          setPlayingId(testimonial.id);
          if (typeof window !== 'undefined' && (window as any).fbq) {
            (window as any).fbq('trackCustom', 'VoicePlay', { client: testimonial.name });
          }
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
