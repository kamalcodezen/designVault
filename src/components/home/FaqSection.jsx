"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "What is IdeaVault?",
    answer:
      "IdeaVault is a startup idea sharing platform where innovators can submit ideas, receive feedback, and collaborate with the community.",
  },
  {
    question: "How can I share an idea?",
    answer:
      "Simply create an account, navigate to the Add Idea page, and submit your startup concept with all relevant details.",
  },
  {
    question: "Can I edit my ideas later?",
    answer:
      "Yes. From the My Ideas page, you can update or delete any idea you have created.",
  },
  {
    question: "Is IdeaVault free to use?",
    answer:
      "Yes. All core features including idea sharing, browsing, and commenting are completely free.",
  },
  {
    question: "How does the comment system work?",
    answer:
      "Users can comment on ideas, edit their own comments, and delete them whenever necessary.",
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-[#140d0d] via-[#1b1012] to-[#140d0d]">
      <div className="w-11/12 max-w-4xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="px-4 py-2 rounded-lg bg-[#E26D8D]/10 border border-[#E26D8D]/20 text-[#E26D8D] text-sm">
            FAQ
          </span>

          <h2 className="text-4xl md:text-5xl font-semibold text-white mt-5">
            <span className="text-[#D95C78]">Frequently</span> Asked Questions
          </h2>

          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
            Everything you need to know about IdeaVault and how it works.
          </p>
        </motion.div>

        {/* FAQ Items */}

        <div className="space-y-4">

          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.3,
                delay: index * 0.05,
              }}
              className="overflow-hidden rounded-xl border border-[#4D2A2F] bg-[#241416]/70 backdrop-blur-xl"
            >
              <button
                onClick={() => handleToggle(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer"
              >
                <h3 className="text-white font-medium">
                  {faq.question}
                </h3>

                <span className="text-[#E26D8D]">
                  {activeIndex === index ? (
                    <FaMinus />
                  ) : (
                    <FaPlus />
                  )}
                </span>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                  >
                    <div className="px-6 pb-5 border-t border-[#4D2A2F]">
                      <p className="text-zinc-400 leading-relaxed pt-4">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default FaqSection;