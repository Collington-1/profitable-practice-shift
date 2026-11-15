import React, { useRef, useState } from 'react';
import { Play } from 'lucide-react';

export const VideoSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  const handleStartPlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setHasStarted(true);
    }
  };

  return (
    <section 
      id="accelerator-video"
      className="relative z-20 pt-2 sm:pt-4 pb-10 sm:pb-14 lg:pb-16 bg-[#0A0A0A] overflow-hidden"
    >
      {/* Ambient background lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[350px] sm:h-[450px] rounded-full bg-brand-gold/[0.04] blur-[120px]" />
      </div>

      <div className="max-w-5xl wide:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Bold Container with rounded edges & luxury gold ambient aura */}
        <div className="relative group rounded-2xl sm:rounded-3xl lg:rounded-[32px] p-[1.5px] bg-gradient-to-b from-brand-gold/40 via-white/10 to-brand-gold/20 shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_35px_rgba(189,160,71,0.12)]">
          
          {/* Subtle outer glow on hover */}
          <div className="absolute -inset-1 rounded-2xl sm:rounded-3xl lg:rounded-[34px] bg-brand-gold/20 blur-xl opacity-40 group-hover:opacity-75 transition-opacity duration-700 pointer-events-none" />

          {/* Video Inner Wrapper */}
          <div className="relative w-full aspect-video rounded-2xl sm:rounded-3xl lg:rounded-[30px] overflow-hidden bg-black flex items-center justify-center">
            <video
              ref={videoRef}
              controls
              playsInline
              preload="metadata"
              className="w-full h-full object-cover rounded-2xl sm:rounded-3xl lg:rounded-[30px]"
              onPlay={() => setHasStarted(true)}
            >
              <source src="/assets/video_Dr.%20Army.mp4" type="video/mp4" />
              <source src="/assets/video_Dr. Army.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Custom Luxury Play Overlay Button before initial start */}
            {!hasStarted && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/25 pointer-events-none transition-opacity duration-300">
                <button
                  type="button"
                  onClick={handleStartPlay}
                  aria-label="Play video"
                  className="pointer-events-auto w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-brand-gold text-brand-black flex items-center justify-center shadow-[0_0_35px_rgba(189,160,71,0.6)] hover:bg-brand-gold-light hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
                >
                  <Play className="w-7 h-7 sm:w-9 sm:h-9 lg:w-11 lg:h-11 fill-brand-black translate-x-0.5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
