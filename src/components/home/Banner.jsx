"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import HeroTextSlider from "./HeroTextSlider";



const slides = [
  "/images/banner-1.png",
  // "/images/banner-2.png",
  // "/images/banner-3.png",
];

const Banner = () => {

  return (
    <section className="relative h-screen overflow-hidden">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative h-screen bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide})`,
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0" />

              <div className="absolute inset-0 bg-gradient-to-r from-[#1B1416]/35 via-[#1B1416]/35 to-transparent " />

              {/* Content */}
              <div className="relative z-20 h-full max-w-11/12 mx-auto px-6">
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
                        py-3
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/5
                        backdrop-blur-xl
                        text-white
                        mb-8
                      "
                    >
                      🚀 Trusted by Creative Innovators
                    </motion.div>

                    <h1 className="text-3xl md:text-6xl  leading-tight">
                      Share Your
                      <br />
                      <span className="text-[#D95C78]">Best Startup</span>
                      <br />
                      Ideas
                    </h1>

                    <p
                      className="my-3 text-base md:text-[18px] text-gray-200
                      "
                    >
                      Discover innovative startup concepts, validate ideas with
                      community feedback, and collaborate with creators
                      worldwide.
                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">
                      <motion.button
                        whileHover={{
                          scale: 1.05,
                        }}
                        whileTap={{
                          scale: 0.95,
                        }}
                        className="
                          px-8
                          py-4
                          rounded-2xl
                          bg-[#D95C78]
                          text-white
                          font-semibold
                          shadow-lg
                          shadow-[#D95C78]/30
                        "
                      >
                        Explore Ideas
                      </motion.button>

                      <motion.button
                        whileHover={{
                          scale: 1.05,
                        }}
                        whileTap={{
                          scale: 0.95,
                        }}
                        className="
                          px-8
                          py-4
                          rounded-2xl
                          border
                          border-white/15
                          bg-white/5
                          backdrop-blur-xl
                          text-white
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
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;
