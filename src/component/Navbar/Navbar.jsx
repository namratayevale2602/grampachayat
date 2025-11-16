// components/Navbar.jsx
import { useState } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "मुखपृष्ठ", href: "/" },
    { name: "आमच्याबद्दल", href: "/about" },
    { name: "गॅलरी", href: "/gallery" },
    { name: "कार्यक्रम", href: "/event" },
    { name: "संघ", href: "/team" },
    { name: "संपर्क", href: "/contact" },
  ];

  const handlePhoneClick = () => {
    window.location.href = "tel:+911234567890";
  };

  return (
    <nav className="bg-[#8B4513] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo and Contact */}
          <div className="flex items-center">
            <div className="shrink-0 flex items-center">
              <img
                className="h-12 w-12"
                src="/assets/panchayat-logo.png"
                alt="ग्रामपंचायत लोगो"
              />
              <div className="ml-3">
                <h1 className="text-white text-xl font-bold">ग्रामपंचायत</h1>
                <p className="text-[#F5F5DC] text-sm">गाव विकास</p>
              </div>
            </div>
          </div>

          {/* Desktop Menu and Contact Info */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Navigation Links */}
            <div className="flex items-center space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-[#F5F5DC] hover:bg-[#D2B48C] hover:text-[#5D2B0F] px-3 py-2 rounded-md text-1xl font-medium transition duration-300"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Contact Number with Icon */}
            <div className="flex items-center space-x-2 border-l border-[#D2B48C] pl-6">
              <button
                onClick={handlePhoneClick}
                className="flex items-center space-x-2 text-[#F5F5DC] transition duration-300"
              >
                <Phone size={18} className="text-[#F5F5DC]" />
                <span className="text-1xl">+९१ १२३४५ ६७८९०</span>
              </button>
            </div>

            {/* Address with Icon */}
            <div className="flex items-center space-x-2">
              <MapPin size={18} className="text-[#F5F5DC]" />
              <span className="text-[#F5F5DC] text-1xl">गाव नाव, जिल्हा</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Phone icon for mobile */}
            <button
              onClick={handlePhoneClick}
              className="text-white hover:text-green-200"
            >
              <Phone size={20} />
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-green-200 focus:outline-none focus:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#8B4513] rounded-lg mb-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:bg-green-600 block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}

              {/* Mobile Contact Info */}
              <div className="border-t border-[#D2B48C] pt-3 mt-3">
                <div className="flex items-center space-x-2 text-white px-3 py-2">
                  <Phone size={18} />
                  <button
                    onClick={() => {
                      handlePhoneClick();
                      setIsOpen(false);
                    }}
                    className="text-sm hover:text-green-200"
                  >
                    +९१ १२३४५ ६७८९०
                  </button>
                </div>
                <div className="flex items-start space-x-2 text-white px-3 py-2">
                  <MapPin size={18} className="mt-0.5 shrink-0" />
                  <span className="text-sm">गाव नाव, जिल्हा, महाराष्ट्र</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
