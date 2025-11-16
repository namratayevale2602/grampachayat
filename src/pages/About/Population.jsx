// components/Population.jsx
import React from "react";
import { motion } from "framer-motion";

const Population = () => {
  const villageData = [
    { id: 1, name: "पोमण", area: "1061.59", households: 850, population: 4250 },
    {
      id: 2,
      name: "सारजामोरी",
      area: "116.501",
      households: 95,
      population: 475,
    },
    { id: 3, name: "मोरी", area: "254.954", households: 210, population: 1050 },
    { id: 4, name: "शिलोतर", area: "33.717", households: 30, population: 150 },
  ];

  const totalArea = villageData.reduce(
    (sum, village) => sum + parseFloat(village.area),
    0
  );
  const totalPopulation = villageData.reduce(
    (sum, village) => sum + village.population,
    0
  );
  const totalHouseholds = villageData.reduce(
    (sum, village) => sum + village.households,
    0
  );

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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          लोकसंख्या व क्षेत्रफळ
        </h2>

        <motion.h3
          className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#5D2B0F] mb-4"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          ग्रुप ग्रामपंचायत पोमण - चार गावांचे एकत्रित कुटुंब
        </motion.h3>
      </motion.div>

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Text and Table Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="prose prose-lg max-w-none"
              >
                <p className="text-gray-700 mb-4 leading-relaxed">
                  ग्रामपंचायत ही ग्रामीण भारतातील स्थानिक स्वराज्य संस्थेची
                  सर्वात लहान एकक आहे. एखाद्या गावाला किंवा एकत्रितपणे अनेक
                  गावांना मिळून <strong>५०० पेक्षा जास्त लोकसंख्या</strong> असेल
                  तर ग्रामपंचायत स्थापन करता येते.
                </p>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  सपाट भागात साधारण <strong>३,००० ते ५,००० लोकसंख्या</strong>{" "}
                  आणि डोंगराळ, आदिवासी व दुर्गम भागात
                  <strong> १,००० ते ३,००० लोकसंख्या</strong> ही ग्रामपंचायतसाठी
                  अपेक्षित आहे. जर गावाची लोकसंख्या ५०० पेक्षा कमी असेल तर ते
                  इतर गावांसोबत मिळून गट-ग्रामपंचायत तयार करू शकते.
                </p>
              </motion.div>
            </div>

            {/* Village Data Table */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                ग्रामपंचायतीतील गावांचे तपशील
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#8B4513] text-white">
                      <th className="px-4 py-3 text-left">अ. क्र.</th>
                      <th className="px-4 py-3 text-left">गावाचे नाव</th>
                      <th className="px-4 py-3 text-right">
                        क्षेत्रफळ (हेक्टर)
                      </th>
                      <th className="px-4 py-3 text-right">कुटुंबे</th>
                      <th className="px-4 py-3 text-right">लोकसंख्या</th>
                    </tr>
                  </thead>
                  <tbody>
                    {villageData.map((village, index) => (
                      <motion.tr
                        key={village.id}
                        variants={itemVariants}
                        className="border-b hover:bg-green-50 transition-colors"
                      >
                        <td className="px-4 py-3 font-semibold text-gray-800">
                          {village.id}
                        </td>
                        <td className="px-4 py-3 font-semibold text-gray-800">
                          {village.name}
                        </td>
                        <td className="px-4 py-3 text-right text-[#2C1810] font-medium">
                          {village.area}
                        </td>
                        <td className="px-4 py-3 text-right text-[#2C1810] font-semibold">
                          {village.households.toLocaleString()}
                        </td>
                        <td className="px-4 py-3 text-right text-[#2C1810] font-semibold">
                          {village.population.toLocaleString()}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="bg-gray-100 font-bold">
                      <td className="px-4 py-3" colSpan="2">
                        एकूण
                      </td>
                      <td className="px-4 py-3 text-right text-[#2C1810]">
                        {totalArea.toFixed(3)}
                      </td>
                      <td className="px-4 py-3 text-right text-[#2C1810]">
                        {totalHouseholds.toLocaleString()}
                      </td>
                      <td className="px-4 py-3 text-right text-[#2C1810]">
                        {totalPopulation.toLocaleString()}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-6 p-4 bg-[#fddcc5] rounded-lg border-l-4 border-[#2C1810]"
              >
                <h4 className="font-semibold text-[#2C1810] mb-2 text-lg">
                  महत्वाचे माहिती:
                </h4>
                <ul className="text-[#2C1810] space-y-1">
                  <li>
                    • ग्रामपंचायत एकूण क्षेत्रफळ:{" "}
                    <strong>१४६६.७६२ हेक्टर</strong>
                  </li>
                  <li>
                    • सर्वात मोठे गाव: <strong>पोमण (१०६१.५९ हे.)</strong>
                  </li>
                  <li>
                    • सर्वात लहान गाव: <strong>शिलोतर (३३.७१७ हे.)</strong>
                  </li>
                  <li>
                    • एकूण लोकसंख्या:{" "}
                    <strong>{totalPopulation.toLocaleString()} लोक</strong>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Image and Stats Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1"
          >
            <div className="space-y-6">
              {/* Main Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="ग्रामपंचायत पोमण - ग्रामीण दृश्य"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-6">
                  <h3 className="text-white text-xl font-bold">
                    ग्रामपंचायत पोमण
                  </h3>
                  <p className="text-green-200">चार गावांचे एकत्रित कुटुंब</p>
                </div>
              </motion.div>

              {/* Village Images Grid */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-2 gap-4"
              >
                {villageData.map((village, index) => (
                  <motion.div
                    key={village.id}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="relative rounded-xl overflow-hidden shadow-lg h-32"
                  >
                    <img
                      src={`https://images.unsplash.com/photo-15${index}397051665-5ad6f59${index}cd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80`}
                      alt={village.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-2">
                      <p className="text-white text-sm font-semibold text-center">
                        {village.name}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Summary Statistics */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-[#8B4513] rounded-2xl p-6 text-white"
              >
                <h4 className="text-xl font-bold mb-4 text-center">
                  एकूण आढावा
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold">
                      {totalArea.toFixed(3)}
                    </div>
                    <div className="text-sm opacity-90">हेक्टर क्षेत्र</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">
                      {totalPopulation.toLocaleString()}
                    </div>
                    <div className="text-sm opacity-90">लोकसंख्या</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">
                      {totalHouseholds.toLocaleString()}
                    </div>
                    <div className="text-sm opacity-90">कुटुंबे</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">४</div>
                    <div className="text-sm opacity-90">गावे</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Population;
