"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";
import MainLayoutLoading from "@/app/(main)/loading";

const MyInteractions = ({ userComment }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { data, isPending } = authClient.useSession();
  const user = data?.user;

  if (isPending) {
    return (
      <>
        <MainLayoutLoading />
      </>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#140d0d] via-[#2a1618] to-[#120b0b] text-white py-28">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-10/12 max-w-7xl mx-auto"
      >
        <div className="grid lg:grid-cols-12 gap-6">
          {/* MOBILE MENU */}
          <div className="lg:hidden mb-6">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex w-full items-center justify-between rounded-lg bg-[#241416]/80 border border-[#4D2A2F] px-4 py-3 text-white backdrop-blur-xl"
            >
              <span className="font-semibold">DesignVault Menu</span>

              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.25 }}
              >
                ▼
              </motion.span>
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <div className="mt-2 rounded-lg bg-[#241416]/90 border border-[#4D2A2F] p-4 backdrop-blur-xl">
                    <div className="space-y-3 text-sm">
                      <Link
                        href="/"
                        className="block text-zinc-300 hover:text-[#E26D8D] transition"
                      >
                        Dashboard
                      </Link>

                      <Link
                        href="/add-idea"
                        className="block text-zinc-300 hover:text-[#E26D8D] transition"
                      >
                        Add Idea
                      </Link>

                      <Link
                        href="/my-idea"
                        className="block text-[#E26D8D] font-medium"
                      >
                        My Ideas
                      </Link>

                      <Link
                        href="/my-interactions"
                        className="block text-zinc-300 hover:text-[#E26D8D] transition"
                      >
                        My Interactions
                      </Link>

                      <Link
                        href="/profile"
                        className="block text-zinc-300 hover:text-[#E26D8D] transition"
                      >
                        Profile
                      </Link>

                      <Link
                        href="/settings"
                        className="block text-zinc-300 hover:text-[#E26D8D] transition"
                      >
                        Settings
                      </Link>

                      <button
                        onClick={async () => {
                          await authClient.signOut();
                          toast.success(
                            "See you soon! 👋 Logged out successfully",
                          );
                        }}
                        className="block text-zinc-300 hover:text-[#E26D8D] cursor-pointer"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* desktop Sidebar */}
          <div className="hidden lg:block lg:col-span-3">
            <div className=" bg-[#241416]/80 border border-[#4D2A2F] rounded-lg backdrop-blur-xl p-5 sticky top-28">
              <h2 className="text-lg font-semibold mb-6">DesignVault</h2>

              <div className="space-y-4 text-sm">
                <Link
                  href="/"
                  className="block text-zinc-300 hover:text-[#E26D8D] cursor-pointer"
                >
                  Dashboard
                </Link>

                <Link
                  href="/add-idea"
                  className="block text-zinc-300 hover:text-[#E26D8D] cursor-pointer"
                >
                  Add Idea
                </Link>

                <Link
                  href="/my-idea"
                  className="block text-[#E26D8D] font-medium cursor-pointer"
                >
                  My Ideas
                </Link>

                <Link
                  href="/my-interactions"
                  className="block text-zinc-300 hover:text-[#E26D8D] cursor-pointer"
                >
                  My Interactions
                </Link>

                <Link
                  href="/profile"
                  className="block text-zinc-300 hover:text-[#E26D8D] cursor-pointer"
                >
                  Profile
                </Link>

                <Link
                  href="/"
                  className="block text-zinc-300 hover:text-[#E26D8D] cursor-pointer"
                >
                  Settings
                </Link>

                <button
                  onClick={async () => {
                    await authClient.signOut();
                    toast.success("See you soon! 👋 Logged out successfully");
                  }}
                  className="block text-zinc-300 hover:text-[#E26D8D] cursor-pointer"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-9">
            <div className="bg-[#241416]/80 border border-[#4D2A2F] rounded-lg backdrop-blur-xl overflow-hidden">
              {/* Ideas List */}
              <div>
                {/* Content */}
                <div className="lg:col-span-9">
                  <div className="bg-[#241416]/80 border border-[#4D2A2F] rounded-lg backdrop-blur-xl overflow-hidden">
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 border-b border-[#4D2A2F]">
                      <div>
                        <h1 className="text-2xl font-bold">My Interactions</h1>

                        <p className="text-zinc-400 text-sm mt-1">
                          Ideas you've commented on
                        </p>
                      </div>

                      <span className="px-4 py-2 rounded-lg bg-[#E26D8D]/10 text-[#E26D8D] text-sm">
                        {userComment?.length || 0} Comments
                      </span>
                    </div>

                    {/* Commented Ideas List */}
                    <div>
                      {!isPending && !user ? (
                        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#140d0d] via-[#2a1618] to-[#120b0b]">
                          <div className="text-center">
                            <h2 className="text-2xl font-semibold text-white">
                              Please Login First
                            </h2>

                            <p className="text-zinc-400 mt-2">
                              You need to sign in to access this page.
                            </p>

                            <Link
                              href="/login"
                              className="inline-block mt-5 px-5 py-2 rounded-lg bg-[#E26D8D] hover:bg-pink-600 text-white transition"
                            >
                              Login Now
                            </Link>
                          </div>
                        </div>
                      ) : (
                        userComment?.map((comment, index) => (
                          <motion.div
                            key={comment._id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.4,
                              delay: index * 0.08,
                            }}
                            className="flex flex-col md:flex-row gap-4 p-5 border-b border-[#4D2A2F] hover:bg-white/[0.03] transition"
                          >
                            {/* Image */}
                            <div className="relative w-full md:w-40 h-28 rounded-lg overflow-hidden shrink-0">
                              <img
                                src={
                                  comment?.imageUrl?.trim()
                                    ? comment.imageUrl
                                    : "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                                }
                                alt={comment?.title || "Idea"}
                                className="w-full h-full object-cover"
                              />
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                                <div>
                                  <h2 className="text-lg font-semibold text-white">
                                    {comment?.title}
                                  </h2>

                                  <p className="text-xs text-zinc-400 mt-1">
                                    {new Date(
                                      comment?.createdAt,
                                    ).toLocaleDateString()}
                                  </p>
                                </div>

                                <span className="w-fit px-3 py-1 rounded-full bg-[#E26D8D]/10 text-[#E26D8D] text-xs">
                                  {comment?.category}
                                </span>
                              </div>

                              <div className="mt-4 p-4 rounded-lg bg-black/20 border border-white/5">
                                <p className="text-xs uppercase tracking-wide text-zinc-500 mb-2">
                                  Your Comment
                                </p>

                                <p className="text-zinc-300 leading-relaxed">
                                  {comment?.comment}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        ))
                      )}

                      {userComment?.length === 0 && (
                        <div className="py-24 text-center">
                          <div className="w-20 h-20 mx-auto rounded-full bg-[#E26D8D]/10 flex items-center justify-center mb-5">
                            <span className="text-3xl">💬</span>
                          </div>

                          <h3 className="text-xl font-semibold text-white">
                            No Interactions Found
                          </h3>

                          <p className="text-zinc-400 mt-2">
                            You haven't commented on any ideas yet.
                          </p>

                          <Link
                            href="/"
                            className="inline-block mt-5 px-5 py-2 rounded-lg bg-[#E26D8D] hover:bg-pink-600 transition"
                          >
                            Explore Ideas
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default MyInteractions;
