// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    date: "",
    phone: "",
    guests: "",
    time: "",
    message: "",
    accepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

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
    setModalOpen(false);
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
    <header className="sticky top-0 left-0 w-full z-10 shadow-md">
      <Toaster position="top-center" />

      {/* Top Info Bar */}
      <div className="hidden md:flex bg-white border-b border-black/20">
        <div className="max-w-[1440px] h-[54px] mx-auto flex justify-between gap-5 items-center pl-[62px] pr-[64px] text-gray-700 text-sm">
          <div className="flex gap-12">
            <span>Email: info@ddsgnr.com</span>
            <span>Phone: +956 742 453 678</span>
            <span>
              Opening Hours: Mon - Fri 8:00am - 10:00pm | Sat - Sun 9:00am - 4:00pm
            </span>
          </div>

          <div className="flex gap-5 text-gray-600 text-base">
            <FaFacebookF className="cursor-pointer hover:text-blue-600" />
            <FaTwitter className="cursor-pointer hover:text-sky-500" />
            <FaInstagram className="cursor-pointer hover:text-pink-500" />
            <FaLinkedinIn className="cursor-pointer hover:text-blue-700" />
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-white border-b border-[#676767]">
        <div className="max-w-[1440px] w-full h-[72px] mx-auto flex items-center px-5 md:px-[64px]">
          {/* Desktop layout */}
          <div className="hidden md:flex w-full items-center justify-between">
            <div className="text-2xl font-bold text-black">Ddsgnr</div>

            <div className="flex-1 flex justify-center">
              <div className="flex space-x-8 text-gray-800 font-medium">
                <Link to="/" className="hover:text-green-600">Home</Link>
                <Link to="/about" className="hover:text-green-600">About Us</Link>
                <Link to="/products" className="hover:text-green-600">Menu</Link>
                <Link to="/contact" className="hover:text-green-600">Contact Us</Link>
                <Link to="/achievements" className="hover:text-green-600">Achievements</Link>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button
                aria-label="Search"
                className="flex items-center justify-center w-10 h-10 border border-gray-400 hover:border-green-600"
              >
                <FaSearch className="text-gray-600 hover:text-green-600" />
              </button>

              <button
                onClick={() => setModalOpen(true)}
                className="px-6 py-2 bg-black text-white hover:bg-green-600 transition"
              >
                Book a table
              </button>
            </div>
          </div>

          {/* Mobile layout */}
          <div className="flex md:hidden w-full items-center justify-between">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl p-2"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

            <div className="text-lg font-bold text-black">Ddsgnr</div>

            <button aria-label="Search" className="text-xl p-2">
              <FaSearch className="text-gray-600 hover:text-green-600" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-300 px-5 py-6 shadow-lg">
            <div className="flex flex-col gap-4 text-gray-800 font-medium">
              <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
              <Link to="/products" onClick={() => setMenuOpen(false)}>Menu</Link>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
              <Link to="/achievements" onClick={() => setMenuOpen(false)}>Achievements</Link>
            </div>

            <div className="mt-6">
              <button
                onClick={() => {
                  setModalOpen(true);
                  setMenuOpen(false);
                }}
                className="block w-full text-center px-6 py-3 bg-black text-white hover:bg-green-600 transition"
              >
                Book a table
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Reservation Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg w-full max-w-lg p-6 relative">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-4">Make a Reservation</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="border p-3 rounded-md w-full"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="border p-3 rounded-md w-full"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border p-3 rounded-md w-full"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="number"
                  name="guests"
                  placeholder="Guest Number"
                  value={formData.guests}
                  onChange={handleChange}
                  className="border p-3 rounded-md w-full"
                />
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="border p-3 rounded-md w-full"
                />
              </div>

              <textarea
                name="message"
                placeholder="Message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                className="border p-3 rounded-md w-full"
              ></textarea>

              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input
                  type="checkbox"
                  name="accepted"
                  checked={formData.accepted}
                  onChange={handleChange}
                />
                I accept the Terms
              </label>

              <button
                type="submit"
                className="px-6 py-3 bg-black text-white font-medium rounded-md hover:bg-green-600 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
}





