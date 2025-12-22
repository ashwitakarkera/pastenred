export default function Invitation() {
  return (
    <section className="py-20 bg-[#7a1f3d] text-[#f2e6b1] px-4">
      <div className="max-w-4xl mx-auto text-center">
        
        <div className="max-w-2xl mx-auto mb-12">
          <p className="text-2xl md:text-2xl leading-relaxed mb-6 text-bold">
            With immense joy and the blessings of our families,
          </p>
          <p className="text-2xl md:text-3xl font-serif italic mb-6">
            We invite you to celebrate
          </p>
          <p className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Nayana & Mohan
          </p>
          <p className="text-xl md:text-2xl leading-relaxed">
            on our sacred union.
          </p>
        </div>

        {/* Artistic January 2025 Calendar */}
        <div className="max-w-lg mx-auto p-8 bg-[#f2e6b1]/10 backdrop-blur-md rounded-3xl border-4 border-[#f2e6b1]/20 shadow-2xl relative overflow-hidden">
          {/* Decorative top */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-gradient-to-br from-[#f2e6b1] to-[#7a1f3d] rounded-full opacity-50"></div>
          
          <div className="relative z-10">
            {/* Month Header */}
            <div className="mb-6">
              <h3 className="text-3xl font-serif font-bold text-[#f2e6b1]">January 2025</h3>
              <div className="w-24 h-1 bg-gradient-to-r from-[#f2e6b1] to-transparent mx-auto mt-2 rounded-full"></div>
            </div>

            {/* Days Header */}
            <div className="grid grid-cols-7 gap-2 mb-4 text-xs font-semibold uppercase tracking-wider text-[#f2e6b1]/80">
              <div>S</div><div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div>
            </div>

            {/* Calendar Days - Artistic January layout */}
            <div className="grid grid-cols-7 gap-2 text-lg">
              {/* Week 1 */}
              <div></div><div></div><div></div><div></div>
              <div className="p-3 bg-[#f2e6b1]/20 rounded-lg">1</div>
              <div className="p-3 bg-[#f2e6b1]/20 rounded-lg">2</div>
              <div className="p-3 bg-[#f2e6b1]/20 rounded-lg">3</div>
              
              {/* Week 2 */}
              <div className="p-3 bg-[#f2e6b1]/20 rounded-lg">4</div>
              <div className="p-3 bg-[#f2e6b1]/20 rounded-lg">5</div>
              <div className="p-3 bg-[#f2e6b1]/20 rounded-lg">6</div>
              <div className="p-3 bg-[#f2e6b1]/20 rounded-lg">7</div>
              <div className="p-3 bg-[#f2e6b1]/20 rounded-lg">8</div>
              <div className="p-3 bg-[#f2e6b1]/20 rounded-lg">9</div>
              <div className="p-3 bg-[#f2e6b1]/20 rounded-lg">10</div>
              
              {/* Week 3 */}
              <div className="p-3 bg-[#f2e6b1]/20 rounded-lg">11</div>
              <div className="p-3 bg-[#f2e6b1]/20 rounded-lg">12</div>
              <div className="p-3 bg-[#f2e6b1]/20 rounded-lg">13</div>
              <div className="p-3 bg-[#f2e6b1]/20 rounded-lg">14</div>
              <div className="p-3 bg-[#f2e6b1]/20 rounded-lg">15</div>
              <div className="p-3 bg-[#f2e6b1]/20 rounded-lg">16</div>
              <div className="p-3 bg-[#f2e6b1]/20 rounded-lg">17</div>
              
              {/* Week 4 */}
              <div className="p-3 bg-[#f2e6b1]/20 rounded-lg">18</div>
              <div className="p-3 bg-[#f2e6b1]/20 rounded-lg">19</div>
              <div className="p-3 bg-[#f2e6b1]/20 rounded-lg">20</div>
              <div className="p-3 bg-[#f2e6b1]/20 rounded-lg">21</div>
              <div className="p-3 bg-[#f2e6b1]/20 rounded-lg">22</div>
              <div className="p-3 bg-[#f2e6b1]/20 rounded-lg">23</div>
              <div className="p-3 bg-[#f2e6b1]/20 rounded-lg">24</div>
              
              {/* Week 5 - Wedding Week */}
              <div className="p-3 bg-[#f2e6b1]/20 rounded-lg">25</div>
              {/* Wedding Day 26th with Heart */}
              <div className="p-3 bg-gradient-to-br from-[#f2e6b1] via-yellow-200 to-[#7a1f3d] text-[#7a1f3d] font-bold rounded-xl shadow-xl border-4 border-[#f2e6b1]/50 flex flex-col items-center text-xl transform rotate-[-2deg] hover:rotate-0 transition-transform">
                <span className="text-2xl mb-1">26</span>
                <span className="text-3xl">💕</span>
              </div>
            </div>
          </div>
          
          {/* Decorative bottom flourish */}
          <div className="absolute -bottom-6 right-1/2 transform translate-x-1/2 w-20 h-20 bg-gradient-to-tl from-[#f2e6b1] to-[#7a1f3d] rounded-full opacity-30"></div>
        </div>

        <p className="mt-8 text-lg font-serif italic opacity-90">
          Sunday, 26 January 2025
        </p>
      </div>
    </section>
  );
}


