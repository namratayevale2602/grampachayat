// components/AboutUs.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  // JSON data embedded in the component
  const aboutData = {
    about: {
      title: "ग्रामपंचायत परिचय",
      subtitle: "आमचे गाव, आमची ओळख",
      description:
        "आमची ग्रामपंचायत ही एक प्रगतिशील आणि समृद्ध ग्रामपंचायत आहे. गेल्या अनेक वर्षांपासून आम्ही ग्रामीण विकास, शिक्षण, आरोग्य आणि मूलभूत सुविधांसाठी कार्यरत आहोत. आमचे उद्दीष्ट गावाचा सर्वांगीण विकास करणे आणि ग्रामस्थांना उत्तम सेवा पुरवणे आहे.",
      features: [
        "स्वच्छ गाव अभियान",
        "शत-टक्के शिक्षण",
        "आरोग्य सेवा केंद्र",
        "पाणी पुरवठा योजना",
        "रस्ते व दिव्यांची सोय",
        "कृषी मार्गदर्शन केंद्र",
        "महिला सबलीकरण",
        "युवक उपक्रम",
        "वृद्ध सेवा केंद्र",
        "डिजिटल सेवा केंद्र",
        "पुस्तकालय व वाचनालय",
        "क्रीडा संकुल",
      ],
      button: {
        text: "अधिक माहिती",
        link: "/about",
      },
    },
    images: [
      "https://images.unsplash.com/photo-1582213782119-d41d9ca99f0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    ],
    stats: [
      { number: "५,२००+", label: "लोकसंख्या", icon: "👥" },
      { number: "१,२५०", label: "कुटुंबे", icon: "🏠" },
      { number: "९६%", label: "साक्षरता", icon: "📚" },
      { number: "१००%", label: "वीज पुरवठा", icon: "💡" },
      { number: "९८%", label: "पाणी पुरवठा", icon: "💧" },
      { number: "५०+", label: "शासकीय योजना", icon: "📋" },
    ],
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("about-us");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const handleButtonClick = () => {
    window.location.href = aboutData.about.button.link;
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
      },
    },
    tap: { scale: 0.95 },
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="about-us"
      className="py-16 md:py-24 bg-linear-to-br from-green-50 to-blue-50 overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Left Side - Text Content */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800"
              variants={itemVariants}
            >
              {aboutData.about.title}
            </motion.h2>

            <motion.h3
              className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#5D2B0F]"
              variants={itemVariants}
            >
              {aboutData.about.subtitle}
            </motion.h3>

            <motion.p
              className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed"
              variants={itemVariants}
            >
              {aboutData.about.description}
            </motion.p>

            {/* Features List - All 12 features in 3 columns */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4"
              variants={itemVariants}
            >
              {aboutData.about.features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-[#A05A2B] rounded-full shrink-0"></div>
                  <span className="text-gray-700 text-sm md:text-base font-medium">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Animated Button */}
            <motion.button
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              onClick={handleButtonClick}
              className="bg-[#B87333] text-white px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 group w-fit"
            >
              <span>{aboutData.about.button.text}</span>
              <motion.svg
                className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </motion.svg>
            </motion.button>
          </motion.div>

          {/* Right Side - Images Grid */}
          <motion.div
            className="grid grid-cols-2 gap-3 md:gap-4 relative"
            variants={containerVariants}
          >
            {/* Main Image */}
            <motion.div
              className="col-span-2 rounded-xl md:rounded-2xl overflow-hidden shadow-xl md:shadow-2xl"
              variants={imageVariants}
            >
              <img
                src={aboutData.images[0]}
                alt="ग्रामपंचायत कार्यालय"
                className="w-full h-48 md:h-64 lg:h-80 object-cover hover:scale-105 transition-transform duration-300"
              />
            </motion.div>

            {/* Secondary Images */}
            <motion.div
              className="rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-xl"
              variants={imageVariants}
              transition={{ delay: 0.2 }}
            >
              <img
                src={aboutData.images[1]}
                alt="ग्रामीण विकास"
                className="w-full h-24 md:h-32 lg:h-40 object-cover hover:scale-105 transition-transform duration-300"
              />
            </motion.div>

            <motion.div
              className="rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-xl"
              variants={imageVariants}
              transition={{ delay: 0.3 }}
            >
              <img
                src={aboutData.images[2]}
                alt="ग्रामस्थ"
                className="w-full h-24 md:h-32 lg:h-40 object-cover hover:scale-105 transition-transform duration-300"
              />
            </motion.div>

            {/* Decorative Elements - Fixed positioning */}
            <motion.div
              className="absolute -top-2 -right-2 w-16 h-16 md:w-20 md:h-20 bg-yellow-300 rounded-full opacity-20 -z-10"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -bottom-2 -left-2 w-12 h-12 md:w-16 md:h-16 bg-green-300 rounded-full opacity-20 -z-10"
              animate={{
                scale: [1.1, 1, 1.1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
