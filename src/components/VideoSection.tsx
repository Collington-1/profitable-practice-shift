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

      <div className="max-w-5xl wide:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 wide:px-16 relative">
        {/* Bold Container with rounded edges placed directly on top of the black & white intersection */}
        <div className="relative group rounded-2xl sm:rounded-3xl lg:rounded-[32px] wide:rounded-[40px] p-[2px] bg-gradient-to-b from-[#D6BA62] via-[#C5A64A] to-[#9E802A] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.55),0_0_40px_rgba(197,166,74,0.22)] transition-transform duration-500 hover:scale-[1.008]">
          
          {/* Subtle outer glow on hover */}
          <div className="absolute -inset-1 rounded-2xl sm:rounded-3xl lg:rounded-[34px] wide:rounded-[42px] bg-brand-gold/25 blur-xl opacity-50 group-hover:opacity-85 transition-opacity duration-700 pointer-events-none" />

          {/* Video Inner Wrapper */}
          <div className="relative w-full aspect-video rounded-2xl sm:rounded-3xl lg:rounded-[30px] wide:rounded-[38px] overflow-hidden bg-black flex items-center justify-center">
            <video
              ref={videoRef}
              controls
              playsInline
              preload="metadata"
              className="w-full h-full object-cover rounded-2xl sm:rounded-3xl lg:rounded-[30px] wide:rounded-[38px]"
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
                  className="pointer-events-auto w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 wide:w-28 wide:h-28 rounded-full bg-brand-gold text-brand-black flex items-center justify-center shadow-[0_0_35px_rgba(197,166,74,0.65)] hover:bg-brand-gold-light hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
                >
                  <Play className="w-7 h-7 sm:w-9 sm:h-9 lg:w-11 lg:h-11 wide:w-13 wide:h-13 fill-brand-black translate-x-0.5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
