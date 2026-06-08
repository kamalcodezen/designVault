"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaTrophy,
  FaMedal,
  FaAward,
  FaStar,
} from "react-icons/fa";

const contributors = [
  {
    rank: "#1",
    icon: <FaTrophy />,
    name: "Sarah Johnson",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    ideas: 42,
    comments: 215,
  },
  {
    rank: "#2",
    icon: <FaMedal />,
    name: "Michael Lee",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    ideas: 35,
    comments: 187,
  },
  {
    rank: "#3",
    icon: <FaAward />,
    name: "Emma Wilson",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    ideas: 29,
    comments: 165,
  },
  {
    rank: "#4",
    icon: <FaStar />,
    name: "David Smith",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    ideas: 24,
    comments: 132,
  },
];

const TopContributors = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-[#140d0d] via-[#1b1012] to-[#140d0d]">
      <div className="w-11/12 max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="px-4 py-2 rounded-lg bg-[#E26D8D]/10 border border-[#E26D8D]/20 text-[#E26D8D] text-sm">
            Community Leaders
          </span>

          <h2 className="text-4xl md:text-5xl font-semibold text-white mt-5">
            Top <span className="text-[#D95C78]">Contributors</span>
          </h2>

          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
            Meet the most active innovators helping shape the future
            through ideas and discussions.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {contributors.map((user, index) => (
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
                y: -10,
                scale: 1.02,
              }}
              className="bg-[#241416]/70 border border-[#4D2A2F] rounded-xl backdrop-blur-xl p-6 text-center relative overflow-hidden"
            >
              {/* Rank Badge */}

              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#E26D8D]/15 text-[#E26D8D] text-xs font-semibold border border-[#E26D8D]/20">
                {user.rank}
              </div>

              {/* Avatar */}

              <div className="relative w-24 h-24 mx-auto mb-5 overflow-hidden rounded-full border-2 border-[#E26D8D]/30">
                <Image
                  src={user.image}
                  alt={user.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Icon */}

              <div className="w-12 h-12 mx-auto rounded-xl bg-[#E26D8D]/10 border border-[#E26D8D]/20 flex items-center justify-center text-[#E26D8D] text-xl mb-4">
                {user.icon}
              </div>

              {/* Info */}

              <h3 className="text-xl font-semibold text-white">
                {user.name}
              </h3>

              <div className="flex justify-center gap-6 mt-5">
                <div>
                  <h4 className="text-[#E26D8D] text-xl font-bold">
                    {user.ideas}
                  </h4>

                  <p className="text-zinc-500 text-sm">
                    Ideas
                  </p>
                </div>

                <div>
                  <h4 className="text-[#E26D8D] text-xl font-bold">
                    {user.comments}
                  </h4>

                  <p className="text-zinc-500 text-sm">
                    Comments
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

export default TopContributors;