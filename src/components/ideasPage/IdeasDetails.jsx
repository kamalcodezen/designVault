"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";

import { authClient } from "@/lib/auth-client";
import { commentDataById } from "@/lib/data";
import { toast } from "react-toastify";

import { useRouter } from "next/navigation";
import CommentsPage from "./comments/Comments";

const IdeasDetails = ({ ideaData, userComment }) => {
  const router = useRouter();

  const {
    audience,
    budget,
    category,
    tags,
    solution,
    statement,
    imageUrl,
    title,
    _id,
  } = ideaData;

  // console.log(userComment,"user commnet")

  const { data: session } = authClient.useSession();
  const user = session?.user;
  console.log(user, "user");

  // add comment data in database
  const handleComment = async (e) => {
    e.preventDefault();
    if (!user) {
      toast.error("Please login first");
      return;
    }

    const comment = e.target.comment.value;

    if (!comment.trim()) {
      toast.error("Comment cannot be empty");
      return;
    }

    try {
      const dataComment = {
        userName: user?.name,
        userId: user?.id,
        userImage: user?.image,
        userEmail: user?.email,
        ideaId: ideaData?._id,
        title,
        category,
        comment: comment.trim(),
        createdAt: new Date().toISOString(),
      };

      const result = await commentDataById(dataComment);

      if (result?.insertedId) {
        toast.success("Comment added successfully");
        // e.target.reset();
        router.refresh();
      }
    } catch (error) {
      // console.log(error);
      toast.error("Failed to add comment");
    }
  };

  return (
    <motion.section
      className="min-h-screen bg-gradient-to-br from-[#140d0d] via-[#2a1618] to-[#120b0b] text-white py-28"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-9/12 max-w-7xl mx-auto">
        {/* Back Button */}
        <Link
          href="/ideas"
          className="inline-flex items-center gap-2 text-[#E26D8D] hover:text-pink-300 mb-6"
        >
          <FaArrowLeft />
          Back To Ideas
        </Link>

        {/* Title */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-semibold mb-3">{title}</h1>

          <div className="flex flex-wrap gap-3 text-sm text-zinc-300">
            <span className="px-3 py-1 rounded-full bg-[#E26D8D]/20">
              {category}
            </span>

            <span className="px-3 py-1 rounded-full bg-white/10">
              Budget: ${budget}
            </span>

            <span className="px-3 py-1 rounded-full bg-white/10">
              {audience}
            </span>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          className="relative h-[250px] md:h-[400px] rounded-lg overflow-hidden border border-[#4D2A2F] mb-8"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Image
            src={ideaData?.imageUrl}
            alt={title}
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Content */}
          <div className="lg:col-span-8 space-y-6">
            {/* About */}
            <motion.div
              className="bg-[#241416]/80 border border-[#4D2A2F] backdrop-blur-xl rounded-lg p-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              whileHover={{ y: -4 }}
            >
              <h2 className="text-2xl font-bold mb-4">About Idea</h2>

              <p className="text-zinc-300 leading-relaxed">
                {ideaData["detailed-description"]}
              </p>
            </motion.div>

            {/* Problem */}
            <motion.div
              className="bg-[#241416]/80 border border-[#4D2A2F] backdrop-blur-xl rounded-lg p-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              whileHover={{ y: -4 }}
            >
              <h2 className="text-2xl font-bold mb-4">Problem Statement</h2>

              <p className="text-zinc-300 leading-relaxed">{statement}</p>
            </motion.div>

            {/* Solution */}
            <motion.div
              className="bg-[#241416]/80 border border-[#4D2A2F] backdrop-blur-xl rounded-lg p-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              whileHover={{ y: -4 }}
            >
              <h2 className="text-2xl font-bold mb-4">Proposed Solution</h2>

              <p className="text-zinc-300 leading-relaxed">{solution}</p>
            </motion.div>

            {/* Tags */}
            <motion.div
              className="bg-[#241416]/80 border border-[#4D2A2F] backdrop-blur-xl rounded-lg p-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              whileHover={{ y: -4 }}
            >
              <h2 className="text-2xl font-bold mb-4">Tags</h2>

              <div className="flex flex-wrap gap-3">
                {tags?.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-1 rounded-full bg-[#E26D8D]/20 text-[#E26D8D] border border-[#E26D8D]/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              {/* Owner */}
              <motion.div
                className="bg-[#241416]/80 border border-[#4D2A2F] backdrop-blur-xl rounded-lg p-6"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <h3 className="text-xl font-bold mb-5">Idea Owner</h3>

                <div className="flex items-center gap-4">
                  <img
                    src={user?.image}
                    alt={userComment?.userName}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover border border-[#E26D8D]/30"
                  />

                  <div>
                    <h4 className="font-semibold">{user?.name}</h4>
                    <p className="text-zinc-400 text-sm">Idea Creator</p>
                  </div>
                </div>
              </motion.div>

              {/* Info */}
              <motion.div
                className="bg-[#241416]/80 border border-[#4D2A2F] backdrop-blur-xl rounded-lg p-6"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h3 className="text-xl font-bold mb-5">Idea Information</h3>

                <div className="space-y-4">
                  <div>
                    <p className="text-zinc-400 text-sm">Category</p>
                    <p>{category}</p>
                  </div>

                  <div>
                    <p className="text-zinc-400 text-sm">Estimated Budget</p>
                    <p>${budget}</p>
                  </div>

                  <div>
                    <p className="text-zinc-400 text-sm">Target Audience</p>
                    <p>{audience}</p>
                  </div>

                  <div>
                    <p className="text-zinc-400 text-sm">Short Description</p>
                    <p>{ideaData["short-description"]}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Comments */}
        <div className="grid lg:grid-cols-12 gap-6 mt-7">
          {/* Comment Form */}
          <div className="lg:col-span-4 order-1 lg:order-2">
            <div className="sticky top-28">
              <form onSubmit={handleComment} className="space-y-4">
                <textarea
                  name="comment"
                  placeholder="Write your comment..."
                  className="w-full h-40 rounded-lg bg-white/5 border border-white/10 p-4 outline-none focus:border-[#E26D8D]"
                />

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full bg-[#E26D8D] hover:bg-pink-600 py-3 rounded-lg font-semibold transition cursor-pointer"
                >
                  Post Comment
                </motion.button>
              </form>
            </div>
          </div>

          {/* Comments List */}
          <div className="lg:col-span-8 order-2 lg:order-1 space-y-4 max-h-[500px] overflow-y-auto pr-2">
            {userComment.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-10 rounded-xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-semibold text-white">
                  No Comments Yet
                </h3>

                <p className="text-zinc-400 text-sm mt-2">
                  Start the conversation by posting the first comment.
                </p>
              </div>
            ) : (
              userComment
                ?.filter((comment) => comment.ideaId === _id)
                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                .map((comment) => (
                  <CommentsPage
                    key={comment._id}
                    userComment={comment}
                    user={user}
                  />
                ))
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default IdeasDetails;
