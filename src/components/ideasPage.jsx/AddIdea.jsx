"use client";

import { motion } from "framer-motion";
import { FaImage, FaLightbulb } from "react-icons/fa6";
import { toast } from "react-toastify";

const AddIdea = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const ideasData = Object.fromEntries(formData.entries());
    // Convert tags string to array
    ideasData.tags = ideasData.tags.split(",").map((tag) => tag.trim());

    
    try {
      const res = await fetch("http://localhost:8000/ideas", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(ideasData),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(" Idea submitted successfully!");
        // form.reset();
        // console.log(data, "after post");
      } else {
        toast.error("❌ Failed to submit idea");
      }
    } catch (error) {
      //   console.error(error);
      toast.error(" Something went wrong");
    }
  };

  return (
    <section className="min-h-screen bg-[#140F11] py-20">
      <div className="w-11/12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#1B1416] border border-white/10 rounded p-8 lg:p-10"
        >
          {/* Header */}
          <div className="mb-10">
            <h1 className="text-4xl font-semibold text-[#FFF4F5]">
              Add New Startup Idea
            </h1>

            <p className="text-[#FFF4F5]/60 mt-2">
              Share your innovative startup idea with the community
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Top Section */}
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left Preview */}
              <div className="lg:col-span-1">
                <div className="h-full bg-[#140F11] border border-white/10 rounded-2xl p-5">
                  <h3 className="text-[#FFF4F5] font-semibold mb-4">
                    Idea Preview
                  </h3>

                  <div className="h-[260px] rounded-xl border-2 border-dashed border-[#D95C78]/40 flex flex-col items-center justify-center">
                    <FaImage className="text-5xl text-[#D95C78]" />

                    <p className="text-[#FFF4F5]/60 mt-4 text-center">
                      Upload or paste image URL
                    </p>
                  </div>

                  <div className="grid grid-cols-4 gap-2 mt-4">
                    <div className="h-14 rounded bg-[#D95C78]/20"></div>
                    <div className="h-14 rounded bg-[#D95C78]/20"></div>
                    <div className="h-14 rounded bg-[#D95C78]/20"></div>
                    <div className="h-14 rounded border border-dashed border-[#D95C78]/40 flex items-center justify-center text-[#D95C78]">
                      +
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Form */}
              <div className="lg:col-span-2 space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm text-[#FFF4F5] mb-2 block">
                      Idea Title
                    </label>

                    <input
                      name="title"
                      type="text"
                      placeholder="Enter idea title"
                      className="w-full bg-[#140F11] border border-white/10 rounded-xl px-4 py-3 text-[#FFF4F5] outline-none focus:border-[#D95C78]"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-[#FFF4F5] mb-2 block">
                      Category
                    </label>

                    <select
                      name="category"
                      className="w-full bg-[#140F11] border border-white/10 rounded-xl px-4 py-3 text-[#FFF4F5] outline-none focus:border-[#D95C78]"
                    >
                      <option>Tech</option>
                      <option>AI</option>
                      <option>Health</option>
                      <option>Education</option>
                      <option>FinTech</option>
                      <option>ECommerce</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-sm text-[#FFF4F5] mb-2 block">
                    Image URL
                  </label>

                  <input
                    name="image"
                    type="text"
                    placeholder="https://example.com/image.jpg"
                    className="w-full bg-[#140F11] border border-white/10 rounded-xl px-4 py-3 text-[#FFF4F5] outline-none focus:border-[#D95C78]"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm text-[#FFF4F5] mb-2 block">
                      Estimated Budget
                    </label>

                    <input
                      name="budget"
                      type="text"
                      placeholder="$10,000"
                      className="w-full bg-[#140F11] border border-white/10 rounded-xl px-4 py-3 text-[#FFF4F5] outline-none focus:border-[#D95C78]"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-[#FFF4F5] mb-2 block">
                      Target Audience
                    </label>

                    <input
                      name="audience"
                      type="text"
                      placeholder="Students, Businesses..."
                      className="w-full bg-[#140F11] border border-white/10 rounded-xl px-4 py-3 text-[#FFF4F5] outline-none focus:border-[#D95C78]"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Descriptions */}
            <div>
              <label className="text-sm text-[#FFF4F5] mb-2 block">
                Short Description
              </label>

              <input
                name="shortDescription"
                type="text"
                placeholder="Enter short description"
                className="w-full bg-[#140F11] border border-white/10 rounded-xl px-4 py-3 text-[#FFF4F5] outline-none focus:border-[#D95C78]"
              />
            </div>

            <div>
              <label className="text-sm text-[#FFF4F5] mb-2 block">
                Detailed Description
              </label>

              <textarea
                name="detailedDescription"
                rows={5}
                placeholder="Describe your startup idea..."
                className="w-full bg-[#140F11] border border-white/10 rounded-xl px-4 py-3 text-[#FFF4F5] outline-none resize-none focus:border-[#D95C78]"
              />
            </div>

            <div>
              <label className="text-sm text-[#FFF4F5] mb-2 block">
                Problem Statement
              </label>

              <textarea
                name="statement"
                rows={4}
                placeholder="What problem are you solving?"
                className="w-full bg-[#140F11] border border-white/10 rounded-xl px-4 py-3 text-[#FFF4F5] outline-none resize-none focus:border-[#D95C78]"
              />
            </div>

            <div>
              <label className="text-sm text-[#FFF4F5] mb-2 block">
                Proposed Solution
              </label>

              <textarea
                name="solution"
                rows={4}
                placeholder="Explain your solution..."
                className="w-full bg-[#140F11] border border-white/10 rounded-xl px-4 py-3 text-[#FFF4F5] outline-none resize-none focus:border-[#D95C78]"
              />
            </div>

            <div>
              <label className="text-sm text-[#FFF4F5] mb-2 block">
                Tags (Optional)
              </label>

              <input
                name="tags"
                type="text"
                placeholder="AI, SaaS, Startup"
                className="w-full bg-[#140F11] border border-white/10 rounded-xl px-4 py-3 text-[#FFF4F5] outline-none focus:border-[#D95C78]"
              />
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center pt-4 border-t border-white/10">
              <div className="flex items-center gap-3 text-[#FFF4F5]/60">
                <FaLightbulb className="text-[#D95C78]" />
                <span>Bring your innovation to life</span>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  className="px-6 py-2.5 rounded border border-white/10 text-[#FFF4F5] cursor-pointer"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-8 py-2.5 rounded bg-[#D95C78] text-white hover:bg-[#c84b67] transition-all cursor-pointer"
                >
                  Submit Idea
                </button>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default AddIdea;
