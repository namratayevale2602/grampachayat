// components/EventDetailPage.jsx
import React from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { eventsData } from "../../data/eventsData";

const EventDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const event = eventsData.find((e) => e.slug === slug);

  if (!event) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            कार्यक्रम सापडला नाही
          </h2>
          <button
            onClick={() => navigate("/event")}
            className="bg-[#8B4513] text-white px-6 py-2 rounded-lg transition-colors"
          >
            कार्यक्रम यादीकडे परत जा
          </button>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("mr-IN", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate("/events")}
          className="flex items-center text-[#2C1810] mb-6 transition-colors"
        >
          <span className="text-xl mr-2">←</span>
          कार्यक्रम यादीकडे परत जा
        </motion.button>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative h-96"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-8">
              <div className="flex flex-wrap items-center gap-4 mb-2">
                <span className="bg-[#8B4513] text-white px-4 py-1 rounded-full text-sm">
                  {event.category}
                </span>
                <span className="bg-white text-gray-800 px-4 py-1 rounded-full text-sm">
                  {formatDate(event.date)}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {event.title}
              </h1>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-2"
            >
              {/* Event Description */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  कार्यक्रम माहिती
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {event.fullDescription}
                </p>
              </div>

              {/* Gallery */}
              {event.images && event.images.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    छायाचित्रे
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {event.images.map((img, index) => (
                      <motion.img
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        src={img}
                        alt={`${event.title} - Image ${index + 1}`}
                        className="w-full h-64 object-cover rounded-lg shadow-md"
                      />
                    ))}
                  </div>
                </div>
              )}
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-6"
            >
              {/* Event Details Card */}
              <div className="bg-green-50 rounded-xl p-6 border-l-4 border-[#8B4513]">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  कार्यक्रम तपशील
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="w-6 h-6 text-green-600 mr-3 mt-1">📅</span>
                    <div>
                      <div className="font-semibold text-gray-700">तारीख</div>
                      <div className="text-gray-600">
                        {formatDate(event.date)}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <span className="w-6 h-6 text-green-600 mr-3 mt-1">🕒</span>
                    <div>
                      <div className="font-semibold text-gray-700">वेळ</div>
                      <div className="text-gray-600">{event.time}</div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <span className="w-6 h-6 text-green-600 mr-3 mt-1">📍</span>
                    <div>
                      <div className="font-semibold text-gray-700">स्थळ</div>
                      <div className="text-gray-600">{event.place}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Organizer Info */}
              <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-[#8B4513]">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  आयोजक माहिती
                </h3>
                <div className="space-y-3">
                  <div>
                    <div className="font-semibold text-gray-700">आयोजक</div>
                    <div className="text-gray-600">{event.organizer}</div>
                  </div>

                  <div>
                    <div className="font-semibold text-gray-700">
                      संपर्क क्रमांक
                    </div>
                    <div className="text-gray-600">{event.contact}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailPage;
