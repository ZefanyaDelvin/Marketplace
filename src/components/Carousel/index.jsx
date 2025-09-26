import { Icon } from "@iconify/react";
import { useState } from "react";

const slides = [
  {
    id: 1,
    image:
      "https://img.freepik.com/free-photo/fresh-spinach-leaves-isolated-white-background_123827-20570.jpg",
  },
  {
    id: 2,
    image:
      "https://img.freepik.com/free-photo/eggplants-white-surface_144627-16570.jpg",
  },
  {
    id: 3,
    image:
      "https://img.freepik.com/free-photo/variety-fresh-fruits-white-background_144627-18739.jpg",
  },
];

const CategoryCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="flex border">
      {/* Left menu */}
      <aside className="w-1/4 p-6 border-r border-gray-400 mr-2">
        <ul className="space-y-4 text-lg text-black">
          <li>Beras dan Biji-bijian</li>
          <li>Minyak dan Bumbu Dapur</li>
          <li>Protein Hewani</li>
          <li>Sayur-sayuran</li>
          <li>Buah-buahan</li>
          <li>Minuman dan Susu</li>
        </ul>
      </aside>

      {/* Carousel */}
      <div className="relative w-3/4 h-[300px] flex items-center justify-center bg-black overflow-hidden">
        {/* Slide */}
        <img
          src={slides[activeIndex].image}
          alt="slide"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative z-10 text-black text-left px-10">
          <button
            className="mt-4 px-6 py-2 text-white transition flex items-center gap-2 hover:underline"
          >
            Shop Now
            <Icon
              icon="material-symbols:arrow-right-alt"
              width="18"
              height="18"
            />
          </button>
        </div>

        {/* Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-black px-3 py-1 rounded"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-black px-3 py-1 rounded"
        >
          ›
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 flex space-x-2 justify-center w-full">
          {slides.map((_, idx) => (
            <span
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                idx === activeIndex ? "bg-red-500" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryCarousel;
