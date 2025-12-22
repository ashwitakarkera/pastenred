import { useState } from "react";
import { motion } from "framer-motion";

import g1 from "../assets/images/gallery/g1.jfif";
import g2 from "../assets/images/gallery/g2.jfif";
import g3 from "../assets/images/gallery/g3.jfif";
import g4 from "../assets/images/gallery/g4.jfif";
import g5 from "../assets/images/gallery/g5.jfif";
import g6 from "../assets/images/gallery/g6.jfif";
import g7 from "../assets/images/gallery/g7.jfif";
import g8 from "../assets/images/gallery/g8.jfif";
import g9 from "../assets/images/gallery/g9.jfif";
import g11 from "../assets/images/gallery/g11.jfif";
import g12 from "../assets/images/gallery/g12.jfif";
import g13 from "../assets/images/gallery/g13.jfif";

/* 🔹 Two DIFFERENT image sets */
const rowOne = [g1, g2, g3, g4, g5, g6];
const rowTwo = [g7, g8, g9, g11, g12, g13];

export default function Gallery() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const SliderRow = ({ images, direction = "left" }) => (
    <div className="overflow-hidden w-full">
      <motion.div
        className="flex w-max"
        animate={{
          x: direction === "left" ? [-0, -1200] : [-1200, 0],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 35,
            ease: "linear",
          },
        }}
      >
        {[...images, ...images].map((img, i) => (
          <div
            key={i}
            className="w-48 h-48 md:w-64 md:h-64 mx-4 flex-shrink-0"
          >
            <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-[#f2e6b1]/30">
              <img
                src={img}
                alt="gallery"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );

  return (
    <section className="py-20 bg-[#7a1f3d] text-[#f2e6b1] px-4">
      <h2 className="text-3xl text-center font-serif mb-12">
        Photo Gallery
      </h2>

      {/* 🔹 Row 1: LEFT → RIGHT */}
      <div className="mb-12">
        <SliderRow images={rowOne} direction="right" />
      </div>

      {/* 🔹 Row 2: RIGHT → LEFT */}
      <div className="mb-16">
        <SliderRow images={rowTwo} direction="left" />
      </div>

      {/* View Gallery Button */}
      <div className="text-center">
        <button
          onClick={() => setIsGalleryOpen(true)}
          className="bg-[#f2e6b1] text-[#7a1f3d] px-8 py-3 rounded-full font-semibold text-lg hover:bg-white transition-all shadow-xl"
        >
          View Gallery
        </button>
      </div>

      {/* Modal */}
      {isGalleryOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-[#f2e6b1]/95 rounded-3xl max-w-6xl max-h-[90vh] overflow-y-auto p-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-3xl font-serif text-[#7a1f3d]">
                Full Gallery
              </h3>
              <button
                onClick={() => setIsGalleryOpen(false)}
                className="text-2xl text-[#7a1f3d]"
              >
                ×
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...rowOne, ...rowTwo].map((img, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-2xl overflow-hidden shadow-xl"
                >
                  <img
                    src={img}
                    alt={`Gallery ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

