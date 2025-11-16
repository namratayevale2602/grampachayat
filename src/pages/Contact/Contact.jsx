// components/ContactPage.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert(
        "आपले संदेश यशस्वीरित्या पाठवला गेला आहे! आम्ही लवकरच आपल्याशी संपर्क साधू."
      );
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 2000);
  };

  const contactDetails = [
    {
      icon: "📍",
      title: "पत्ता",
      details:
        "ग्रामपंचायत कार्यालय पोमण, तालुका वसई, जिल्हा पालघर, महाराष्ट्र - ४०१२०१",
      link: null,
    },
    {
      icon: "📞",
      title: "दूरध्वनी",
      details: "+९१-९८७६५४३२१०",
      link: "tel:+919876543210",
    },
    {
      icon: "📠",
      title: "फॅक्स",
      details: "+९१-२५०-२४५६७८९",
      link: null,
    },
    {
      icon: "📧",
      title: "ईमेल",
      details: "grampanchayat.pomnan@gmail.com",
      link: "mailto:grampanchayat.pomnan@gmail.com",
    },
    {
      icon: "🕒",
      title: "कार्यकारी वेळ",
      details: "सोमवार ते शनिवार: सकाळ १०:०० ते संध्याकाळ ६:००\nरविवार: सुट्टी",
      link: null,
    },
    {
      icon: "👨‍💼",
      title: "ग्रामविकास अधिकारी",
      details: "श्री. राजेश पाटील\nमोबाईल: +९१-९८९०१२३४५६",
      link: "tel:+919890123456",
    },
  ];

  const socialMedia = [
    {
      name: "Facebook",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      url: "https://facebook.com/grampanchayatpomnan",
      color: "hover:bg-blue-600",
    },
    {
      name: "Twitter",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      ),
      url: "https://twitter.com/grampanchayatpn",
      color: "hover:bg-blue-400",
    },
    {
      name: "Instagram",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.22 14.815 3.73 13.664 3.73 12.367s.49-2.448 1.396-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.906.875 1.396 2.026 1.396 3.323s-.49 2.448-1.396 3.323c-.875.807-2.026 1.297-3.323 1.297zm8.062-5.195c0 .647-.522 1.169-1.169 1.169s-1.169-.522-1.169-1.169.522-1.169 1.169-1.169 1.169.522 1.169 1.169zm2.323-1.169c0 .647-.522 1.169-1.169 1.169s-1.169-.522-1.169-1.169.522-1.169 1.169-1.169 1.169.522 1.169 1.169z" />
        </svg>
      ),
      url: "https://instagram.com/grampanchayat_pomnan",
      color: "hover:bg-pink-600",
    },
    {
      name: "YouTube",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
      url: "https://youtube.com/c/GramPanchayatPomnan",
      color: "hover:bg-red-600",
    },
    {
      name: "WhatsApp",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893-.001-3.189-1.262-6.209-3.553-8.485" />
        </svg>
      ),
      url: "https://wa.me/919876543210",
      color: "hover:bg-green-500",
    },
    {
      name: "LinkedIn",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      url: "https://linkedin.com/company/grampanchayat-pomnan",
      color: "hover:bg-blue-700",
    },
  ];

  return (
    <section className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            आमच्याशी संपर्क साधा
          </h2>
          <motion.h3
            className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#5D2B0F] mb-4"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            ग्रामपंचायत पोमणच्या विकासासाठी आपले सुझाव आणि समस्या आम्हाला कळवा
          </motion.h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Details - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 space-y-6"
          >
            {/* Main Contact Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                संपर्क माहिती
              </h3>

              <div className="space-y-4">
                {contactDetails.map((detail, index) => (
                  <motion.div
                    key={detail.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-4 p-3 rounded-lg hover:bg-green-50 transition-colors"
                  >
                    <div className="w-10 h-10 bg-[#fddcc5] rounded-full flex items-center justify-center shrink-0">
                      <span className="text-lg">{detail.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 mb-1">
                        {detail.title}
                      </h4>
                      {detail.link ? (
                        <a
                          href={detail.link}
                          className="text-gray-600 hover:text-green-600 transition-colors whitespace-pre-line"
                        >
                          {detail.details}
                        </a>
                      ) : (
                        <p className="text-gray-600 whitespace-pre-line">
                          {detail.details}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Media Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-[#8B4513] rounded-2xl shadow-lg p-6 text-white"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center">
                सोशल मीडिया
              </h3>
              <p className="text-purple-100 mb-4 text-sm">
                आमच्याशी कनेक्ट रहा आणि ग्रामपंचायतच्या नवीनतम घडामोडींची माहिती
                घ्या
              </p>

              <div className="grid grid-cols-3 gap-3">
                {socialMedia.map((platform, index) => (
                  <motion.a
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`bg-white/20 backdrop-blur-sm rounded-xl p-3 flex items-center justify-center transition-all duration-300 ${platform.color} hover:text-white`}
                    title={platform.name}
                  >
                    {platform.icon}
                  </motion.a>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-white/20">
                <p className="text-purple-100 text-xs text-center">
                  सर्व सोशल मीडिया प्लॅटफॉर्मवर आम्हाला फॉलो करा
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form and Map - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                संपर्क फॉर्म
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      आपले नाव <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      placeholder="आपले पूर्ण नाव प्रविष्ट करा"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      ईमेल <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      placeholder="आपला ईमेल पत्ता प्रविष्ट करा"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      मोबाईल नंबर <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      placeholder="आपला मोबाईल नंबर प्रविष्ट करा"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      विषय <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    >
                      <option value="">विषय निवडा</option>
                      <option value="सामान्य प्रश्न">सामान्य प्रश्न</option>
                      <option value="तक्रार">तक्रार</option>
                      <option value="सुझाव">सुझाव</option>
                      <option value="योजना माहिती">योजना माहिती</option>
                      <option value="दस्तऐवज मागणी">दस्तऐवज मागणी</option>
                      <option value="इतर">इतर</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    संदेश <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                    placeholder="आपला संदेश येथे प्रविष्ट करा..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-all ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-[#8B4513] shadow-lg"
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      पाठवत आहे...
                    </span>
                  ) : (
                    "संदेश पाठवा"
                  )}
                </motion.button>
              </form>
            </div>

            {/* Google Map */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6 border-b">
                <h3 className="text-2xl font-bold text-gray-800 flex items-center">
                  आमचे स्थान
                </h3>
              </div>

              {/* Google Map Embed */}
              <div className="h-96 w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.755773168503!2d72.77531417599767!3d19.28685424615039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0d4e845bd25%3A0x6c62b1bb75a4e8a5!2sVasai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Gram Panchayat Pomnan Location"
                  className="rounded-b-2xl"
                ></iframe>
              </div>

              {/* Map Instructions */}
              <div className="p-4 bg-gray-50">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center">
                    <span className="w-4 h-4 text-green-600 mr-2">📍</span>
                    <span>ग्रामपंचायत कार्यालय पोमण, वसई</span>
                  </div>
                  <a
                    href="https://goo.gl/maps/example"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#5D2B0F] font-semibold flex items-center"
                  >
                    नकाशा उघडा
                    <span className="ml-1">↗</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
