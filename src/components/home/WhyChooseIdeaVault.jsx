"use client";

import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaUsers,
  FaComments,
  FaRocket,
} from "react-icons/fa";

const features = [
  {
    icon: <FaLightbulb />,
    title: "Share Innovative Ideas",
    description:
      "Submit startup concepts and showcase your creativity to a growing community.",
  },
  {
    icon: <FaUsers />,
    title: "Community Validation",
    description:
      "Receive valuable feedback from entrepreneurs, creators, and innovators.",
  },
  {
    icon: <FaComments />,
    title: "Meaningful Discussions",
    description:
      "Engage in discussions that help refine and improve your startup concepts.",
  },
  {
    icon: <FaRocket />,
    title: "Launch Smarter",
    description:
      "Validate ideas before investing time and resources into development.",
  },
];

const WhyChooseIdeaVault = () => {
  return (
    <section className="py-14 bg-gradient-to-b from-[#140d0d] via-[#1b1012] to-[#140d0d]">
      <div className="w-11/12 max-w-7xl mx-auto">

        {/* heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="px-4 py-2 rounded-lg bg-[#E26D8D]/10 border border-[#E26D8D]/20 text-[#E26D8D] text-sm">
            Why IdeaVault
          </span>

          <h2 className="text-4xl md:text-5xl font-semibold text-white mt-5">
            Why Choose <span className="text-[#D95C78]">IdeaVault</span>?
          </h2>

          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
            Connect with innovators, validate your startup concepts,
            and build better products through community feedback.
          </p>
        </motion.div>

        {/* cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="group relative overflow-hidden rounded-xl border border-[#4D2A2F] bg-[#241416]/70 backdrop-blur-xl p-8"
            >
              {/* glow effect */}

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-[#E26D8D]/5 via-transparent to-[#E26D8D]/5" />

              {/* icon */}

              <div className="relative z-10 w-16 h-16 rounded-2xl bg-[#E26D8D]/10 border border-[#E26D8D]/20 flex items-center justify-center text-[#E26D8D] text-3xl mb-6">
                {feature.icon}
              </div>

              <h3 className="relative z-10 text-xl font-semibold text-white mb-4">
                {feature.title}
              </h3>

              <p className="relative z-10 text-zinc-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default WhyChooseIdeaVault;