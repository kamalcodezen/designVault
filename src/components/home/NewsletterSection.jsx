"use client";

import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

const NewsletterSection = () => {
  return (
    <section className="py-17 bg-gradient-to-b from-[#140d0d] via-[#1b1012] to-[#140d0d]">
      <div className="w-11/12 max-w-6xl mx-auto">
        <motion.div
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
            duration: 0.6,
          }}
          className="relative overflow-hidden rounded-lg border border-[#4D2A2F] bg-[#241416]/70 backdrop-blur-xl px-8 md:px-16 py-16"
        >
          {/* Glow */}

          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-[#E26D8D]/10 blur-[120px] rounded-full"></div>

          <div className="relative z-10 text-center">
            <span className="px-4 py-2 rounded-lg bg-[#E26D8D]/10 border border-[#E26D8D]/20 text-[#E26D8D] text-sm">
              Newsletter
            </span>

            <h2 className="text-4xl md:text-6xl font-semibold text-white mt-6 leading-tight">
              Join The Future Of
              <span className="block text-[#D95C78]">Startup Innovation</span>
            </h2>

            <p className="text-zinc-400 max-w-2xl mx-auto mt-6">
              Get startup insights, trending ideas, innovation news, and
              community highlights directly in your inbox.
            </p>

            {/* Form */}

            <form className="mt-10 max-w-2xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 h-12 rounded-lg bg-[#1b1012] border border-[#4D2A2F] py-4  px-5 text-white outline-none focus:border-[#E26D8D]"
                />

                <button
                  type="submit"
                  className="h-12 px-8 rounded-lg bg-pink-500 hover:bg-pink-600 transition text-white font-medium flex items-center justify-center gap-2"
                >
                  Subscribe
                  <FaPaperPlane />
                </button>
              </div>
            </form>

            {/* Stats */}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div>
                <h3 className="text-3xl font-bold text-white">12K+</h3>

                <p className="text-zinc-500 text-sm">Subscribers</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">1200+</h3>

                <p className="text-zinc-500 text-sm">Ideas Shared</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">500+</h3>

                <p className="text-zinc-500 text-sm">Innovators</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">3400+</h3>

                <p className="text-zinc-500 text-sm">Discussions</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
