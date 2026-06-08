import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { MdEdit } from "react-icons/md";

const UpdateIdeaModal = ({ userIdeas }) => {
  const handleUpdate = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const updateData = Object.fromEntries(formData.entries());

    console.log(updateData, "updated idea");

    // update api call here
  };

  return (
    <Modal>
      <Button className="bg-[#E26D8D] hover:bg-pink-600 text-white">
        <MdEdit />
        Edit Idea
      </Button>

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
              <Surface variant="default" className="bg-transparent">
                <form
                  onSubmit={handleUpdate}
                  className="grid md:grid-cols-2 gap-4"
                >
                  <TextField name="title" variant="secondary">
                    <Label>Idea Title</Label>
                    <Input
                      defaultValue={userIdeas?.title}
                      placeholder="Idea Title"
                    />
                  </TextField>

                  <TextField name="category" variant="secondary">
                    <Label>Category</Label>
                    <Input
                      defaultValue={userIdeas?.category}
                      placeholder="Tech, AI, Health"
                    />
                  </TextField>

                  <TextField name="budget" variant="secondary">
                    <Label>Estimated Budget</Label>
                    <Input
                      defaultValue={userIdeas?.budget}
                      placeholder="$5000"
                    />
                  </TextField>

                  <TextField name="audience" variant="secondary">
                    <Label>Target Audience</Label>
                    <Input
                      defaultValue={userIdeas?.audience}
                      placeholder="Students"
                    />
                  </TextField>

                  <TextField
                    name="imageUrl"
                    variant="secondary"
                    className="md:col-span-2"
                  >
                    <Label>Image URL</Label>
                    <Input
                      defaultValue={userIdeas?.imageUrl}
                      placeholder="https://..."
                    />
                  </TextField>

                  <TextField
                    name="short-description"
                    variant="secondary"
                    className="md:col-span-2"
                  >
                    <Label>Short Description</Label>
                    <Input
                      defaultValue={userIdeas?.["short-description"]}
                      placeholder="Short Description"
                    />
                  </TextField>

                  <TextField
                    name="detailed-description"
                    variant="secondary"
                    className="md:col-span-2"
                  >
                    <Label>Detailed Description</Label>
                    <Input
                      defaultValue={userIdeas?.["detailed-description"]}
                      placeholder="Detailed Description"
                    />
                  </TextField>

                  <TextField
                    name="tags"
                    variant="secondary"
                    className="md:col-span-2"
                  >
                    <Label>Tags</Label>
                    <Input
                      defaultValue={userIdeas?.tags?.join(", ")}
                      placeholder="AI, Startup, Education"
                    />
                  </TextField>

                  <TextField
                    name="statement"
                    variant="secondary"
                    className="md:col-span-2"
                  >
                    <Label>Problem Statement</Label>
                    <Input
                      defaultValue={userIdeas?.statement}
                      placeholder="Problem Statement"
                    />
                  </TextField>

                  <TextField
                    name="solution"
                    variant="secondary"
                    className="md:col-span-2"
                  >
                    <Label>Proposed Solution</Label>
                    <Input
                      defaultValue={userIdeas?.solution}
                      placeholder="Proposed Solution"
                    />
                  </TextField>

                  <div className="md:col-span-2 flex justify-end gap-3 pt-4">
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
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default UpdateIdeaModal;
