import MyIdeas from "@/components/myIdeas/MyIdeas";
import { allIdeasData } from "@/lib/data";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

export const metadata = {
  title: "My Ideas | IdeaVault",
  description: "Manage your startup ideas",
};

const MyIdeasPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  const ideas = await allIdeasData();

  const userIdeas = ideas?.filter((idea) => idea?.userId === user?.id) || [];

  return (
    <div className="min-h-screen">
      <MyIdeas userIdeas={userIdeas} />
    </div>
  );
};

export default MyIdeasPage;
