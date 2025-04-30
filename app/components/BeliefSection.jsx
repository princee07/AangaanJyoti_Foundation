"use client";

import { FaHandsHelping, FaPrayingHands, FaPeace, FaDonate } from "react-icons/fa";
import { motion } from "framer-motion";

export default function BeliefSection() {
  const beliefs = [
    {
      title: "Hope",
      description: "Lorem ipsum is simply free text available in the market websites.",
      icon: <FaHandsHelping className="text-blue-500 w-12 h-12" />,
      bgColor: "bg-blue-100",
    },
    {
      title: "Prayers",
      description: "Lorem ipsum is simply free text available in the market websites.",
      icon: <FaPrayingHands className="text-purple-500 w-12 h-12" />,
      bgColor: "bg-purple-100",
    },
    {
      title: "Peace",
      description: "Lorem ipsum is simply free text available in the market websites.",
      icon: <FaPeace className="text-yellow-500 w-12 h-12" />,
      bgColor: "bg-yellow-100",
    },
    {
      title: "Donation",
      description: "Lorem ipsum is simply free text available in the market websites.",
      icon: <FaDonate className="text-pink-500 w-12 h-12" />,
      bgColor: "bg-pink-100",
    },
  ];

  // Animation variants for the container and cards
  const containerVariants = {
    hidden: { opacity: 1, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3, // Delay before children animations start
        staggerChildren: 0.2, // Stagger the animations of the children
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 0 }, // Start at the center
    visible: (index) => ({
      opacity: 1,
      y: 0,
      x: index === 0 ? -100 : index === 1 ? -50 : index === 2 ? 50 : 100, // Spread horizontally
      transition: { duration: 0.8 },
    }),
  };

  return (
    <section className="py-12 bg-white">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          We Believe that We can Save More Lives with you
        </h2>
        <p className="text-purple-600 mt-2">HELP US NOW</p>
      </div>

      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of the section is visible
      >
        {beliefs.map((belief, index) => (
          <motion.div
            key={index}
            className={`flex flex-col items-center text-center p-6 rounded-lg shadow-md ${belief.bgColor}`}
            custom={index} // Pass the index to the cardVariants
            variants={cardVariants}
          >
            <div className="mb-4">{belief.icon}</div>
            <h3 className="text-lg font-bold text-gray-800">{belief.title}</h3>
            <p className="text-gray-600 mt-2">{belief.description}</p>
          </motion.div>
        ))}
      </motion.div>

      <div className="text-center mt-8">
        <motion.button
          className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600"
          whileHover={{ scale: 1.1 }} // Slightly enlarge on hover
          whileTap={{ scale: 0.95 }} // Shrink slightly on click
        >
          DONATE NOW
        </motion.button>
      </div>
    </section>
  );
}