export default function FooterMessage() {
  return (
    <section className="bg-[#7a1f3d] text-[#f2e6b1] py-16 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">

        {/* No Gifts Message */}
        <p className="text-lg leading-relaxed">
          Your presence and blessings are the greatest gift to us.
          <br />
          Kindly come with your love and good wishes only.
        </p>

        {/* Waiting Message */}
        <p className="text-lg font-medium">
          We are eagerly waiting to celebrate this special day with you.
        </p>

        {/* With Love */}
        <div className="pt-6">
          <p className="text-lg italic mb-2">
            With love,
          </p>

          <p className="text-xl font-semibold">
            Nayana & Mohan
          </p>

          <p className="text-sm opacity-90 mt-1">
            and our families
          </p>
        </div>

        {/* Divider */}
        <div className="w-24 h-px bg-[#f2e6b1]/50 mx-auto my-8" />

        {/* Copyright */}
        <p className="text-sm opacity-80">
          © {new Date().getFullYear()} Starx Innovation and Solutions. All rights reserved.
        </p>

      </div>
    </section>
  );
}

