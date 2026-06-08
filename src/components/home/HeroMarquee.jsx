"use client";

import Marquee from "react-fast-marquee";
import { FaCrown, FaGem, FaArrowRight } from "react-icons/fa6";

const LuxuryMarquee = () => {
  return (
    <div
      className=" absolute bottom-0 left-1/2 -translate-x-1/2 z-30  w-full   shadow-2xl overflow-hidden
    "
    >
      <Marquee speed={50} gradient={false} pauseOnHover className="py-4">
        <div className="flex items-center gap-14 px-6 text-white">
          {/* Item 1 */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#E26D8D]/20 border border-[#E26D8D]/30">
              <FaGem className="text-[#E26D8D]" />
            </div>

            <div>
              <p className="text-xs uppercase tracking-[3px] text-gray-300">
                Trending Ideas
              </p>

              <h3 className="text-sm md:text-base font-light">
                Explore 1200+ Startup Ideas Shared By Innovators
              </h3>
            </div>
          </div>

          <FaArrowRight className="text-[#E26D8D]" />

          {/* Item 2 */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#E26D8D]/20 border border-[#E26D8D]/30">
              <FaCrown className="text-[#E26D8D]" />
            </div>

            <div>
              <p className="text-xs uppercase tracking-[3px] text-gray-300">
                Community
              </p>

              <h3 className="text-sm md:text-base font-light">
                Join 500+ Active Founders And Creative Thinkers
              </h3>
            </div>
          </div>

          <FaArrowRight className="text-[#E26D8D]" />

          {/* Item 3 */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#E26D8D]/20 border border-[#E26D8D]/30">
              <FaGem className="text-[#E26D8D]" />
            </div>

            <div>
              <p className="text-xs uppercase tracking-[3px] text-gray-300">
                Innovation Hub
              </p>

              <h3 className="text-sm md:text-base font-light">
                Validate Your Next Big Startup Idea Today
              </h3>
            </div>
          </div>

          <FaArrowRight className="text-[#E26D8D]" />

          {/* Item 4 */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#E26D8D]/20 border border-[#E26D8D]/30">
              <FaCrown className="text-[#E26D8D]" />
            </div>

            <div>
              <p className="text-xs uppercase tracking-[3px] text-gray-300">
                Discussions
              </p>

              <h3 className="text-sm md:text-base font-light">
                3400+ Community Comments And Valuable Feedback
              </h3>
            </div>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default LuxuryMarquee;
