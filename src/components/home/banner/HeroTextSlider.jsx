"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const features = [
  "Validate Startup Ideas",
  "Discover Innovation",
  "Get Community Feedback",
  "Explore Trending Ideas",
  "Build Future Startups",
  "Find Co-Founders",
  "Launch Your Vision",
];

const HeroTicker = () => {
  const [active, setActive] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev === features.length - 1 ? 0 : prev + 1));
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hidden lg:block">
      <div className="overflow-hidden h-[420px]">
        <motion.div
          animate={{
            y: 210 - active * 80,
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
        >
          {features.map((item, idx) => (
            <div
              key={item}
              className="
                h-[60px]
                flex
                items-center
                gap-4
              "
            >
              {/* Arrow Column */}
              <div className="w-10 flex justify-center">
                {idx === active && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="
                      text-[#D95C78]
                      text-3xl
                    "
                  >
                    ▶
                  </motion.span>
                )}
              </div>

              {/* Text */}
              <span
                className={`
                  text-3xl
                  font-black
                  transition-all
                  duration-500
                  ${idx === active ? "text-white" : "text-white/15"}
                `}
              >
                {item}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HeroTicker;
