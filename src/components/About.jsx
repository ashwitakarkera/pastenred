import { useEffect, useState } from "react";
import g1 from "../assets/images/timeline/teenage.jfif";
import g2 from "../assets/images/timeline/love.jfif";
import g3 from "../assets/images/timeline/wedding.jfif";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-20 bg-[#f2e6b1] text-[#7a1f3d] px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center font-serif font-bold mb-4">
          Our Story
        </h2>
        <p className="text-xl text-center max-w-2xl mx-auto mb-20 leading-relaxed opacity-80">
          A journey that began in teenage friendship and blossoms into forever love
        </p>

        {/* Timeline Container */}
        <div className="relative flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-24">
          
          {/* Full Horizontal Timeline Line - Touches All Circles */}
          <div className="timeline-line absolute hidden lg:block left-[16.5%] top-[50%] transform -translate-y-1/2 w-[67%] h-1 bg-gradient-to-r from-[#7a1f3d]/30 via-[#7a1f3d] to-[#7a1f3d]/30 z-0">
            {/* Line Connectors - Touch Each Circle */}
            <div className="connector-1 absolute left-[25%] top-1/2 transform -translate-y-1/2 w-3 h-3 bg-[#7a1f3d] rounded-full shadow-lg animate-pulse" style={{animationDelay: '0s'}}></div>
            <div className="connector-2 absolute left-[50%] top-1/2 transform -translate-y-1/2 w-3 h-3 bg-[#7a1f3d] rounded-full shadow-lg animate-pulse" style={{animationDelay: '0.3s'}}></div>
            <div className="connector-3 absolute left-[75%] top-1/2 transform -translate-y-1/2 w-3 h-3 bg-[#7a1f3d] rounded-full shadow-lg ring-4 ring-white animate-pulse" style={{animationDelay: '0.6s'}}></div>
          </div>

          <TimelineItem
            year="2000"
            title="Teenage Friendship"
            description="Two young hearts met, sharing laughter and dreams"
            img={g1}
            isFirst={true}
            delay={0}
            isVisible={isVisible}
          />

          <TimelineItem
            year="2010"
            title="Love Blossoms"
            description="Friendship deepened into destined love"
            img={g2}
            delay={0.3}
            isVisible={isVisible}
          />

          <TimelineItem
            year="26 Jan 2027"
            title="Our Wedding"
            description="Forever begins"
            img={g3}
            isWedding={true}
            isLast={true}
            delay={0.6}
            isVisible={isVisible}
          />
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ year, title, description, img, isWedding = false, isFirst = false, isLast = false, delay = 0, isVisible = false }) {
  return (
    <div className={`flex flex-col items-center text-center lg:text-left lg:basis-1/3 relative z-20 transform transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{animationDelay: `${delay}s`}}>
      
      {/* Circle Anchor Point - Line Touches Here */}
      <div className="absolute lg:left-[50%] lg:-translate-x-1/2 top-16 lg:top-20 w-2 h-2 lg:w-3 lg:h-3 bg-transparent z-30"></div>
      
      {/* Circle - Full Photo */}
      <div className={`relative group w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto
                      ${isWedding ? 'bg-gradient-to-br from-rose-400/20 via-pink-400/20 to-rose-500/30 ring-4 ring-rose-200/50 shadow-2xl' : 'bg-gradient-to-br from-yellow-400/30 to-orange-400/30 ring-4 ring-yellow-200/50 shadow-2xl'} 
                      rounded-full overflow-hidden border-4 border-white/80 hover:scale-110 transition-all duration-700 hover:rotate-3`}>
        
        <img 
          src={img} 
          alt={title} 
          className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Wedding Ring Overlay */}
        {isWedding && (
          <div className="absolute -top-2 -right-2 w-12 h-12 md:w-16 md:h-16 bg-white/90 rounded-full flex items-center justify-center text-2xl shadow-2xl ring-2 ring-rose-300/50 animate-bounce">
            💍
          </div>
        )}
        
        {/* Glow Effect */}
        <div className={`absolute inset-0 rounded-full blur-xl opacity-75 
                        ${isWedding ? 'bg-gradient-to-r from-rose-400/60 to-pink-500/60' : 'bg-gradient-to-r from-yellow-400/50 to-orange-500/50'}`}>
        </div>
      </div>

      {/* Year Badge */}
      <span className={`px-4 py-2 mb-4 text-sm md:text-base font-bold rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 mt-6
                      ${isWedding ? 'bg-gradient-to-r from-rose-400/90 to-pink-500/90 text-white shadow-rose-300/50' : 'bg-gradient-to-r from-[#7a1f3d] to-[#a83253] text-[#f2e6b1] shadow-[#7a1f3d]/30'}`}>
        {year}
      </span>

      {/* Title */}
      <h3 className="text-2xl md:text-3xl font-serif font-bold mb-3 hover:scale-105 transform transition-all duration-300">
        {title}
      </h3>

      {/* Description */}
      <p className="text-lg md:text-xl max-w-xs leading-relaxed font-semibold opacity-90 hover:opacity-100 transition-all duration-300">
        {description}
      </p>
    </div>
  );
}
