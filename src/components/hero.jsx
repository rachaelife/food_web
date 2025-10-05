// src/components/Hero.jsx
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative w-full h-[900px] md:h-[90vh] bg-[url('/assets/image.jpg')] bg-cover bg-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative max-w-[1440px] mx-auto h-full flex flex-col justify-center items-center md:items-start px-[32px] md:px-[64px] text-center md:text-left">
        <h1 className="text-3xl md:text-6xl font-bold text-white leading-tight">
          Delicious Food <br className="hidden md:block" /> For Every Mood
        </h1>

        <p className="mt-4 text-base md:text-lg text-gray-200 max-w-[600px]">
          Experience the taste of freshness and quality with our carefully crafted meals.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col md:flex-row gap-4">
          <Link
            to="/menu"
            className="px-6 py-3 text-lg rounded-lg shadow-lg bg-black text-white"
          >
            Explore Menu
          </Link>
          <Link
            to="/order"
            className="bg-white text-green-600 px-6 py-3 text-lg rounded-lg shadow-lg hover:bg-gray-100 transition"
          >
            Order Online
          </Link>
        </div>
      </div>
    </section>
  );
}


