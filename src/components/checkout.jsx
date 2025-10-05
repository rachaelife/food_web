import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaChevronLeft, FaChevronDown } from "react-icons/fa";
import Navbar from "./nav";
import Footer from "./footer";
import toast, { Toaster } from "react-hot-toast";

const Checkout = () => {
  const location = useLocation();
  const dish = location.state?.dish; // ✅ Get dish data from navigation

  const [formData, setFormData] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
    name: "",
    address: "",
    city: "",
    zip: "",
    country: "United States",
  });

  // ✅ Use dish if available, otherwise fallback to default
  const [orderItems] = useState(
    dish
      ? [
          {
            id: dish.id,
            name: dish.name,
            size: "Standard",
            price: parseFloat(dish.price.replace("$", "")),
            image: dish.img,
          },
        ]
      : [
          {
            id: 1,
            name: "Simple Mushroom Pizza, Small",
            size: "Size: S",
            price: 85.0,
            image: "/assets/2fe5abc145367b5a4ab582597e52907153c08571.png",
          },
          {
            id: 2,
            name: "Bengali Kat Jatimeal (Meat)",
            size: "Size: S",
            price: 64.0,
            image: "/assets/23ef0a3cfca84e7a8c2393c0ff4ef9d1a8265fdb.png",
          },
        ]
  );

  const subtotal = orderItems.reduce((acc, item) => acc + item.price, 0);
  const salesTax = subtotal * 0.05;
  const total = subtotal + salesTax;

  // Handle input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validation
  const handleSubmit = (e) => {
    e.preventDefault();

    const { cardNumber, expiry, cvv, name, address, city, zip } = formData;

    if (!cardNumber || cardNumber.length < 16) {
      toast.error("Card number must be at least 16 digits.");
      return;
    }
    if (!expiry.match(/^(0[1-9]|1[0-2])\/\d{2}$/)) {
      toast.error("Enter a valid expiry date (MM/YY).");
      return;
    }
    if (cvv.length !== 3) {
      toast.error("CVV must be 3 digits.");
      return;
    }
    if (!name || !address || !city || !zip) {
      toast.error("Please fill in all required fields.");
      return;
    }

    toast.success("Payment successful!");
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      {location.pathname === "/checkout" && <Navbar />}

      <div className="min-h-screen bg-gray-50 flex flex-col p-6 pt-[126px]">
        {/* Back */}
        <div className="mb-6">
          <Link
            to="/products"
            className="flex items-center text-gray-600 hover:text-black"
          >
            <FaChevronLeft className="mr-2" />
            Back to Products
          </Link>
        </div>

        <div className="flex-1 w-full max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className="bg-white shadow-lg rounded-xl p-6 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-gray-500 mb-2">
                <FaChevronDown className="h-4 w-4 rotate-90" />
                <span className="text-sm">Checkout</span>
              </div>
              <div className="mb-1 text-sm text-gray-500">Pay by Order</div>
              <div className="text-4xl font-bold">${total.toFixed(2)}</div>
            </div>

            {/* ✅ Dynamic Items */}
            <div className="space-y-4">
              {orderItems.map((item) => (
                <div key={item.id} className="flex gap-4 items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <div className="font-medium">{item.name}</div>
                    <div className="text-sm text-gray-500">{item.size}</div>
                  </div>
                  <div className="font-semibold">${item.price.toFixed(2)}</div>
                </div>
              ))}
            </div>

            {/* Totals */}
            <div className="border-t pt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Sales tax (5%)</span>
                <span>${salesTax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-semibold border-t pt-2">
                <span>Total due</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Payment Form */}
          <div className="bg-white shadow-lg rounded-xl p-6 space-y-6">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium">Card Number</label>
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  placeholder="1234 5678 9012 3456"
                  className="w-full border px-3 py-2 rounded-md mt-1"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    name="expiry"
                    value={formData.expiry}
                    onChange={handleChange}
                    placeholder="MM/YY"
                    className="w-full border px-3 py-2 rounded-md mt-1"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">CVV</label>
                  <input
                    type="text"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleChange}
                    placeholder="123"
                    maxLength="3"
                    className="w-full border px-3 py-2 rounded-md mt-1"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium">
                  Cardholder Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full border px-3 py-2 rounded-md mt-1"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">
                  Billing Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="123 Main Street"
                  className="w-full border px-3 py-2 rounded-md mt-1"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="New York"
                    className="w-full border px-3 py-2 rounded-md mt-1"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">ZIP Code</label>
                  <input
                    type="text"
                    name="zip"
                    value={formData.zip}
                    onChange={handleChange}
                    placeholder="10001"
                    className="w-full border px-3 py-2 rounded-md mt-1"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium">Country</label>
                <div className="relative">
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded-md mt-1 pr-10 appearance-none"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>United Kingdom</option>
                    <option>Nigeria</option>
                    <option>Ghana</option>
                  </select>
                  <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-lg text-lg font-semibold hover:bg-red-600 transition"
              >
                Pay ${total.toFixed(2)}
              </button>
            </form>
          </div>
        </div>
      </div>

      {location.pathname === "/checkout" && <Footer />}
    </>
  );
};

export default Checkout;


