import { useLocation } from "react-router-dom";
import Layout from "./layout";


export default function Achievements() {
  const location = useLocation();

  const testimonials = [
    {
      name: "Wade Warren",
      position: "Position, Company name",
      image: "https://i.pravatar.cc/40?img=1",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      name: "Jenny Wilson",
      position: "Position, Company name",
      image: "https://i.pravatar.cc/40?img=2",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      name: "Albert Flores",
      position: "Position, Company name",
      image: "https://i.pravatar.cc/40?img=3",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
  ];

  const content = (
    <>
      {/* Achievements Section */}
      <section className="w-full px-6 md:px-16 py-16 md:py-28 flex justify-center items-center bg-white">
        <div className="w-full max-w-[1312px] flex flex-col gap-6">
          <div className="w-full flex flex-col gap-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold">Our Achievements</h2>
            <p className="max-w-2xl mx-auto text-gray-600 text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              varius enim in eros elementum tristique.
            </p>
          </div>

          {/* Numbers List */}
          <div className="w-full grid grid-cols-2 sm:flex sm:flex-row justify-around items-center gap-6 sm:gap-4 mt-6">
            <div className="text-center">
              <h3 className="text-xl md:text-2xl font-bold">+200</h3>
              <span className="text-sm text-gray-600">Customers Served</span>
            </div>
            <div className="text-center">
              <h3 className="text-xl md:text-2xl font-bold">50K</h3>
              <span className="text-sm text-gray-600">Branches</span>
            </div>
            <div className="text-center">
              <h3 className="text-xl md:text-2xl font-bold">370k</h3>
              <span className="text-sm text-gray-600">Deliveries</span>
            </div>
            <div className="text-center">
              <h3 className="text-xl md:text-2xl font-bold">100+</h3>
              <span className="text-sm text-gray-600">Recognition</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full max-w-[1440px] mx-auto px-6 md:px-16 py-16 md:py-28 flex flex-col gap-12 md:gap-20">
        <div className="max-w-xl flex flex-col gap-4 text-center md:text-left mx-auto md:mx-0">
          <h2 className="text-2xl md:text-3xl font-bold">Our Happy Customers</h2>
          <p className="text-gray-600 text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg p-6 md:p-8 flex flex-col gap-4 shadow-sm hover:shadow-md transition"
            >
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-yellow-500 text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                {t.review}
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full" />
                <div>
                  <p className="font-semibold text-sm md:text-base">{t.name}</p>
                  <p className="text-xs md:text-sm text-gray-500">{t.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom navigation */}
        <div className="flex justify-between items-center mt-6">
          <div className="flex gap-2 justify-center md:justify-start">
            <span className="w-2 h-2 rounded-full bg-gray-800"></span>
            <span className="w-2 h-2 rounded-full bg-gray-400"></span>
            <span className="w-2 h-2 rounded-full bg-gray-400"></span>
          </div>
          <div className="flex gap-4">
            <button className="w-8 h-8 md:w-10 md:h-10 border border-gray-400 rounded-full flex items-center justify-center">
              ←
            </button>
            <button className="w-8 h-8 md:w-10 md:h-10 border border-gray-400 rounded-full flex items-center justify-center">
              →
            </button>
          </div>
        </div>
      </section>
    </>
  );

  // If we are on /achievements page → wrap in Layout
  return location.pathname === "/achievements" ? (
    <Layout>{content}</Layout>
  ) : (
    content
  );
}


