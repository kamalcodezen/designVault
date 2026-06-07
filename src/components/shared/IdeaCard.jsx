"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const IdeaCard = ({ idea, index }) => {
  return (
    <div>
      <motion.div
        key={idea._id}
        className="group bg-white/5 border border-white/10 backdrop-blur-xl rounded-lg overflow-hidden hover:border-pink-500/50 transition"
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        whileHover={{ y: -8, scale: 1.03 }}
        transition={{
          duration: 0.45,
          delay: index * 0.1,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="relative h-38 overflow-hidden">
          <Image
            src={idea.image}
            alt={idea.title}
            fill
            className="object-cover group-hover:scale-110 transition duration-500"
          />
        </div>

        <div className="p-5">
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs px-3 py-1 rounded-full bg-pink-500/20 text-pink-300">
              {idea.category}
            </span>

            <span className="text-pink-400 font-semibold">$ {idea.budget}</span>
          </div>

          <h2 className="text-xl font-bold mb-2 line-clamp-1">{idea.title}</h2>

          <p className="text-zinc-400 text-sm  line-clamp-2">
            {idea["short-description"]}
          </p>

          <div className="border-t border-white/10 pt-2">
            {/* <p className="text-sm text-zinc-400">Audience</p> */}

            <p
              className="text-white text-sm mt-1 line-clamp-1"
              title={`${idea.audience}`}
            >
              {idea.audience}
            </p>
          </div>

          <button className="mt-3 w-full bg-pink-500 hover:bg-pink-600 transition py-1.5 rounded-lg font-medium cursor-pointer">
            View Details
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default IdeaCard;
