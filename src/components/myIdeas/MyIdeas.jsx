"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MdEdit, MdDelete } from "react-icons/md";
import { authClient } from "@/lib/auth-client";
import UpdateIdeaModal from "./UpdateIdeaModal";

const MyIdeas = ({ myIdeas }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const userIdeas =
    myIdeas?.filter((idea) => idea?.userEmail === user?.email) || [];

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#140d0d] via-[#2a1618] to-[#120b0b] text-white py-28">
      <div className="w-10/12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-3">
            <div className="bg-[#241416]/80 border border-[#4D2A2F] rounded-lg backdrop-blur-xl p-5 sticky top-28">
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
                  href="/logout"
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
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-[#4D2A2F]">
                <div>
                  <h1 className="text-2xl font-bold">My Ideas</h1>

                  <p className="text-zinc-400 text-sm mt-1">
                    Manage your startup ideas
                  </p>
                </div>

                <Link
                  href="/add-idea"
                  className="px-4 py-2 rounded-lg bg-[#E26D8D] hover:bg-pink-600 transition"
                >
                  + Add New Idea
                </Link>
              </div>

              {/* Ideas List */}
              <div>
                {userIdeas?.map((idea, index) => (
                  <motion.div
                    key={idea._id}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.08,
                    }}
                    className="flex flex-col md:flex-row md:items-center gap-4 p-5 border-b border-[#4D2A2F] hover:bg-white/[0.03] transition"
                  >
                    {/* Image */}
                    <div className="relative w-full md:w-28 h-20 rounded-lg overflow-hidden">
                      <Image
                        src={idea?.imageUrl || "/placeholder.jpg"}
                        alt={idea?.title || "Idea"}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h2 className="font-semibold text-white">{idea.title}</h2>

                      <p className="text-xs text-zinc-400 mt-1">
                        {new Date(idea.createdAt).toLocaleDateString()}
                      </p>

                      <div className="flex flex-wrap gap-4 mt-2 text-xs text-zinc-500">
                        <span>📂 {idea.category}</span>

                        <span>💰 ${idea.budget}</span>

                        <span>🎯 {idea.audience}</span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                      {/* edit */}
                      <UpdateIdeaModal idea={idea} />

                      {/* delete */}
                      <button className="flex items-center gap-1 text-red-400 hover:text-red-300 transition">
                        <MdDelete />
                        Delete
                      </button>
                    </div>
                  </motion.div>
                ))}

                {userIdeas.length === 0 && (
                  <div className="py-20 text-center">
                    <h3 className="text-xl font-semibold text-white">
                      No Ideas Found
                    </h3>

                    <p className="text-zinc-400 mt-2">
                      Start by creating your first startup idea.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyIdeas;
