import React, { useRef, useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export const VideoSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  // Ensure autoplay starts reliably (browsers require muted for autoplay)
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback
      });
    }
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  return (
    <section 
      id="accelerator-video"
      className="relative z-20 py-10 sm:py-14 lg:py-16 wide:py-24 overflow-hidden"
    >
      {/* Split background: Top 50% is Black (matches Problem), Bottom 50% is Ivory (matches Methodology) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="h-1/2 w-full bg-[#0A0A0A]" />
        <div className="h-1/2 w-full bg-[#FAF7F2]" />
        {/* Crisp horizontal intersection line on both sides of the video */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-stone-300/40 pointer-events-none" />
      </div>

      {/* Ambient decorative lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] wide:w-[1100px] h-[350px] sm:h-[450px] rounded-full bg-brand-gold/[0.06] blur-[120px]" />
      </div>

      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 wide:px-24 relative">
        {/* Bold Container with rounded edges placed directly on top of the black & white intersection */}
        <div className="relative group max-w-5xl xl:max-w-6xl 2xl:max-w-7xl wide:max-w-wide mx-auto rounded-2xl sm:rounded-3xl lg:rounded-[32px] wide:rounded-[40px] p-[2px] bg-gradient-to-b from-[#D6BA62] via-[#C5A64A] to-[#9E802A] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.55),0_0_40px_rgba(197,166,74,0.22)] transition-transform duration-500 hover:scale-[1.008]">
          
          {/* Subtle outer glow on hover */}
          <div className="absolute -inset-1 rounded-2xl sm:rounded-3xl lg:rounded-[34px] wide:rounded-[42px] bg-brand-gold/25 blur-xl opacity-50 group-hover:opacity-85 transition-opacity duration-700 pointer-events-none" />

          {/* Video Inner Wrapper */}
          <div className="relative w-full aspect-video rounded-2xl sm:rounded-3xl lg:rounded-[30px] wide:rounded-[38px] overflow-hidden bg-black flex items-center justify-center">
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              controls
              preload="auto"
              className="w-full h-full object-cover rounded-2xl sm:rounded-3xl lg:rounded-[30px] wide:rounded-[38px]"
              onVolumeChange={() => {
                if (videoRef.current) {
                  setIsMuted(videoRef.current.muted || videoRef.current.volume === 0);
                }
              }}
            >
              <source src="/assets/video_Dr.%20Army.mp4" type="video/mp4" />
              <source src="/assets/video_Dr. Army.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Quick Unmute/Mute Toggle Badge in top corner (never overlaps bottom controls) */}
            <button
              type="button"
              onClick={toggleMute}
              aria-label={isMuted ? "Unmute audio" : "Mute audio"}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-black/80 backdrop-blur-md border border-brand-gold/50 text-brand-gold text-xs sm:text-sm font-medium hover:bg-black hover:border-brand-gold hover:scale-105 active:scale-95 transition-all shadow-xl cursor-pointer"
            >
              {isMuted ? (
                <>
                  <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-gold animate-pulse" />
                  <span className="tracking-wide">Tap for Sound</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-gold" />
                  <span className="tracking-wide">Sound On</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
