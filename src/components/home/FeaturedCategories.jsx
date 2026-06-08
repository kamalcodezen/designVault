"use client";

import { motion } from "framer-motion";
import {
  FaBrain,
  FaLaptopCode,
  FaHeartbeat,
  FaGraduationCap,
  FaCoins,
  FaRocket,
} from "react-icons/fa";

const categories = [
  {
    name: "Artificial Intelligence",
    icon: <FaBrain />,
    total: "120+ Ideas",
  },
  {
    name: "Technology",
    icon: <FaLaptopCode />,
    total: "95+ Ideas",
  },
  {
    name: "Health",
    icon: <FaHeartbeat />,
    total: "82+ Ideas",
  },
  {
    name: "Education",
    icon: <FaGraduationCap />,
    total: "70+ Ideas",
  },
  {
    name: "Finance",
    icon: <FaCoins />,
    total: "55+ Ideas",
  },
  {
    name: "Startup",
    icon: <FaRocket />,
    total: "140+ Ideas",
  },
];

const FeaturedCategories = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#140d0d] via-[#1b1012] to-[#140d0d]">
      <div className="w-11/12 max-w-7xl mx-auto">
        {/* heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="px-4 py-2 rounded-lg bg-[#E26D8D]/10 border border-[#E26D8D]/20 text-[#E26D8D] text-sm">
            Categories
          </span>

          <h2 className="text-4xl md:text-5xl font-semibold text-white mt-5">
            Explore <span className="text-[#D95C78]">Categories</span>
          </h2>

          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
            Discover startup ideas across multiple industries and innovation
            sectors.
          </p>
        </motion.div>

        {/* cards */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="group cursor-pointer rounded-xl border border-[#4D2A2F] bg-[#241416]/70 backdrop-blur-xl p-6 text-center overflow-hidden relative"
            >
              {/* glow */}

              <div className="absolute inset-0 bg-gradient-to-r from-[#E26D8D]/0 via-[#E26D8D]/5 to-[#E26D8D]/0 opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* icon */}

              <div className="relative z-10 w-16 h-16 mx-auto rounded-2xl bg-[#E26D8D]/10 border border-[#E26D8D]/20 flex items-center justify-center text-[#E26D8D] text-3xl mb-5">
                {category.icon}
              </div>

              <h3 className="relative z-10 text-white font-semibold mb-2">
                {category.name}
              </h3>

              <p className="relative z-10 text-zinc-400 text-sm">
                {category.total}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
