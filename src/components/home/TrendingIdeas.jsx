"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import IdeaCard from "../shared/IdeaCard";

const TrendingIdeas = ({ ideas }) => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#140d0d] via-[#1b1012] to-[#140d0d]">
      <div className="w-10/12 max-w-7xl mx-auto">
        {/* heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-12"
        >
          <div>
            <span className="px-4 py-2 rounded-lg bg-[#E26D8D]/10 border border-[#E26D8D]/20 text-[#E26D8D] text-sm">
              Trending
            </span>

            <h2 className="text-4xl md:text-5xl font-semibold text-white mt-5">
              <span className="text-[#D95C78]">Trending</span> Startup Ideas
            </h2>

            <p className="text-zinc-400 mt-3">
              Explore the most discussed and innovative ideas.
            </p>
          </div>

          <Link
            href="/ideas"
            className="hidden md:flex items-center gap-2 text-[#E26D8D]"
          >
            View All
            <FaArrowRight />
          </Link>
        </motion.div>

        {/* cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {ideas?.slice(0, 6).map((idea, index) => (
            <motion.div
              key={idea._id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -10,
              }}
              className="overflow-hidden rounded-lg border border-[#4D2A2F] bg-[#241416]/70 backdrop-blur-xl"
            >
              <IdeaCard idea={idea} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingIdeas;
