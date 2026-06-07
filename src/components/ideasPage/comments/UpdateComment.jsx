"use client";

import { motion, AnimatePresence } from "framer-motion";

const UpdateComment = ({
  isOpen,
  onClose,
  editText,
  setEditText,
  handleUpdate,
}) => {
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
            className="fixed top-1/2 left-1/2 z-50 w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="bg-[#241416] border border-[#4D2A2F] rounded-2xl p-5 shadow-2xl">
              <h2 className="text-xl font-semibold text-white mb-4">
                Update Comment
              </h2>

              <textarea
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="w-full h-28 rounded-lg bg-white/5 border border-white/10 p-3 text-white outline-none focus:border-[#E26D8D]"
                placeholder="Update your comment..."
              />

              <div className="flex justify-end gap-3 mt-4">
                <button
                  onClick={onClose}
                  className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white cursor-pointer"
                >
                  Cancel
                </button>

                <button
                  onClick={handleUpdate}
                  className="px-4 py-2 rounded-lg bg-[#E26D8D] hover:bg-pink-600 text-white cursor-pointer"
                >
                  Save
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default UpdateComment;
