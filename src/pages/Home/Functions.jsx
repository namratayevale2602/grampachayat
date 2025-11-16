// components/FunctionsCards.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Functions = () => {
  const [selectedFunction, setSelectedFunction] = useState(null);

  // Functions data in Marathi
  const functionsData = [
    {
      id: 1,
      title: "प्रशासकीय कार्ये",
      shortDescription: "ग्रामपंचायतीची दैनंदिन प्रशासकीय कार्ये",
      fullDescription:
        "ग्रामपंचायतीची सर्व प्रशासकीय कार्ये यामध्ये समाविष्ट आहेत. जन्म-मृत्यू नोंदणी, मालमत्ता कर गोळा करणे, लायसन्स देणे, आणि इतर प्रशासकीय कामे.",
      features: [
        "जन्म-मृत्यू नोंदणी",
        "मालमत्ता कर संकलन",
        "लायसन्स व परवाने",
        "ओळखपत्र तयार करणे",
        "मतदार यादी अद्ययावत करणे",
      ],
      contactPerson: "श्री. विजय कदम - ग्रामसेवक",
      phone: "+91 XXXXX XXXXX",
    },
    {
      id: 2,
      title: "विकास कार्ये",
      shortDescription: "ग्रामीण विकास आणि बांधकाम कार्ये",
      fullDescription:
        "गावाच्या विकासासाठीची सर्व बांधकाम आणि विकास कार्ये. रस्ते, पूल, पाणी पुरवठा, दिव्यांची सोय, आणि इतर मूलभूत सुविधा.",
      features: [
        "रस्ते बांधकाम आणि दुरुस्ती",
        "पाणी पुरवठा योजना",
        "वीज दिवे स्थापना",
        "सामुदायिक भवन निर्माण",
        "पायवाट व सीवेज सिस्टीम",
      ],
      contactPerson: "श्री. संजय पवार - अभियंता",
      phone: "+91 XXXXX XXXXX",
    },
    {
      id: 3,
      title: "सामाजिक कल्याण",
      shortDescription: "सामाजिक सुरक्षा आणि कल्याणकारी योजना",
      fullDescription:
        "सामाजिक सुरक्षा, महिला सबलीकरण, बालकल्याण, वृद्ध सेवा, आणि इतर कल्याणकारी योजनांची अंमलबजावणी.",
      features: [
        "वृद्ध आणि अपंग निवृत्ती वेतन",
        "महिला सबलीकरण कार्यक्रम",
        "बालकल्याण योजना",
        "राष्ट्रीय ग्रामीण रोजगार हमी",
        "वस्त्रोद्योग आणि स्वयंसहाय्य गट",
      ],
      contactPerson: "श्रीमती मंजुषा नाईक - सामाजिक कार्यकर्ता",
      phone: "+91 XXXXX XXXXX",
    },
    {
      id: 4,
      title: "आरोग्य सेवा",
      shortDescription: "आरोग्य सेवा आणि स्वच्छता कार्यक्रम",
      fullDescription:
        "प्राथमिक आरोग्य सेवा, टीकाकरण मोहीम, स्वच्छता अभियान, आणि आरोग्य संवर्धन कार्यक्रम.",
      features: [
        "आरोग्य शिबिरे आणि तपासणी",
        "टीकाकरण मोहिमा",
        "स्वच्छता अभियान",
        "आरोग्य जागरुकता कार्यक्रम",
        "कुटुंब कल्याण सेवा",
      ],
      contactPerson: "डॉ. प्रवीण जोशी - आरोग्य अधिकारी",
      phone: "+91 XXXXX XXXXX",
    },
    {
      id: 5,
      title: "शिक्षण विभाग",
      shortDescription: "शिक्षण आणि कौशल्य विकास कार्यक्रम",
      fullDescription:
        "शिक्षण गुणवत्ता सुधार, साक्षरता अभियान, कौशल्य विकास प्रशिक्षण, आणि शैक्षणिक सुविधा सुधार.",
      features: [
        "शाळा सुविधा सुधार",
        "साक्षरता अभियान",
        "कौशल्य विकास प्रशिक्षण",
        "शैक्षणिक सामग्री वितरण",
        "मोफत कोचिंग वर्ग",
      ],
      contactPerson: "श्री. अशोक शिंदे - शिक्षण अधिकारी",
      phone: "+91 XXXXX XXXXX",
    },
    {
      id: 6,
      title: "कृषी विकास",
      shortDescription: "कृषी आणि शेती संबंधित सेवा",
      fullDescription:
        "कृषी मार्गदर्शन, बियाणे वितरण, सिंचन सुविधा, कृषी उपकरणे, आणि शेतकऱ्यांसाठी योजना.",
      features: [
        "कृषी मार्गदर्शन केंद्र",
        "बियाणे आणि खते वितरण",
        "सिंचन योजना",
        "कृषी उपकरणे केंद्र",
        "शेतकरी प्रशिक्षण शिबिर",
      ],
      contactPerson: "श्री. राजेश जाधव - कृषी अधिकारी",
      phone: "+91 XXXXX XXXXX",
    },
  ];

  const cardVariants = {
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

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <section className="py-16 md:py-24 bg-linear-to-br from-gray-50 to-blue-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            आमची कार्ये आणि सेवा
          </h2>

          <motion.h3
            className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#5D2B0F] mb-4"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            ग्रामपंचायत पोमण द्वारे पुरवल्या जाणाऱ्या सर्व सेवा आणि कार्यांची
            माहिती
          </motion.h3>
        </div>

        {/* Functions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {functionsData.map((func, index) => (
            <motion.div
              key={func.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedFunction(func)}
              custom={index}
            >
              {/* Card Header */}
              <div className="bg-[#A05A2B] p-6 text-white">
                <div className="flex items-center space-x-4">
                  <div>
                    <h3 className="text-xl font-bold">{func.title}</h3>
                    <p className="text-blue-100 text-sm mt-1">
                      {func.shortDescription}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {func.fullDescription}
                </p>

                {/* Features Preview */}
                <div className="space-y-2 mb-4">
                  {func.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#A05A2B] rounded-full"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                  {func.features.length > 3 && (
                    <div className="text-sm text-[#5D2B0F] font-medium">
                      + {func.features.length - 3} अधिक...
                    </div>
                  )}
                </div>

                {/* Contact Info */}
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">संपर्क:</span>{" "}
                    {func.contactPerson}
                  </p>
                </div>
              </div>

              {/* View Details Button */}
              <div className="px-6 pb-6">
                <motion.button
                  className="w-full bg-blue-50 text-[#5D2B0F] py-2 rounded-lg font-semibold hover:bg-[#dbbfb5] transition-colors duration-300 flex items-center justify-center space-x-2 group-hover:bg-[#dbbfb5]"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>तपशील पहा</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
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
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Function Details Modal */}
        <AnimatePresence>
          {selectedFunction && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedFunction(null)}
            >
              <motion.div
                className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="bg-[#A05A2B] p-6 text-white sticky top-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div>
                        <h3 className="text-2xl font-bold">
                          {selectedFunction.title}
                        </h3>
                        <p className="text-blue-100">
                          {selectedFunction.shortDescription}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedFunction(null)}
                      className="w-8 h-8 bg-black bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors duration-200"
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
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="p-6">
                  <div className="prose prose-lg max-w-none">
                    <h4 className="text-xl font-semibold text-gray-800 mb-4">
                      वर्णन
                    </h4>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {selectedFunction.fullDescription}
                    </p>

                    <h4 className="text-xl font-semibold text-gray-800 mb-4">
                      मुख्य कार्ये
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                      {selectedFunction.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg"
                        >
                          <div className="w-2 h-2 bg-[#A05A2B] rounded-full shrink-0"></div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Functions;
