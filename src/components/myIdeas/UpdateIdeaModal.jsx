"use client";

import { myIdeasUpdateData } from "@/lib/data";
import { Button, Label, Modal } from "@heroui/react";
import { useRouter } from "next/navigation";
import { MdEdit } from "react-icons/md";
import { toast } from "react-toastify";

const UpdateIdeaModal = ({ idea }) => {
  const router = useRouter();

  const { _id } = idea;

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.currentTarget);
      const updateData = Object.fromEntries(formData.entries());

      const result = await myIdeasUpdateData(_id, updateData);

      if (result.modifiedCount > 0) {
        toast.success("Idea Updated Successfully ✅");
        router.refresh();
      } else {
        toast.info("No changes were made.");
      }
    } catch (error) {
      // console.error(error);
      toast.error("Failed to update idea ❌");
    }
  };

  return (
    <Modal>
      <Modal.Trigger>
        <button className="flex items-center gap-1 text-red-400 hover:text-red-300 transition cursor-pointer">
          <MdEdit />
          Edit
        </button>
      </Modal.Trigger>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-4xl bg-gradient-to-br from-[#241416] via-[#2a1719] to-[#1a1012] border border-[#4D2A2F] text-white rounded-2xl overflow-hidden max-h-[90vh]">
            <Modal.CloseTrigger />

            <Modal.Header className="border-b border-[#4D2A2F]">
              <Modal.Icon className="bg-[#E26D8D]/20 text-[#E26D8D]">
                <MdEdit className="size-5" />
              </Modal.Icon>

              <div>
                <Modal.Heading>Update Startup Idea</Modal.Heading>

                <p className="mt-1 text-sm text-zinc-400">
                  Edit your startup idea details and save changes.
                </p>
              </div>
            </Modal.Header>

            <Modal.Body className="p-6 overflow-y-auto max-h-[70vh]">
              <form
                onSubmit={handleUpdate}
                className="grid md:grid-cols-2 gap-4"
              >
                <div>
                  <Label>Idea Title</Label>
                  <input
                    name="title"
                    defaultValue={idea?.title || ""}
                    className="w-full mt-1 px-3 py-2 rounded-lg bg-[#1B1012] border border-[#4D2A2F] text-white outline-none"
                  />
                </div>

                <div>
                  <Label>Category</Label>
                  <input
                    name="category"
                    defaultValue={idea?.category || ""}
                    className="w-full mt-1 px-3 py-2 rounded-lg bg-[#1B1012] border border-[#4D2A2F] text-white outline-none"
                  />
                </div>

                <div>
                  <Label>Budget</Label>
                  <input
                    name="budget"
                    defaultValue={idea?.budget || ""}
                    className="w-full mt-1 px-3 py-2 rounded-lg bg-[#1B1012] border border-[#4D2A2F] text-white outline-none"
                  />
                </div>

                <div>
                  <Label>Audience</Label>
                  <input
                    name="audience"
                    defaultValue={idea?.audience || ""}
                    className="w-full mt-1 px-3 py-2 rounded-lg bg-[#1B1012] border border-[#4D2A2F] text-white outline-none"
                  />
                </div>

                <div className="md:col-span-2">
                  <Label>Image URL</Label>
                  <input
                    name="imageUrl"
                    defaultValue={idea?.imageUrl || ""}
                    className="w-full mt-1 px-3 py-2 rounded-lg bg-[#1B1012] border border-[#4D2A2F] text-white outline-none"
                  />
                </div>

                <div className="md:col-span-2">
                  <Label>Short Description</Label>
                  <textarea
                    name="short-description"
                    defaultValue={idea?.["short-description"] || ""}
                    className="w-full mt-1 px-3 py-2 rounded-lg bg-[#1B1012] border border-[#4D2A2F] text-white outline-none"
                  />
                </div>

                <div className="md:col-span-2">
                  <Label>Detailed Description</Label>
                  <textarea
                    name="detailed-description"
                    defaultValue={idea?.["detailed-description"] || ""}
                    className="w-full mt-1 px-3 py-2 rounded-lg bg-[#1B1012] border border-[#4D2A2F] text-white outline-none"
                  />
                </div>

                <div className="md:col-span-2">
                  <Label>Tags</Label>
                  <input
                    name="tags"
                    defaultValue={
                      Array.isArray(idea?.tags)
                        ? idea.tags.join(", ")
                        : idea?.tags || ""
                    }
                    className="w-full mt-1 px-3 py-2 rounded-lg bg-[#1B1012] border border-[#4D2A2F] text-white outline-none"
                  />
                </div>

                <div className="md:col-span-2">
                  <Label>Problem Statement</Label>
                  <textarea
                    name="statement"
                    defaultValue={idea?.statement || ""}
                    className="w-full mt-1 px-3 py-2 rounded-lg bg-[#1B1012] border border-[#4D2A2F] text-white outline-none"
                  />
                </div>

                <div className="md:col-span-2">
                  <Label>Proposed Solution</Label>
                  <textarea
                    name="solution"
                    defaultValue={idea?.solution || ""}
                    className="w-full mt-1 px-3 py-2 rounded-lg bg-[#1B1012] border border-[#4D2A2F] text-white outline-none"
                  />
                </div>

                <div className="md:col-span-2 flex justify-end gap-3">
                  <Button slot="close" variant="secondary">
                    Cancel
                  </Button>

                  <Button
                    type="submit"
                    slot="close"
                    className="bg-[#E26D8D] hover:bg-pink-600 text-white"
                  >
                    Update Idea
                  </Button>
                </div>
              </form>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default UpdateIdeaModal;
