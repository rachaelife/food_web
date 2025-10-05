// src/components/AboutSection.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import Layout from "./layout";

export default function AboutSection() {
  const location = useLocation();
  const isStandalonePage = location.pathname === "/about";

  const content = (
    <>
      <section className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-16 lg:py-28 gap-12 lg:gap-20 bg-slate-50">
        {/* Welcome Text */}
        <div className="w-full lg:w-[503px] flex flex-col gap-6 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold">
            Welcome to Our Restaurant
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique. Duis cursus,
            mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
            libero vitae erat.
          </p>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique. Duis cursus,
            mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
            libero vitae erat.
          </p>
          <button className="px-6 py-3 bg-black text-white rounded-md w-fit mx-auto lg:mx-0 hover:bg-gray-800 transition">
            Book a Table
          </button>
        </div>

        {/* Image */}
        <div className="w-full lg:w-[729px]">
          <img
            src="public/assets/31632d08fe95e1819f7aabbcb1d0ae4a4e6c45a5.jpg"
            alt="Delicious Food"
            className="w-full h-auto lg:h-[640px] object-cover rounded-md"
          />
        </div>
      </section>

      <section className="w-full bg-slate-100 h-auto md:h-[864px] px-6 md:px-[64px] pt-12 md:pt-[112px] pb-12 md:pb-[112px] ">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-center gap-12 md:gap-[80px] h-full">
          {/* Image Container */}
          <div className="flex-1 flex items-center justify-center h-[400px] md:full">
            <img
              src="public/assets/image.jpg"
              alt="About us"
              className="w-full h-full object-cover rounded-md shadow-md"
            />
          </div>

          {/* Left: Text Container */}
          <div className="flex-1 flex flex-col justify-center h-auto md:h-[520px]">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
              About Us
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis
              cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
              commodo diam libero vitae erat.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis
              cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
              commodo diam libero vitae erat.
            </p>

            <button className="px-8 py-3 bg-black text-white rounded-md w-fit mx-auto lg:mx-0 hover:bg-gray-800 transition mt-5">
              Book a table
            </button>
          </div>
        </div>
      </section>
    </>
  );

  
  return isStandalonePage ? <Layout>{content}</Layout> : content;
}

