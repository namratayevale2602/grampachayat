// components/Manogat.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Manogat = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Manogat data in Marathi
  const manogatData = {
    title: "मनोगत",
    subtitle: "सरपंच व उपसरपंच यांचे संदेश",
    leaders: [
      {
        id: 1,
        name: "श्री. राजेंद्र पाटील",
        position: "सरपंच",
        photo:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        experience: "१०+ वर्षे अनुभव",
        department: "ग्रामविकास विभाग",
        message: `माझ्या प्रिय ग्रामस्थांनो,

आपली ग्रुप ग्रामपंचायत पोमण ही पेसा ग्रामपंचायत असून, येथे ७५% पेक्षा अधिक लोकसंख्या आदिवासी समाजाची आहे. मी स्वतःही आदिवासी समाजाचा घटक असून, या भूमीशी माझं नातं रक्तात आहे. मात्र, माझं नेतृत्व हे फक्त एका समाजापुरतं मर्यादित नाही — माझं ध्येय आहे सर्व समाजघटकांचा समतोल आणि सर्वांगीण विकास.

माझं कार्य हे सर्व ग्रामस्थांसाठी आहे. मग ते कोणत्याही समाजाचे, जातीचे, धर्माचे असोत. प्रत्येक व्यक्तीला सन्मान, संधी आणि सुविधा मिळावी, हेच माझं ध्येय आहे.

पेसा कायद्याने आपल्याला स्वशासनाचे अधिकार दिले आहेत. हे अधिकार केवळ कागदावर न राहता, गावाच्या निर्णय प्रक्रियेत लोकांचा सक्रिय सहभाग वाढवणे हे माझं प्रमुख उद्दिष्ट आहे. ग्रामसभा हीच सर्वोच्च संस्था आहे, आणि तिच्या माध्यमातून आपण गावाचा विकास निश्चित करू शकतो.

गावाचा विकास हा सर्वांचा सहभाग, सर्वांचा विश्वास, आणि सर्वांचा लाभ यावर आधारित असावा हीच माझी भूमिका आणि वचन आहे.`,
      },
      {
        id: 2,
        name: "श्रीमती सुनंदा देशमुख",
        position: "उपसरपंच",
        photo:
          "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        experience: "८ वर्षे अनुभव",
        department: "महिला व बालविकास",
        message: `प्रिय ग्रामस्थ बहिणींनो आणि भावांनो,

सरपंच महोदयांच्या मार्गदर्शनाखाली, मी उपसरपंच म्हणून आपल्या सर्वांच्या सेवेसाठी समर्पित आहे. महिला सक्षमीकरण, बालविकास आणि कुटुंब कल्याण या क्षेत्रात कार्यरत असून, प्रत्येक महिला आणि मुलांना त्यांचे हक्क मिळावेत यासाठी मी प्रयत्नशील आहे.

आपल्या सहकार्यानेच आपलं गाव समृद्ध आणि प्रगत बनू शकतं. चला, एकत्र येऊन आपलं गाव विकसित करूया.`,
      },
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

    const section = document.getElementById("manogat");
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
        staggerChildren: 0.3,
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
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
      id="manogat"
      className="py-16 md:py-24 bg-linear-to-br from-green-50 to-blue-50 overflow-hidden"
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
            {manogatData.title}
          </motion.h2>
          <motion.h3
            className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#5D2B0F] mb-4"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {manogatData.subtitle}
          </motion.h3>
        </motion.div>

        {/* Leaders Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {manogatData.leaders.map((leader, index) => (
            <motion.div
              key={leader.id}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group"
              variants={cardVariants}
              whileHover={{
                y: -5,
                transition: { duration: 0.3 },
              }}
            >
              {/* Leader Photo and Basic Info */}
              <div className="relative bg-[#A05A2B] p-6 text-white">
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                  {/* Photo */}
                  <motion.div className="relative" whileHover={{ scale: 1.05 }}>
                    <img
                      src={leader.photo}
                      alt={leader.name}
                      className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                    {/* Position Badge */}
                    <motion.div
                      className="absolute -bottom-2 -right-2 bg-yellow-500 text-gray-800 px-3 py-1 rounded-full text-sm font-bold shadow-lg"
                      whileHover={{ scale: 1.1 }}
                    >
                      {leader.position}
                    </motion.div>
                  </motion.div>

                  {/* Basic Info */}
                  <div className="text-center md:text-left">
                    <motion.h3
                      className="text-2xl font-bold mb-2"
                      whileHover={{ x: 5 }}
                    >
                      {leader.name}
                    </motion.h3>
                    <motion.div
                      className="flex items-center justify-center md:justify-start space-x-2 mb-1"
                      whileHover={{ x: 5 }}
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-green-100">
                        {leader.experience}
                      </span>
                    </motion.div>
                    <motion.div
                      className="flex items-center justify-center md:justify-start space-x-2"
                      whileHover={{ x: 5 }}
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                      <span className="text-green-100">
                        {leader.department}
                      </span>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Message Content */}
              <div className="p-6 md:p-8">
                <motion.div
                  className="prose prose-lg max-w-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.2 }}
                >
                  <div className="text-gray-700 leading-relaxed text-justify whitespace-pre-line">
                    {leader.message}
                  </div>
                </motion.div>

                {/* Signature */}
                <motion.div
                  className="mt-6 pt-6 border-t border-gray-200 text-right"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.2 }}
                >
                  <div className="text-gray-600 font-semibold">शुभेच्छा,</div>
                  <div className="text-[#5D2B0F] font-bold text-lg">
                    {leader.name}
                  </div>
                  <div className="text-gray-500 text-sm">{leader.position}</div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Manogat;
