export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 px-6 md:px-16 py-12">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 border-b border-gray-700 pb-10">
        {/* Newsletter */}
        <div className="md:col-span-2 space-y-4">
          <h3 className="text-white font-semibold">Subscribe to our newsletter</h3>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-auto flex-1 px-4 py-2 rounded border border-gray-600 bg-transparent text-white placeholder-gray-400 focus:outline-none"
            />
            <button className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200 transition">
              Subscribe
            </button>
          </div>
          <p className="text-xs text-gray-500">
            By subscribing you agree to with our{" "}
            <a href="#" className="underline">
              Privacy Policy
            </a>
          </p>
        </div>

        {/* Opening Hours */}
        <div>
          <h3 className="text-white font-semibold">Opening Hours</h3>
          <p className="text-sm">Monday - Friday<br />8:00am to 9:30pm</p>
          <p className="text-sm mt-2">Saturday - Sunday<br />8:00am to 4:00pm</p>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-white font-semibold mb-4">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Menu</a></li>
            <li><a href="#" className="hover:underline">Locations</a></li>
            <li><a href="#" className="hover:underline">Jobs</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">Community Services</a></li>
          </ul>
        </div>

        {/* Top Dishes */}
        <div>
          <h3 className="text-white font-semibold mb-4">Top Dishes</h3>
          <ul className="space-y-2 text-sm">
            <li>Bengal Cut (Without Head)</li>
            <li>Premium Grade Mackerel (Cleaned)</li>
            <li>Basa Fillet (Platinum Grade)</li>
            <li>Medium Prawn - Without Tail (Surmai)</li>
            <li>Bengal Cut</li>
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h3 className="text-white font-semibold mb-4">About Us</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Contact</a></li>
            <li><a href="#" className="hover:underline">Help & Support</a></li>
            <li><a href="#" className="hover:underline">FAQ</a></li>
            <li><a href="#" className="hover:underline">Terms and Conditions</a></li>
            <li><a href="#" className="hover:underline">Partners</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-sm text-gray-500">
        <p>© 2025 Ddsgnr. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Cookies Settings</a>
        </div>
        {/* Social icons */}
        <div className="flex gap-4 mt-4 md:mt-0 text-gray-400">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </footer>
  );
}
