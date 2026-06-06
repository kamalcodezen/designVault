"use client";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import HeroTextSlider from "./HeroTextSlider";
import { FaArrowRight } from "react-icons/fa6";


const Banner = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 9000,
          disableOnInteraction: false,
        }}
        // navigation={true}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-full"
      >
        {/* slide 1 */}
        <SwiperSlide>
          <div
            className="relative h-screen bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/banner-1.png')",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0" />

            <div className="absolute inset-0 bg-gradient-to-r from-[#1B1416]/45 via-[#1B1416]/40 to-transparent " />

            {/* Content */}
            <div className="relative z-20 h-full max-w-11/12 mx-auto px-6 pt-22">
              <div className="grid lg:grid-cols-2 h-full items-center  gap-10">
                {/* Left Side */}
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      delay: 0.3,
                    }}
                    className="
                        inline-flex
                        items-center
                        gap-3
                        px-5
                        py-2
                        rounded-md
                        border
                        border-white/10
                        bg-white/5
                        backdrop-blur-xl
                        text-white
                        mb-5
                        md:mb-2
                        text-[14px] cursor-pointer hover:bg-white/15  transform transition-all 
                      "
                  >
                    Trusted by Creative Innovators
                    <FaArrowRight className="text-xl  text-[#D95C78]" />
                  </motion.div>

                  <h2 className="text-4xl md:text-[55px] font-semibold ">
                    Share Your
                    <span className="text-[#D95C78] italic">
                      {" "}
                      Best Startup{" "}
                    </span>
                    Ideas
                  </h2>

                  <p
                    className="my-4 text-base md:text-[18px] text-gray-200
                      "
                  >
                    Discover innovative startup concepts, validate ideas with
                    community feedback, and collaborate with creators worldwide.
                  </p>

                  <div className="mt-7 flex flex-wrap gap-4">
                    <motion.button
                      // whileHover={{
                      //   scale: 1.02,
                      // }}
                      whileTap={{
                        scale: 0.95,
                      }}
                      className="
                          px-8
                          py-3
                          rounded-lg
                          bg-[#D95C78]
                          text-white
                          font-semibold
                          shadow-lg
                          shadow-[#D95C78]/30 cursor-pointer
                        "
                    >
                      Explore Ideas
                    </motion.button>

                    <motion.button
                      // whileHover={{
                      //   scale: 1.01,
                      // }}
                      whileTap={{
                        scale: 0.95,
                      }}
                      className="
                          px-10
                          py-3
                          rounded-lg
                          border
                          border-white
                          hover:bg-white/5
                          hover:backdrop-blur-xl
                          transition-all
                          text-white cursor-pointer
                        "
                    >
                      Learn More
                    </motion.button>
                  </div>
                </motion.div>

                {/* Right Side */}
                <div className="hidden lg:flex justify-center items-center">
                  <HeroTextSlider />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* slide 2 */}

        <SwiperSlide>
          <div
            className="relative h-screen bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/banner-2.png')",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0" />

            <div className="absolute inset-0 bg-gradient-to-r from-[#1B1416]/45 via-[#1B1416]/40 to-transparent " />

            {/* Content */}
            <div className="relative z-20 h-full max-w-11/12 mx-auto px-6 pt-22">
              <div className="grid lg:grid-cols-2 h-full items-center  gap-10">
                {/* Left Side */}
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      delay: 0.3,
                    }}
                    className="
                        inline-flex
                        items-center
                        gap-3
                        px-5
                        py-2
                        rounded-md
                        border
                        border-white/10
                        bg-white/5
                        backdrop-blur-xl
                        text-white
                        mb-5
                        md:mb-2
                        text-[14px] cursor-pointer hover:bg-white/15  transform transition-all 
                      "
                  >
                    Community Feedback System
                    <FaArrowRight className="text-xl  text-[#D95C78] animate-bounce" />
                  </motion.div>

                  <h2 className="text-4xl md:text-[55px] font-semibold ">
                    Validate Your
                    <span className="text-[#D95C78] italic">
                      {" "}
                      Startup Ideas{" "}
                    </span>
                  </h2>

              

                  <p
                    className="my-4 text-base md:text-[18px] text-gray-200
                      "
                  >
                    Get valuable feedback from entrepreneurs, creators and
                    innovators before investing time and resources into your
                    startup concept.
                  </p>

                  <div className="mt-7 flex flex-wrap gap-4">
                    <motion.button
                      // whileHover={{
                      //   scale: 1.02,
                      // }}
                      whileTap={{
                        scale: 0.95,
                      }}
                      className="
                          px-8
                          py-3
                          rounded-lg
                          bg-white
                          text-black
                          font-semibold
                          shadow-lg
                          shadow-[#D95C78]/30 cursor-pointer
                        "
                    >
                      Explore Ideas
                    </motion.button>

                    <motion.button
                      // whileHover={{
                      //   scale: 1.01,
                      // }}
                      whileTap={{
                        scale: 0.95,
                      }}
                      className="
                          px-10
                          py-3
                          rounded-lg
                          border
                          border-white
                          hover:bg-white/5
                          hover:backdrop-blur-xl
                          transition-all
                          text-white cursor-pointer
                        "
                    >
                      Validate Ideas
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* slide 3 */}
        <SwiperSlide>
          <div
            className="relative h-screen bg-cover bg- bg-center"
            style={{
              backgroundImage: "url('/images/banner-3.png')",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0" />

            <div className="absolute inset-0 bg-gradient-to-r from-[#1B1416]/45 via-[#1B1416]/40 to-transparent " />

            {/* Content */}
            <div className="relative z-20 h-full max-w-11/12 mx-auto px-6 pt-22">
              <div className="grid lg:grid-cols-2 h-full items-center  gap-10">
                {/* Left Side */}
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      delay: 0.3,
                    }}
                    className="
                        inline-flex
                        items-center
                        gap-3
                        px-7
                        py-1.5
                        rounded-full
                        border
                        border-white/10
                        bg-white/5
                        backdrop-blur-xl
                        text-white
                        mb-5
                        md:mb-2
                        text-[14px] cursor-pointer hover:bg-white/15  transform transition-all 
                      "
                  >
                    Innovation Driven Platform
                    <FaArrowRight className="text-xl  text-[#D95C78] animate-bounce" />
                  </motion.div>

                  <h2 className="text-4xl md:text-[55px] font-semibold ">
                    Turn Ideas Into {" "}<span className="text-[#D95C78] italic">
                      Successful Startups
                    </span>
                  </h2>

                  <p
                    className="my-4 text-base md:text-[18px] text-gray-200
                      "
                  >
                    Share innovative concepts, discover trending startup ideas
                    and collaborate with the community to refine and improve
                    your vision.
                  </p>

                  <div className="grid grid-cols-3 gap-6 mt-10">
                    <div>
                      <h3 className="text-4xl font-bold text-white">25K+</h3>
                      <p className="text-white/60 text-sm">Ideas Shared</p>
                    </div>

                    <div>
                      <h3 className="text-4xl font-bold text-white">8K+</h3>
                      <p className="text-white/60 text-sm">Active Users</p>
                    </div>

                    <div>
                      <h3 className="text-4xl font-bold text-white">95%</h3>
                      <p className="text-white/60 text-sm">
                        Community Engagement
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Banner;
