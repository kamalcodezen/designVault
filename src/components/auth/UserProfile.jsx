"use client";

import AuthLoading from "@/app/(auth)/loading";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button, Card, Input } from "@heroui/react";
import { FaCamera, FaEnvelope, FaPhone, FaUser } from "react-icons/fa6";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const UserProfile = () => {
  const { data, isPending } = authClient.useSession();
  const user = data?.user;
  //   console.log(user);

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;

    await authClient.updateUser({
      image,
      name,
    });

    if (result?.data) {
      toast.success(`Profile Updated Successfully`);
    }

    if (result?.error) {
      toast.error("Something went wrong");
      //   toast.error(result.error.message);
    }
  };

  if (isPending) {
    return <AuthLoading />;
  }

  return (
    <section className="min-h-screen bg-[#140F11] py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-11/12 lg:w-8/12 mx-auto"
      >
        <Card className="rounded-[2rem] shadow-2xl overflow-hidden border border-white/10 bg-[#1B1416]">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Left Side */}
            <div className="bg-gradient-to-br from-[#1B1416] via-[#2B1E22] to-[#D95C78] p-10 flex flex-col items-center justify-center text-white relative">
              <div className="relative">
                <Avatar className="w-40 h-40 text-large ring-4 ring-[#FFF4F5]/20">
                  <Avatar.Image
                    className="absolute"
                    alt={user?.name?.charAt(0)}
                    src={user?.image || user?.name?.charAt(0)}
                    referrerPolicy="no-referrer"
                  />
                </Avatar>

                <button className="absolute bottom-2 right-2 bg-[#D95C78] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300">
                  <FaCamera />
                </button>
              </div>

              <div className="mt-8 text-center">
                <h2 className="text-3xl font-bold text-[#FFF4F5]">
                  {user?.name}
                </h2>

                <p className="text-[#FFF4F5]/70 mt-2">Startup Innovator</p>
              </div>

              <div className="mt-10 w-full bg-[#FFF4F5]/5 backdrop-blur-xl rounded-2xl p-5 space-y-4 border border-white/10">
                <div className="flex items-center gap-3">
                  <FaEnvelope />
                  <span>{user?.email}</span>
                </div>

                <div className="flex items-center gap-3">
                  <FaPhone />
                  <span>+91 9-05432000</span>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="lg:col-span-2 p-8 lg:p-12 bg-[#140F11]">
              <div className="mb-10">
                <h1 className="text-4xl font-bold text-[#FFF4F5]">
                  Update Profile
                </h1>

                <p className="text-[#FFF4F5]/60 mt-3">
                  Keep your personal details updated for a better experience.
                </p>
              </div>

              <form onSubmit={handleProfileSubmit} className="space-y-7">
                <Input
                  name="name"
                  label="Full Name"
                  placeholder="Enter your name"
                  size="lg"
                  variant="bordered"
                  radius="lg"
                  className="mr-4"
                />

                <Input
                  name="image"
                  label="Image Url"
                  placeholder="image url"
                  type="text"
                  size="lg"
                  variant="bordered"
                  radius="lg"
                  className="mr-4"
                />

                <div className="flex flex-wrap gap-4 pt-4">
                  <Button
                    type="submit"
                    className="relative overflow-hidden px-8 py-3 rounded-full bg-[#D95C78] text-white font-semibold group"
                  >
                    <span className="absolute inset-0 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r from-[#F29BAE] to-[#D95C78]"></span>

                    <span className="relative z-10">Save Changes</span>
                  </Button>

                  <Button
                    variant="bordered"
                    className="rounded-full px-8 py-3 font-medium border-white/10 text-[#FFF4F5] hover:bg-[#FFF4F5]/5"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </Card>
      </motion.div>
    </section>
  );
};

export default UserProfile;
