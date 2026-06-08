import MyInteractions from "@/components/myInteraction/MyInteractions";
import { auth } from "@/lib/auth";
import { userCommentData } from "@/lib/data";
import { headers } from "next/headers";

const MyInteractionsPage = async () => {
  const data = await auth.api.getSession({
    headers: await headers(),
  });
  const userId = data?.user?.id;

  const userComment = await userCommentData(userId);

  return (
    <div className="min-h-screen">
      <MyInteractions userComment={userComment} />
    </div>
  );
};

export default MyInteractionsPage;
