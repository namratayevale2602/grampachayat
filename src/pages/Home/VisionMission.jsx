// components/VisionMission.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const VisionMission = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Vision and Mission data in Marathi
  const visionMissionData = {
    title: "दृष्टीकोन आणि ध्येय",
    subtitle: "गावकऱ्यांच्या सहभागातून सर्वांगीण आणि शाश्वत विकास",
    vision: {
      title: "आमचे दृष्टीकोन",
      icon: "👁️",
      description:
        "ग्रुप ग्रामपंचायत पोमणचा दृष्टीकोन म्हणजे एक स्वयंपूर्ण, सशक्त आणि सर्वसमावेशक ग्रामसमाज घडवणे जिथे प्रत्येक नागरिकाला मूलभूत सुविधा, दर्जेदार शिक्षण, आरोग्यसेवा, सुरक्षित पर्यावरण आणि उपजीविकेच्या संधी उपलब्ध होतील.",
      points: [
        "पारदर्शक प्रशासन, लोकसहभाग, नवतंत्रज्ञानाचा वापर आणि सामाजिक समरसतेच्या माध्यमातून गावांचा सर्वांगीण विकास",
        "चारही गावांचा समन्वय राखत, ग्रामपंचायत ही एक विश्वासार्ह, उत्तरदायी आणि प्रगतिशील संस्था म्हणून कार्यरत राहील",
        "गावकऱ्यांच्या सहभागातून, नवकल्पना आणि शाश्वत विकासाच्या तत्त्वांवर आधारित, आदर्श ग्रामविकास मॉडेल बनवणे",
      ],
    },
    mission: {
      title: "आमचे ध्येय",
      icon: "🎯",
      goals: [
        {
          icon: "🌱",
          title: "सर्वसमावेशक आणि शाश्वत ग्रामविकास",
          description: "सर्व घटकांना समाविष्ट करून पर्यावरणास अनुकूल विकास",
        },
        {
          icon: "🔍",
          title: "पारदर्शक व उत्तरदायी प्रशासन",
          description: "खुले आणि जबाबदार प्रशासन प्रक्रिया",
        },
        {
          icon: "💻",
          title: "डिजिटल युगाशी सुसंगत सेवा",
          description: "आधुनिक तंत्रज्ञानाद्वारे सुविधा पुरवठा",
        },
        {
          icon: "👥",
          title: "नागरिकांच्या गरजांनुसार योजना",
          description: "लोकांच्या आवश्यकतांनुसार योजनांची अंमलबजावणी",
        },
      ],
    },
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

    const section = document.getElementById("vision-mission");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

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

  return (
    <section
      id="vision-mission"
      className="py-16 md:py-24 bg-linear-to-br from-blue-50 to-green-50 overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {visionMissionData.title}
          </motion.h2>
          <motion.h3
            className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#5D2B0F] mb-4 max-w-4xl mx-auto leading-tight"
            whileHover={{ scale: 1.01 }}
          >
            {visionMissionData.subtitle}
          </motion.h3>
        </motion.div>

        {/* Horizontal Layout - Vision and Mission Side by Side */}
        <motion.div
          className="grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-12 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Vision Section - Left Side */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border-l-4 border-[#984423] h-full"
            variants={itemVariants}
            whileHover={{
              y: -5,
              boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
          >
            {/* Vision Header */}
            <motion.div
              className="flex items-center space-x-4 mb-6"
              variants={itemVariants}
            >
              <div className="w-16 h-16 bg-[#dbbfb5] rounded-full flex items-center justify-center">
                <span className="text-3xl">
                  {visionMissionData.vision.icon}
                </span>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                  {visionMissionData.vision.title}
                </h3>
              </div>
            </motion.div>

            {/* Vision Description */}
            <motion.p
              className="text-lg text-gray-700 leading-relaxed mb-8 text-justify bg-blue-50 p-4 rounded-lg border border-blue-100"
              variants={itemVariants}
            >
              {visionMissionData.vision.description}
            </motion.p>

            {/* Vision Points */}
            <motion.div className="space-y-4" variants={containerVariants}>
              {visionMissionData.vision.points.map((point, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-linear-to-r from-blue-50 to-white rounded-lg group border border-blue-100"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div
                    className="w-8 h-8 bg-[#A05A2B] rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {index + 1}
                  </motion.div>
                  <p className="text-gray-70 leading-relaxed text-justify">
                    {point}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Mission Section - Right Side */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border-l-4 border-[#984423] h-full"
            variants={itemVariants}
            whileHover={{
              y: -5,
              boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
          >
            {/* Mission Header */}
            <motion.div
              className="flex items-center space-x-4 mb-6"
              variants={itemVariants}
            >
              <div className="w-16 h-16 bg-[#dbbfb5] rounded-full flex items-center justify-center">
                <span className="text-3xl">
                  {visionMissionData.mission.icon}
                </span>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                  {visionMissionData.mission.title}
                </h3>
              </div>
            </motion.div>

            {/* Mission Goals Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              variants={containerVariants}
            >
              {visionMissionData.mission.goals.map((goal, index) => (
                <motion.div
                  key={index}
                  className="bg-linear-to-br from-green-50 to-white rounded-xl p-5 group border border-green-100 h-full"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.03,
                    y: -3,
                  }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl shadow-sm mb-4 group-hover:shadow-md transition-shadow duration-300 mx-auto"
                    whileHover={{
                      rotate: [0, -10, 10, 0],
                      transition: { duration: 0.5 },
                    }}
                  >
                    {goal.icon}
                  </motion.div>
                  <h4 className="text-lg font-bold text-gray-800 mb-3 text-center">
                    {goal.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed text-center">
                    {goal.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionMission;
