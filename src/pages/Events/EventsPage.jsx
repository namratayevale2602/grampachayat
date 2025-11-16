// components/EventsPage.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { eventsData } from "../../data/eventsData";
import { useNavigate } from "react-router-dom";

const EventsPage = () => {
  const [filterStartDate, setFilterStartDate] = useState("");
  const [filterEndDate, setFilterEndDate] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("सर्व");
  const navigate = useNavigate();

  const categories = [
    "सर्व",
    "बैठक",
    "सामाजिक",
    "प्रशिक्षण",
    "पर्यावरण",
    "आरोग्य",
    "क्रीडा",
  ];

  const filteredEvents = eventsData.filter((event) => {
    const eventDate = new Date(event.date);
    const startDate = filterStartDate ? new Date(filterStartDate) : null;
    const endDate = filterEndDate ? new Date(filterEndDate) : null;

    const dateInRange =
      (!startDate || eventDate >= startDate) &&
      (!endDate || eventDate <= endDate);

    const categoryMatch =
      selectedCategory === "सर्व" || event.category === selectedCategory;

    return dateInRange && categoryMatch;
  });

  const handleEventClick = (eventSlug) => {
    navigate(`/event/${eventSlug}`);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("mr-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const getDay = (dateString) => {
    const date = new Date(dateString);
    return date.getDate();
  };

  const getMonth = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("mr-IN", { month: "short" });
  };

  return (
    <section className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">कार्यक्रम</h2>

          <motion.h3
            className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#5D2B0F] mb-4"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            ग्रामपंचायत पोमणमध्ये होणारे विविध कार्यक्रम
          </motion.h3>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-6 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Start Date Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                प्रारंभ तारीख
              </label>
              <input
                type="date"
                value={filterStartDate}
                onChange={(e) => setFilterStartDate(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5D2B0F] focus:border-transparent"
              />
            </div>

            {/* End Date Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                समाप्ती तारीख
              </label>
              <input
                type="date"
                value={filterEndDate}
                onChange={(e) => setFilterEndDate(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5D2B0F] focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                प्रकार
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5D2B0F] focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Reset Filters */}
            <div className="flex items-end">
              <button
                onClick={() => {
                  setFilterStartDate("");
                  setFilterEndDate("");
                  setSelectedCategory("सर्व");
                }}
                className="w-full bg-[#8B4513] text-white px-4 py-2 rounded-lg"
              >
                फिल्टर रीसेट करा
              </button>
            </div>
          </div>
        </motion.div>

        {/* Events Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-6"
        >
          <p className="text-lg text-gray-600">
            सापडलेले कार्यक्रम:{" "}
            <span className="font-bold text-[#5D2B0F]">
              {filteredEvents.length}
            </span>
          </p>
        </motion.div>

        {/* Events List */}
        <AnimatePresence>
          {filteredEvents.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="text-gray-400 text-6xl mb-4">📅</div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                कार्यक्रम सापडले नाहीत
              </h3>
              <p className="text-gray-500">
                निवडलेल्या फिल्टरनुसार कोणतेही कार्यक्रम उपलब्ध नाहीत.
              </p>
            </motion.div>
          ) : (
            <div className="space-y-6">
              {filteredEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300"
                  onClick={() => handleEventClick(event.slug)}
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Image Section */}
                    <div className="md:w-1/4">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 p-6">
                      <div className="flex flex-col md:flex-row md:items-start gap-6">
                        {/* Date Badge */}
                        <div className="shrink-0">
                          <div className="bg-[#8B4513] text-white rounded-lg text-center p-4 w-20">
                            <div className="text-2xl font-bold">
                              {getDay(event.date)}
                            </div>
                            <div className="text-sm">
                              {getMonth(event.date)}
                            </div>
                          </div>
                        </div>

                        {/* Event Details */}
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                            <div>
                              <span className="inline-block bg-[#fddcc5] text-[#2C1810] text-sm px-3 py-1 rounded-full mb-2">
                                {event.category}
                              </span>
                              <h3 className="text-xl font-bold text-gray-800 mb-2">
                                {event.title}
                              </h3>
                            </div>
                            <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                              {formatDate(event.date)}
                            </div>
                          </div>

                          <p className="text-gray-600 mb-4 line-clamp-2">
                            {event.description}
                          </p>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                            <div className="flex items-center">
                              <span className="w-5 h-5 text-green-600 mr-2">
                                🕒
                              </span>
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center">
                              <span className="w-5 h-5 text-blue-600 mr-2">
                                📍
                              </span>
                              <span>{event.place}</span>
                            </div>
                          </div>

                          <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center text-sm text-gray-500"></div>
                            <button className="text-[#2C1810] font-semibold">
                              अधिक माहिती →
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default EventsPage;
