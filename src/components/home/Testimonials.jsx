"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Startup Founder",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    review:
      "IdeaVault helped me validate my startup concept before investing months into development. The feedback was incredibly valuable.",
  },
  {
    name: "Michael Lee",
    role: "Product Designer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    review:
      "The community is active and supportive. I refined my product idea through comments and discussions from experienced founders.",
  },
  {
    name: "Emma Wilson",
    role: "AI Entrepreneur",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    review:
      "One of the best platforms for discovering innovative startup concepts and connecting with creative minds.",
  },
];

const CommunityTestimonials = () => {
  return (
    <section className="py-18 bg-gradient-to-b from-[#140d0d] via-[#1b1012] to-[#140d0d]">
      <div className="w-11/12 max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="px-4 py-2 rounded-lg bg-[#E26D8D]/10 border border-[#E26D8D]/20 text-[#E26D8D] text-sm">
            Testimonials
          </span>

          <h2 className="text-4xl md:text-5xl font-semibold text-white mt-5">
            What Our Community Says
          </h2>

          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
            Thousands of innovators are sharing, validating,
            and improving startup ideas together.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">

          {testimonials.map((item, index) => (
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
              }}
              className="bg-[#241416]/70 border border-[#4D2A2F] rounded-xl backdrop-blur-xl p-8"
            >
              {/* Stars */}

              <div className="flex gap-1 text-[#E26D8D] mb-5">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              {/* Review */}

              <p className="text-zinc-300 leading-relaxed mb-8">
                "{item.review}"
              </p>

              {/* User */}

              <div className="flex items-center gap-4">

                <div className="relative w-14 h-14 rounded-full overflow-hidden border border-[#E26D8D]/20">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-white font-semibold">
                    {item.name}
                  </h3>

                  <p className="text-zinc-500 text-sm">
                    {item.role}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default CommunityTestimonials;