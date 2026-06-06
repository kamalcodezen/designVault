"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#1B1416] border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-[#D95C78] flex items-center justify-center shadow-lg shadow-[#D95C78]/30">
                <span className="font-bold text-white text-lg">D</span>
              </div>

              <h2 className="text-2xl font-bold text-[#FFF4F5]">DesignVault</h2>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-[#FFF4F5]/60">
              Share creative startup ideas, discover innovative concepts, and
              get valuable feedback from the community.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              {[
                <FaFacebookF key="fb" />,
                <FaInstagram key="ig" />,
                <FaXTwitter key="x" />,
                <FaLinkedinIn key="li" />,
              ].map((icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{
                    scale: 1.1,
                    y: -3,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="
                    w-10
                    h-10
                    rounded-full
                    border
                    border-white/10
                    flex
                    items-center
                    justify-center
                    text-[#FFF4F5]/70
                    hover:bg-[#D95C78]
                    hover:text-white
                    transition-all
                  "
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-[#FFF4F5] font-semibold mb-5">Platform</h3>

            <div className="flex flex-col gap-3">
              <Link
                href="/"
                className="text-[#FFF4F5]/60 hover:text-[#F29BAE] transition"
              >
                Home
              </Link>

              <Link
                href="/ideas"
                className="text-[#FFF4F5]/60 hover:text-[#F29BAE] transition"
              >
                Ideas
              </Link>

              <Link
                href="/add-idea"
                className="text-[#FFF4F5]/60 hover:text-[#F29BAE] transition"
              >
                Add Idea
              </Link>

              <Link
                href="/my-ideas"
                className="text-[#FFF4F5]/60 hover:text-[#F29BAE] transition"
              >
                My Ideas
              </Link>
            </div>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-[#FFF4F5] font-semibold mb-5">Community</h3>

            <div className="flex flex-col gap-3">
              <Link
                href="/my-interactions"
                className="text-[#FFF4F5]/60 hover:text-[#F29BAE] transition"
              >
                My Interactions
              </Link>

              <Link
                href="/categories"
                className="text-[#FFF4F5]/60 hover:text-[#F29BAE] transition"
              >
                Categories
              </Link>

              <Link
                href="/support"
                className="text-[#FFF4F5]/60 hover:text-[#F29BAE] transition"
              >
                Support
              </Link>

              <Link
                href="/contact"
                className="text-[#FFF4F5]/60 hover:text-[#F29BAE] transition"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#FFF4F5] font-semibold mb-5">Contact Info</h3>

            <div className="space-y-3 text-[#FFF4F5]/60">
              <p>📧 support@designvault.com</p>

              <p>📍 Kolkata, India</p>

              <p>🌐 Global Creative Community</p>
            </div>
          </div>
        </motion.div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="
            mt-14
            pt-6
            border-t
            border-white/10
            flex
            flex-col
            md:flex-row
            justify-between
            items-center
            gap-4
          "
        >
          <p className="text-sm text-[#FFF4F5]/40">
            © 2026 DesignVault. All rights reserved.
          </p>

          <p className="text-sm text-[#FFF4F5]/40">
            Share • Inspire • Innovate
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
