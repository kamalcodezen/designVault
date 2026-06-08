"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";
import { FaLightbulb, FaUsers, FaComments, FaLayerGroup } from "react-icons/fa";

const stats = [
  {
    icon: <FaLightbulb />,
    number: 1200,
    suffix: "+",
    title: "Ideas Shared",
  },
  {
    icon: <FaUsers />,
    number: 500,
    suffix: "+",
    title: "Active Innovators",
  },
  {
    icon: <FaComments />,
    number: 3400,
    suffix: "+",
    title: "Community Comments",
  },
  {
    icon: <FaLayerGroup />,
    number: 15,
    suffix: "+",
    title: "Idea Categories",
  },
];

const StatisticsSection = () => {
  return (
    <section className="py-17 bg-gradient-to-b from-[#140d0d] via-[#1b1012] to-[#140d0d]">
      <div className="w-11/12 max-w-7xl mx-auto">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="px-4 py-2 rounded-lg bg-[#E26D8D]/10 border border-[#E26D8D]/20 text-[#E26D8D] text-sm">
            Statistics
          </span>

          <h2 className="text-4xl md:text-5xl font-semibold text-white mt-5">
            <span className="text-[#D95C78]">IdeaVault</span> By Numbers
          </h2>

          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
            Thousands of creators are already sharing and validating startup
            ideas through our community.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="bg-[#241416]/70 border border-[#4D2A2F] rounded-xl backdrop-blur-xl p-8 text-center"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-[#E26D8D]/10 border border-[#E26D8D]/20 flex items-center justify-center text-[#E26D8D] text-3xl mb-5">
                {stat.icon}
              </div>

              <h3 className="text-4xl font-bold text-white">
                <CountUp end={stat.number} duration={3} enableScrollSpy />
                {stat.suffix}
              </h3>

              <p className="text-zinc-400 mt-3">{stat.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
