"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MdDeleteForever } from "react-icons/md";

const DeleteComment = ({ isOpen, onClose, handleDelete }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed top-1/2 left-1/2 z-50 w-[90%] max-w-sm -translate-x-1/2 -translate-y-1/2"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="bg-[#241416] border border-[#4D2A2F] rounded-2xl p-6 shadow-2xl">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center">
                  <MdDeleteForever size={34} className="text-red-400" />
                </div>
              </div>

              <h2 className="text-xl font-semibold text-center text-white">
                Delete Comment
              </h2>

              <p className="text-zinc-400 text-center mt-2">
                Are you sure you want to delete this comment? This action cannot
                be undone.
              </p>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={onClose}
                  className="flex-1 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition cursor-pointer"
                >
                  Cancel
                </button>

                <button
                  onClick={handleDelete}
                  className="flex-1 py-2.5 rounded-lg bg-red-500 hover:bg-red-600 text-white transition cursor-pointer"
                >
                  Delete
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default DeleteComment;
