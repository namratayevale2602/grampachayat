// components/History.jsx
import React from "react";
import { motion } from "framer-motion";

const History = () => {
  return (
    <section className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          आमच्या ग्रामपंचायतीचा संक्षिप्त इतिहास
        </h2>

        <motion.h3
          className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#5D2B0F] mb-4"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          ग्रुप ग्रामपंचायत पोमण, तालुका वसई, जिल्हा पालघर
        </motion.h3>
      </motion.div>

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block bg-[#D2B48C] text-black px-6 py-3 rounded-full text-lg font-semibold mb-6"
              >
                स्थापना: ०१ एप्रिल १९६२
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-4 text-gray-700 leading-relaxed text-lg"
              >
                <p>
                  ग्रुप ग्रामपंचायत पोमण, तालुका वसई, जिल्हा पालघर, ही चार
                  गावांचा समावेश असलेली एक सशक्त लोकशाही संस्था आहे. या
                  ग्रामपंचायतीमध्ये{" "}
                  <strong>पोमण, मोरी, सारजामोरी आणि शिलोत्तर</strong> ही गावे
                  समाविष्ट आहेत.
                </p>

                <p>
                  ग्रामपंचायतीची स्थापना <strong>०१ एप्रिल १९६२</strong> रोजी
                  झाली असून, ती गावकऱ्यांच्या सहभागातून सामाजिक, सांस्कृतिक आणि
                  प्रशासकीय विकासासाठी सातत्याने कार्यरत आहे.
                </p>

                <p>
                  स्थानिक स्वराज्याच्या तत्त्वांवर आधारित ही संस्था नागरिकांच्या
                  गरजांनुसार विविध योजनांची अंमलबजावणी करत आहे.
                </p>

                <div className="bg-green-50 p-6 rounded-lg ">
                  <h4 className="font-bold text-[#5D2B0F] mb-3 text-xl">
                    आमच्या उल्लेखनीय कामगिरीची क्षेत्रे:
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-[#5D2B0F]">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#A05A2B] rounded-full mr-3"></span>
                      शिक्षण
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#A05A2B] rounded-full mr-3"></span>
                      आरोग्य
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#A05A2B] rounded-full mr-3"></span>
                      स्वच्छता
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#A05A2B] rounded-full mr-3"></span>
                      पाणीपुरवठा
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#A05A2B] rounded-full mr-3"></span>
                      महिला सक्षमीकरण
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#A05A2B] rounded-full mr-3"></span>
                      युवक विकास
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#A05A2B] rounded-full mr-3"></span>
                      पर्यावरण संवर्धन
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#A05A2B] rounded-full mr-3"></span>
                      डिजिटल सेवा
                    </li>
                  </ul>
                </div>

                <p className="font-semibold text-gray-800">
                  पारदर्शक प्रशासन, उत्तरदायित्व आणि सर्वसमावेशक विकास हे आमचे
                  मुख्य ध्येय आहे.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1"
          >
            <div className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1582213782119-d0417e20eca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="ग्रामपंचायत पोमण - पंचायत भवन"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-6">
                  <h3 className="text-white text-xl font-bold">
                    ग्रामपंचायत पोमण - पंचायत भवन
                  </h3>
                  <p className="text-green-200">स्थापना १९६२</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="relative rounded-xl overflow-hidden shadow-lg h-40">
                  <img
                    src="https://images.unsplash.com/photo-1551135049-8a33b42738b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="ग्रामसभा"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-3">
                    <p className="text-white text-sm font-semibold">ग्रामसभा</p>
                  </div>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-lg h-40">
                  <img
                    src="https://images.unsplash.com/photo-1541971875076-8f705f734567?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="विकास कार्ये"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-3">
                    <p className="text-white text-sm font-semibold">
                      विकास कार्ये
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Achievement Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-[#8B4513] rounded-2xl p-6 text-white text-center"
              >
                <h4 className="text-lg font-bold mb-4">६०+ वर्षे सेवा</h4>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <div className="text-2xl font-bold">४</div>
                    <div className="text-sm opacity-90">गावे</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">६०+</div>
                    <div className="text-sm opacity-90">वर्षे</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">१००+</div>
                    <div className="text-sm opacity-90">योजना</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        ></motion.div>
      </div>
    </section>
  );
};

export default History;
