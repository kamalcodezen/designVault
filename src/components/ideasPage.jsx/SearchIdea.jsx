"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";

const SearchIdea = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const ideaCategories = [
    "All Categories",
    "AI",
    "Health",
    "Education",
    "Business",
    "Finance",
    "Technology",
  ];

  return (
    <div>
      <motion.div
        className="flex flex-col sm:flex-row justify-center max-w-[680px] mx-auto gap-3 px-4 mb-14 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {/* Search Input */}
        <div className="relative flex-[3]">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#E26D8D] text-lg pointer-events-none" />

          <input
            // onChange={search}
            // value={searchTerm}
            type="text"
            placeholder="Search ideas..."
            className="w-full h-12 pl-11 pr-4 bg-[#2A1618]/80 border border-[#5C2D32] rounded-lg text-white placeholder:text-[#C8A5A9] text-sm font-medium outline-none focus:ring-2 focus:ring-[#E26D8D]/40 focus:border-[#E26D8D] transition-all duration-200 shadow-[0_4px_20px_rgba(226,109,141,0.15)]"
          />
        </div>

        {/* Category Dropdown */}
        <div className="relative flex-1 min-w-[148px]">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full h-12 px-4 bg-[#2A1618]/80 border border-[#5C2D32] rounded-lg text-sm font-semibold text-white flex items-center justify-between gap-2 outline-none hover:border-[#E26D8D] transition-all duration-200 shadow-[0_4px_20px_rgba(226,109,141,0.15)] cursor-pointer"
          >
            <span className="truncate">
              {selectedCategory || "All Categories"}
            </span>

            <FaChevronDown
              className={`text-[#E26D8D] text-xs flex-shrink-0 transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          <AnimatePresence>
            {isOpen && (
              <motion.ul
                className="absolute top-14 left-0 right-0 bg-[#2A1618] border border-[#5C2D32] rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.4)] z-50 overflow-hidden"
                initial={{ opacity: 0, y: -8, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.97 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                {ideaCategories.map((category, i) => (
                  <motion.li
                    key={category}
                    onClick={() => {
                      setSelectedCategory(
                        category === "All Categories" ? "" : category,
                      );
                      setIsOpen(false);
                    }}
                    className={`px-4 py-2.5 text-sm font-medium cursor-pointer transition-colors duration-150 ${
                      selectedCategory === category ||
                      (category === "All Categories" && !selectedCategory)
                        ? "bg-[#E26D8D]/20 text-[#E26D8D]"
                        : "text-[#F4E8EA] hover:bg-[#3B1F22] hover:text-[#E26D8D]"
                    }`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.03 }}
                  >
                    {category}
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default SearchIdea;
