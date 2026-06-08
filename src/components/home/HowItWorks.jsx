"use client";

import { motion } from "framer-motion";
import { FaLightbulb, FaComments, FaTools, FaRocket } from "react-icons/fa";

const steps = [
  {
    number: "01",
    icon: <FaLightbulb />,
    title: "Submit Your Idea",
    description:
      "Share your startup concept with a detailed explanation and vision.",
  },
  {
    number: "02",
    icon: <FaComments />,
    title: "Get Feedback",
    description:
      "Receive comments and suggestions from innovators and entrepreneurs.",
  },
  {
    number: "03",
    icon: <FaTools />,
    title: "Refine Concept",
    description:
      "Improve your idea using community insights and constructive feedback.",
  },
  {
    number: "04",
    icon: <FaRocket />,
    title: "Launch Startup",
    description:
      "Turn validated concepts into successful products and businesses.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-18 bg-gradient-to-b from-[#140d0d] via-[#1b1012] to-[#140d0d]">
      <div className="w-11/12 max-w-7xl mx-auto">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="px-4 py-2 rounded-lg bg-[#E26D8D]/10 border border-[#E26D8D]/20 text-[#E26D8D] text-sm">
            Process
          </span>

          <h2 className="text-4xl md:text-5xl font-semibold text-white mt-5">
            How <span className="text-[#D95C78]">IdeaVault</span> Works
          </h2>

          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
            A simple process to validate, improve and launch startup ideas.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative">
          {/* Desktop Line */}

          <div className="hidden lg:block absolute top-16 left-0 w-full h-[2px] bg-gradient-to-r from-[#E26D8D]/10 via-[#E26D8D] to-[#E26D8D]/10"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
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
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -10,
                }}
                className="relative z-10"
              >
                <div className="bg-[#241416]/70 backdrop-blur-xl border border-[#4D2A2F] rounded-xl p-8 h-full group">
                  {/* Step Number */}

                  <div className="absolute -top-5 left-6 w-12 h-12 rounded-xl bg-[#E26D8D] flex items-center justify-center text-white font-bold shadow-lg">
                    {step.number}
                  </div>

                  {/* Icon */}

                  <div className="mt-8 w-16 h-16 rounded-2xl bg-[#E26D8D]/10 border border-[#E26D8D]/20 flex items-center justify-center text-[#E26D8D] text-3xl group-hover:scale-110 transition">
                    {step.icon}
                  </div>

                  {/* Content */}

                  <h3 className="text-xl font-semibold text-white mt-6 mb-4">
                    {step.title}
                  </h3>

                  <p className="text-zinc-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
