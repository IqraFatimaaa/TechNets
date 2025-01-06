import React from "react";

function Footer() {
  return (
    <div>
      <footer className="bg-grey-900 text-white py-12">
        <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="mb-4">
              {/* Replace with the actual logo */}
              <img
                src="https://www.technetcloud.co/_next/image?url=%2Fimages%2Ffavicon.png&w=256&q=75"
                alt="Logo"
                className="w-12 "
              />
            </div>
            <p className="text-gray-400">
              Transforming industries with cutting-edge technology and seamless
              integration. Driving digital transformation with innovative
              solutions and unparalleled expertise.
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Useful Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Courses
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Internships
                </a>
              </li>
            </ul>
          </div>

          {/* Support & Help */}
          <div>
            <h4 className="text-lg font-bold mb-4">Support & Help</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Mail Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
