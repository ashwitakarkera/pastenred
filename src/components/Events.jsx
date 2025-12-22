import nischayamImg from '../assets/events/nischaym.jfif';
import mehendiImg from '../assets/events/mehendi.jfif';
import muhurthamImg from '../assets/events/muhurutam.jfif';
import grihapraveshamImg from '../assets/events/grihaprvesham.jfif';
import receptionImg from '../assets/events/reception.jfif';

export default function Events() {
  const events = [
    { 
      name: "Nischayam", 
      time: "25 Jan 2027 · 5 PM", 
      desc: "Engagement & Horoscope Matching",
      img: nischayamImg
    },
    { 
      name: "Mehendi & Haldi", 
      time: "26 Jan 2027 · 4 PM", 
      desc: "Pre-Wedding Rituals",
      img: mehendiImg
    },
    { 
      name: "Muhurtham", 
      time: "27 Jan 2027 · 10 AM", 
      desc: "Wedding Ceremony",
      img: muhurthamImg
    },
    { 
      name: "Grihapravesham", 
      time: "27 Jan 2027 · 4 PM", 
      desc: "Bride's Entry to Groom's Home",
      img: grihapraveshamImg
    },
    { 
      name: "Reception", 
      time: "28 Jan 2027 · 6 PM", 
      desc: "Grand Celebration",
      img: receptionImg
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-[#7a1f3d] to-[#5a162b] text-[#f2e6b1] px-4 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10 hidden md:block">
        <div className="absolute top-20 left-10 w-20 h-20 bg-[#f2e6b1]/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-[#f2e6b1]/10 rounded-full blur-2xl animate-pulse"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-center font-serif font-bold mb-4 animate-fade-in-down">
          Wedding Celebrations
        </h2>
        <p className="text-lg sm:text-xl text-center max-w-2xl mx-auto mb-16 leading-relaxed opacity-90 animate-fade-in-up">
          A sacred journey following cherished Keralite traditions
        </p>

        <div className="relative">
          {/* Central Timeline Line (Hidden on Mobile) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-transparent via-[#f2e6b1]/40 to-transparent"></div>

          <div className="space-y-16 md:space-y-24">
            {events.map((event, i) => (
              <div 
                key={i} 
                className={`flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0 group 
                  ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                
                {/* Text Content: Centered on mobile, aligned on desktop */}
                <div className={`w-full md:w-1/2 flex flex-col items-center text-center px-4
                  ${i % 2 === 0 
                    ? 'md:items-end md:text-right md:pr-16 lg:pr-24' 
                    : 'md:items-start md:text-left md:pl-16 lg:pl-24'
                  } transition-all duration-500`}
                >
                  <h3 className="text-2xl md:text-3xl font-serif font-bold mb-2 text-[#f2e6b1]">{event.name}</h3>
                  <p className="text-lg font-medium text-[#f2e6b1]/80 mb-3 italic">{event.time}</p>
                  <p className="text-base md:text-lg opacity-90 max-w-sm md:max-w-md">{event.desc}</p>
                </div>

                {/* Image Container */}
                <div className="relative flex-shrink-0 z-20">
                  {/* Timeline Dot (Desktop only) */}
                  <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#f2e6b1] rounded-full shadow-[0_0_15px_rgba(242,230,177,0.8)]"></div>
                  
                  <div className="w-44 h-44 md:w-48 md:h-48 lg:w-56 lg:h-56 p-2 rounded-full border-2 border-[#f2e6b1]/20 group-hover:border-[#f2e6b1]/60 transition-all duration-700 animate-float">
                     <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#f2e6b1] shadow-2xl">
                        <img 
                          src={event.img} 
                          alt={event.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                     </div>
                  </div>
                </div>

                {/* Balance Spacer (Desktop only) */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-fade-in-down { animation: fade-in-down 0.8s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out 0.2s forwards; }
        .animate-float { animation: float 4s ease-in-out infinite; }
      `}</style>
    </section>
  );
}