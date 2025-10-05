import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function ReservationSection() {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    phone: "",
    guests: "",
    time: "",
    message: "",
    accepted: false,
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  // Handle form submit with validation
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, date, phone, guests, time, accepted } = formData;

    if (!name) return toast.error("Please enter your name");
    if (!date) return toast.error("Please select a date");
    if (!phone.match(/^\+?\d{7,15}$/))
      return toast.error("Enter a valid phone number");
    if (!guests || guests <= 0)
      return toast.error("Please enter number of guests");
    if (!time) return toast.error("Please select a time");
    if (!accepted) return toast.error("You must accept the Terms");

    toast.success("Reservation submitted successfully!");

    // Reset form after success
    setFormData({
      name: "",
      date: "",
      phone: "",
      guests: "",
      time: "",
      message: "",
      accepted: false,
    });
  };

  return (
    <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-16 py-16 lg:py-28 flex flex-col lg:flex-row items-center justify-between gap-20 bg-white">
      <Toaster position="top-center" reverseOrder={false} />

      {/* Reservation Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full lg:w-[616px] h-auto flex flex-col gap-8 p-8 border border-gray-200 rounded-md shadow-sm"
      >
        <span className="text-sm uppercase tracking-wide text-gray-500">
          Tagline
        </span>
        <h2 className="text-3xl font-bold text-gray-800">Make a reservation</h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="flex flex-col gap-6">
          {/* Name */}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="border border-gray-300 rounded-md p-3 w-full focus:ring-2 focus:ring-blue-500"
          />

          {/* Date + Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-3 w-full focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone number"
              className="border border-gray-300 rounded-md p-3 w-full focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Guests + Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="number"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              placeholder="Guest Number"
              className="border border-gray-300 rounded-md p-3 w-full focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-3 w-full focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message */}
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            rows={4}
            className="border border-gray-300 rounded-md p-3 w-full focus:ring-2 focus:ring-blue-500"
          ></textarea>

          {/* Checkbox */}
          <label className="flex items-center gap-2 text-gray-600 text-sm">
            <input
              type="checkbox"
              name="accepted"
              checked={formData.accepted}
              onChange={handleChange}
              className="w-4 h-4"
            />{" "}
            I accept the Terms
          </label>

          {/* Submit */}
          <button
            type="submit"
            className="px-6 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition"
          >
            Submit
          </button>
        </div>
      </form>

      {/* Image */}
      <div className="w-full lg:w-[616px] h-auto lg:h-[838px]">
        <img
          src="assets/87aca634df49c69634f8e5d27f1b0ba886998db0.jpg"
          alt="Reservation Dish"
          className="w-full h-full object-cover rounded-md"
        />
      </div>
    </section>
  );
}

