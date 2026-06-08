"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import IdeaCard from "../shared/IdeaCard";

const LatestIdeas = ({ ideas }) => {
  const latestIdeas = [...ideas]
    ?.sort(
      (a, b) =>
        new Date(b.createdAt) -
        new Date(a.createdAt)
    )
    ?.slice(0, 6);

  return (
    <section className="py-18 bg-gradient-to-b from-[#140d0d] via-[#221315] to-[#140d0d]">
      <div className="w-10/12 max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="px-4 py-2 rounded-lg bg-[#E26D8D]/10 border border-[#E26D8D]/20 text-[#E26D8D] text-sm">
            Latest Ideas
          </span>

          <h2 className="text-4xl md:text-5xl font-semibold text-white mt-5">
            Fresh <span className="text-[#D95C78]">Startup</span> Concepts
          </h2>

          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
            Explore newly submitted startup ideas from our growing community.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {latestIdeas?.map((idea, index) => (
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

        {/* Button */}

        <div className="flex justify-center mt-12">
          <Link
            href="/ideas"
            className="px-8 py-3 rounded-xl bg-pink-500 hover:bg-pink-600 text-white transition"
          >
            Explore All Ideas
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestIdeas;