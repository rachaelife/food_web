import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import DishCard from "./card";
import Layout from "./layout";

const dishes = [
  {
    id: 1,
    name: "Bengali Cut (without Head)",
    desc: "Freshly cut fish without head, perfect for curries and stews.",
    price: "$40",
    img: "/assets/2fe5abc145367b5a4ab582597e52907153c08571.png",
  },
  {
    id: 2,
    name: "Bengal Cut (without Head)",
    desc: "Traditional cut style, ideal for frying or steaming.",
    price: "$52",
    img: "/assets/23ef0a3cfca84e7a8c2393c0ff4ef9d1a8265fdb.png",
  },
  {
    id: 3,
    name: "Steaks Freshwater Rohu Small",
    desc: "Tender freshwater rohu, sliced into small juicy steaks.",
    price: "$62",
    img: "/assets/409fdc25dc4ade3c3d52e50045bec42e99817442.png",
  },
  {
    id: 4,
    name: "Medium Prawn Without Tail Shell",
    desc: "Fresh prawns cleaned and ready for spicy recipes.",
    price: "$35",
    img: "/assets/b775395766fc1defcba8eb074a6f6daf5cef5515.png",
  },
  {
    id: 5,
    name: "Premium Grade Mackerel (Cleaned)",
    desc: "Top-quality mackerel, cleaned and ready for the grill.",
    price: "$48",
    img: "/assets/d5eee31dfe17d5285b72dada8e9ab236e9374fc3.png",
  },
  {
    id: 6,
    name: "Rosa Hilsa (Medium Grade)",
    desc: "Delicious hilsa fish, a traditional delicacy.",
    price: "$55",
    img: "/assets/fcd6372bd6fcdaf8b7916ac3b5cafc8bbf00e818.png",
  },
];

export default function ProductPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const isStandalonePage = location.pathname === "/products";

  // ✅ Navigate to Checkout with selected dish data
  const handleCardClick = (dish) => {
    navigate("/checkout", { state: { dish } });
  };

  const content = (
    <section className="max-w-[1440px] mx-auto bg-white pt-[112px] pb-[112px] px-6 lg:px-[64px] flex flex-col items-center">
      {/* Special Dishes Header */}
      <div className="max-w-[1312px] mx-auto text-center mb-12 px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-5">
          Our Special Dishes
        </h2>
        <p className="text-gray-500 text-sm md:text-base">
          Handpicked meals just for you
        </p>
      </div>

      {/* Filter */}
      <div className="w-full max-w-[552px] flex flex-wrap justify-center gap-3 mb-16">
        {["All", "Rice", "Swallow", "Veggies", "Sea Food", "Drinks", "Others"].map(
          (tab) => (
            <button
              key={tab}
              className="px-4 py-2 text-gray-600 text-sm md:text-base font-medium hover:bg-blue-100 rounded-md transition"
            >
              {tab}
            </button>
          )
        )}
      </div>

      {/* Cards Grid */}
      <div className="max-w-[1296px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-[48px] px-4">
        {dishes.map((dish) => (
          <div key={dish.id} onClick={() => handleCardClick(dish)} className="cursor-pointer">
            <DishCard
              img={dish.img}
              name={dish.name}
              desc={dish.desc}
              price={dish.price}
            />
          </div>
        ))}
      </div>
    </section>
  );

  return isStandalonePage ? <Layout>{content}</Layout> : content;
}

