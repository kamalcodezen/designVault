"use client";

import { useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import UpdateComment from "./UpdateComment";
import { updateComment } from "@/lib/data";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const CommentsPage = ({ userComment, user }) => {
  const isOwner = user?.email === userComment?.userEmail;
  const { _id } = userComment;
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [editText, setEditText] = useState(userComment?.comment);

  // data access and update data
  const handleUpdate = async () => {
    // console.log("Update:", editText);
    try {
      const data = await updateComment(_id, editText);

      if (data.modifiedCount > 0) {
        toast.success("Comment updated successfully");

        setIsOpen(false);
        router.refresh();
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <div className="p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl">
        <div className="flex items-start justify-between">
          <div className="flex gap-3">
            <img
              src={userComment?.userImage}
              alt={userComment?.userName}
              width={48}
              height={48}
              className="w-12 h-12 rounded-full object-cover border border-[#E26D8D]/30"
            />

            <div>
              <h3 className="font-semibold text-white">
                {userComment?.userName}
              </h3>

              <p className="text-xs text-zinc-400">
                {new Date(userComment?.createdAt).toLocaleString("en-US")}
              </p>
            </div>
          </div>

          {isOwner && (
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsOpen(true)}
                className="p-2 rounded-lg bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition cursor-pointer"
              >
                <MdEdit size={18} />
              </button>

              <button className="p-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition cursor-pointer">
                <MdDelete size={18} />
              </button>
            </div>
          )}
        </div>

        <p className="mt-4 text-zinc-300 leading-relaxed">
          {userComment?.comment}
        </p>
      </div>

      <UpdateComment
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        editText={editText}
        setEditText={setEditText}
        handleUpdate={handleUpdate}
      />
    </>
  );
};

export default CommentsPage;
