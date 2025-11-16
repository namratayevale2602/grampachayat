// components/Team.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Team = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Team data in Marathi
  const TeamData = {
    title: "प्रतिनिधी",
    subtitle: "आमचे ग्रामपंचायत प्रतिनिधी",
    description:
      "आमच्या ग्रामपंचायतीतून समर्पित प्रतिनिधी आपल्या सेवेत रत आहेत. प्रत्येकाचे स्वत:चे विशेष योगदान आणि अनुभव आहे.",
    team: [
      {
        id: 1,
        name: "श्री. राजेंद्र पाटील",
        position: "सरपंच",
        photo:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        experience: "१०+ वर्षे अनुभव",
        department: "ग्रामविकास विभाग",
      },
      {
        id: 2,
        name: "श्रीमती सुनंदा देशमुख",
        position: "उपसरपंच",
        photo:
          "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        experience: "८ वर्षे अनुभव",
        department: "महिला व बालविकास",
      },
      {
        id: 3,
        name: "श्री. विजय कदम",
        position: "ग्रामसेवक",
        photo:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        experience: "१२ वर्षे अनुभव",
        department: "प्रशासकीय विभाग",
      },
      {
        id: 4,
        name: "डॉ. प्रवीण जोशी",
        position: "आरोग्य अधिकारी",
        photo:
          "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        experience: "१५ वर्षे अनुभव",
        department: "आरोग्य विभाग",
      },
      {
        id: 5,
        name: "डॉ. प्रवीण जोशी",
        position: "आरोग्य अधिकारी",
        photo:
          "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        experience: "१५ वर्षे अनुभव",
        department: "आरोग्य विभाग",
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

    const section = document.getElementById("Team");
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

  const cardVariants = {
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
      id="Team"
      className="py-16 md:py-24 bg-linear-to-br from-blue-50 to-purple-50 overflow-hidden"
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
            {TeamData.title}
          </motion.h2>
          <motion.h3
            className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#5D2B0F] mb-4"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {TeamData.subtitle}
          </motion.h3>
          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            whileHover={{ scale: 1.01 }}
          >
            {TeamData.description}
          </motion.p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {TeamData.team.map((member, index) => (
            <motion.div
              key={member.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group"
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              custom={index}
            >
              {/* Photo Section */}
              <div className="relative overflow-hidden">
                <motion.img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-64 md:h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                  whileHover={{ scale: 1.1 }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content Section */}
              <div className="p-6">
                <motion.h3
                  className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#5D2B0F] transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  {member.name}
                </motion.h3>

                <motion.div
                  className="flex items-center space-x-2 text-gray-600 mb-3"
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
                  <span className="text-sm">{member.position}</span>
                </motion.div>

                <motion.div
                  className="flex items-center space-x-2 text-gray-600 mb-4"
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
                  <span className="text-sm">{member.department}</span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8 }}
        ></motion.div>
      </div>
    </section>
  );
};

export default Team;
