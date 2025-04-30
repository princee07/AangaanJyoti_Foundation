export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <p className="text-gray-400 text-sm">
              Aangan Jyoti is dedicated to improving lives through education, healthcare, and
              community support. Join us in making a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#causes" className="text-gray-400 hover:text-white">
                  Our Causes
                </a>
              </li>
              <li>
                <a href="#volunteers" className="text-gray-400 hover:text-white">
                  Volunteers
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <p className="text-gray-400 text-sm">
              660 Brooklyn Street, 88 New York
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Email: <a href="mailto:aangangyoti@oxpitan.com" className="hover:text-white">aangangyoti@oxpitan.com</a>
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Phone: <a href="tel:6668880000" className="hover:text-white">666 888 0000</a>
            </p>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">
              Stay updated with our latest news and events. Subscribe to our newsletter.
            </p>
            <form>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 rounded-lg bg-gray-400 text-gray-800"
              />
              <button
                type="submit"
                className="mt-4 w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-400">
            &copy; 2025 Aangan Jyoti. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              Facebook
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}