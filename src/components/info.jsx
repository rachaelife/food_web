import { FaClock, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactInfo() {
  return (
    <section className="w-full max-w-[1440px] mx-auto bg-white px-6 lg:px-16 py-16 lg:py-28">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        
        {/* Open Hours */}
        <div className="flex flex-col items-center gap-6 w-full lg:w-[405px] mx-auto">
          <FaClock className="w-12 h-12 " /> {/* 48px = w-12 h-12 */}
          <h3 className="text-xl font-semibold text-gray-800">Open Hours</h3>
          <p className="text-gray-600">
            Monday - Friday | 9:00am - 9:00pm <br />
            Saturday - Sunday | 9:00am - 4:00pm
          </p>
        </div>

        {/* Phone */}
        <div className="flex flex-col items-center gap-6 w-full lg:w-[405px] mx-auto">
          <FaPhoneAlt className="w-12 h-12 " />
          <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <a
            href="tel:+13865309290"
            className=" font-medium hover:underline"
          >
            +1 386 530 9290
          </a>
        </div>

        {/* Office */}
        <div className="flex flex-col items-center gap-6 w-full lg:w-[405px] mx-auto">
          <FaMapMarkerAlt className="w-12 h-12 " />
          <h3 className="text-xl font-semibold text-gray-800">Office</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className=" font-medium hover:underline"
          >
            123 Sample St, Sydney NSW 2000 AU
          </a>
        </div>
      </div>
    </section>
  );
}
