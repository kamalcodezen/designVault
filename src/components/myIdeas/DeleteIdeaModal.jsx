"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MdDelete, MdDeleteForever } from "react-icons/md";
import { myIdeaDeleteData } from "@/lib/data";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const DeleteIdea = ({ idea }) => {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const router = useRouter();

  const handleDelete = async () => {
    try {
      const result = await myIdeaDeleteData(idea._id);

      if (result.deletedCount > 0) {
        toast.success("Idea Deleted Successfully ✅");
        setIsDeleteOpen(false);
        router.refresh();
      }
    } catch (error) {
      toast.error("Failed To Delete Idea ❌");
    }
  };

  return (
    <>
      <button
        onClick={() => setIsDeleteOpen(true)}
        className="flex items-center gap-1 text-red-400 hover:text-red-300 transition cursor-pointer"
      >
        <MdDelete />
        Delete
      </button>

      <AnimatePresence>
        {isDeleteOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDeleteOpen(false)}
            />

            <motion.div
              className="fixed top-1/2 left-1/2 z-50 w-[90%] max-w-sm -translate-x-1/2 -translate-y-1/2"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
            >
              <div className="bg-[#241416] border border-[#4D2A2F] rounded-2xl p-6">
                <div className="flex justify-center mb-4">
                  <MdDeleteForever size={40} className="text-red-400" />
                </div>

                <h2 className="text-xl text-center font-semibold text-white">
                  Delete Idea
                </h2>

                <p className="text-center text-zinc-400 mt-2">
                  Are you sure you want to delete this idea?
                </p>

                <div className="flex gap-3 mt-6">
                  <button
                    onClick={() => setIsDeleteOpen(false)}
                    className="flex-1 py-2 rounded-lg bg-white/10 text-white cursor-pointer"
                  >
                    Cancel
                  </button>

                  <button
                    onClick={handleDelete}
                    className="flex-1 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white cursor-pointer"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default DeleteIdea;
