import { useEffect, useState } from "react";

export default function Countdown() {
  const weddingDate = new Date("2026-01-26T10:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    Days: 0, Hours: 0, Minutes: 0, Seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = weddingDate - now;

      if (diff > 0) {
        setTimeLeft({
          Days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          Hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          Minutes: Math.floor((diff / (1000 * 60)) % 60),
          Seconds: Math.floor((diff / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  return (
    <section className="py-20 bg-[#f2e6b1] text-[#7a1f3d] text-center px-4 relative overflow-hidden">
      {/* Subtle Pattern Background Overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/paper-fibers.png")` }}>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-[1px] w-12 md:w-20 bg-[#7a1f3d]/30"></div>
          <span className="uppercase tracking-[0.4em] text-xs md:text-sm font-semibold">Save The Date</span>
          <div className="h-[1px] w-12 md:w-20 bg-[#7a1f3d]/30"></div>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-12 italic">
          Countdown to Forever
        </h2>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {Object.entries(timeLeft).map(([key, value]) => (
            <div key={key} className="relative group">
              {/* Elegant Card Design */}
              <div className="w-24 h-28 md:w-32 md:h-36 bg-[#7a1f3d] rounded-xl shadow-2xl flex flex-col items-center justify-center transition-transform duration-300 group-hover:-translate-y-2 border-b-4 border-[#5a162b]">
                <span className="text-3xl md:text-5xl font-serif font-bold text-[#f2e6b1]">
                  {value < 10 ? `0${value}` : value}
                </span>
                <span className="text-[10px] md:text-xs uppercase tracking-widest mt-2 text-[#f2e6b1]/80 font-medium">
                  {key}
                </span>
                
                {/* Decorative corner accents in the boxes */}
                <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-[#f2e6b1]/30"></div>
                <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-[#f2e6b1]/30"></div>
              </div>
              
              {/* Bottom Reflection/Shadow */}
              <div className="mt-4 h-1 w-1/2 mx-auto bg-[#7a1f3d]/10 blur-sm rounded-full scale-x-110"></div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <p className="text-xl md:text-2xl font-serif italic text-[#7a1f3d]/80">
            January 26th, 2026
          </p>
          <div className="mt-4 flex justify-center">
             <div className="w-1 h-1 bg-[#7a1f3d] rounded-full mx-1"></div>
             <div className="w-1 h-1 bg-[#7a1f3d] rounded-full mx-1"></div>
             <div className="w-1 h-1 bg-[#7a1f3d] rounded-full mx-1"></div>
          </div>
        </div>
      </div>
    </section>
  );
}