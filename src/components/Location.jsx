export default function WeddingLocations() {
  const villaMap =
    "https://www.google.com/maps?q=Private+Villa+Mumbai";

  const templeMap =
    "https://www.google.com/maps?q=Sri+Venkateswara+Temple+Nerul+Navi+Mumbai";

  const stays = [
    {
      name: "Hotel Yogi Executive, Vashi",
      map: "https://www.google.com/maps?q=Hotel+Yogi+Executive+Vashi",
    },
    {
      name: "Four Points by Sheraton, Vashi",
      map: "https://www.google.com/maps?q=Four+Points+by+Sheraton+Vashi",
    },
    {
      name: "Royal Tulip, Kharghar",
      map: "https://www.google.com/maps?q=Royal+Tulip+Kharghar",
    },
  ];

  return (
    <section className="py-20 bg-[#f2e6b1] px-4">
      <div className="max-w-4xl mx-auto space-y-12">

        {/* ================= PRE-WEDDING ================= */}
        <div className="bg-[#7a1f3d] text-[#f2e6b1] rounded-3xl p-10 text-center shadow-2xl">
          <h2 className="text-3xl font-serif mb-6">
            Pre-Wedding Celebrations
          </h2>

          <p className="text-lg leading-relaxed mb-8">
            All pre-wedding events including <span className="font-semibold">Mehendi</span>,{" "}
            <span className="font-semibold">Haldi</span>, and other intimate
            gatherings will take place at our private villa.
            <br /><br />
            We look forward to celebrating these beautiful moments together
            in a warm and relaxed setting.
          </p>

          <a
            href={villaMap}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 border-[#f2e6b1] px-8 py-4 rounded-full font-semibold
                       hover:bg-[#f2e6b1] hover:text-[#7a1f3d] transition-all"
          >
            View Villa on Google Maps
          </a>
        </div>

        {/* ================= WEDDING TEMPLE ================= */}
        <div className="bg-[#7a1f3d] text-[#f2e6b1] rounded-3xl p-10 text-center shadow-2xl">
          <h2 className="text-3xl font-serif mb-6">
            Wedding Ceremony
          </h2>

          <p className="text-lg mb-8 leading-relaxed">
            The wedding ceremony will take place at the
            <br />
            <span className="font-semibold">
              Sri Venkateswara (Balaji) Temple, Nerul
            </span>
            <br />
            in the presence of divine blessings and loved ones.
          </p>

          <a
            href={templeMap}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 border-[#f2e6b1] px-8 py-4 rounded-full font-semibold
                       hover:bg-[#f2e6b1] hover:text-[#7a1f3d] transition-all"
          >
            View Temple on Google Maps
          </a>
        </div>
        </div>

    </section>
  );
}



