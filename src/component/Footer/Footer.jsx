// components/Footer.jsx
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handlePhoneClick = () => {
    window.location.href = "tel:+911234567890";
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:panchayat@gram.gov.in";
  };

  const handleMapClick = () => {
    // Open Google Maps with the location
    window.open(
      "https://maps.google.com/?q=Gram+Panchayat+Office+Village+Name+District+Maharashtra",
      "_blank"
    );
  };

  return (
    <footer className="bg-gray-800 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Address Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-4 text-[#D2B48C]">पत्ता</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-[#D2B48C] mr-3 mt-1 shrink-0" />
                <div className="text-gray-300">
                  <p className="font-medium">ग्रामपंचायत कार्यालय</p>
                  <p className="mt-1">गाव नाव</p>
                  <p>तालुका, जिल्हा</p>
                  <p>महाराष्ट्र - ४१० २०१</p>
                </div>
              </div>

              <button
                onClick={handleMapClick}
                className="flex items-center text-[#D2B48C] mt-2"
              >
                <Navigation size={16} className="mr-2" />
                <span>नकाशा वर पहा</span>
              </button>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#D2B48C]">
              संपर्क माहिती
            </h3>
            <div className="space-y-4">
              <button
                onClick={handlePhoneClick}
                className="flex items-center text-gray-300 transition duration-300 w-full text-left"
              >
                <Phone className="h-5 w-5 text-[#D2B48C] mr-3 shrink-0" />
                <div>
                  <p className="font-medium">दूरध्वनी</p>
                  <p className="text-sm">+९१ १२३४५ ६७८९०</p>
                </div>
              </button>

              <button
                onClick={handleEmailClick}
                className="flex items-center text-gray-300 transition duration-300 w-full text-left"
              >
                <Mail className="h-5 w-5 text-[#D2B48C] mr-3 shrink-0" />
                <div>
                  <p className="font-medium">ई-मेल</p>
                  <p className="text-sm">panchayat@gram.gov.in</p>
                </div>
              </button>

              <div className="flex items-center text-gray-300">
                <Clock className="h-5 w-5 text-[#D2B48C] mr-3 shrink-0" />
                <div>
                  <p className="font-medium">कार्यालयीन वेळ</p>
                  <p className="text-sm">
                    सोमवार ते शनिवार: सकाळ ९:०० ते संध्याकाळ ५:००
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#D2B48C]">
              त्वरित संदेश
            </h3>
            <form className="space-y-3">
              <div>
                <input
                  type="text"
                  placeholder="आपले नाव"
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="ई-मेल"
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
                />
              </div>
              <div>
                <textarea
                  placeholder="आपला संदेश"
                  rows="3"
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#D2B48C] hover:bg-green-700 text-black px-4 py-2 rounded-md transition duration-300"
              >
                संदेश पाठवा
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} ग्रामपंचायत. सर्व हक्क राखीव.
            </p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <a
                href="/privacy"
                className="text-gray-400 hover:text-green-400 text-sm"
              >
                गोपनीयता धोरण
              </a>
              <a
                href="/terms"
                className="text-gray-400 hover:text-green-400 text-sm"
              >
                सेवा अटी
              </a>
              <a
                href="/sitemap"
                className="text-gray-400 hover:text-green-400 text-sm"
              >
                साईटमॅप
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
