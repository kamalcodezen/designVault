import IdeasDetails from "@/components/ideasPage/IdeasDetails";
import { auth } from "@/lib/auth";
import { getCommentsData, singleIdeaDataById } from "@/lib/data";
import { headers } from "next/headers";

// generateMetadata dynamic
export const generateMetadata = async ({ params }) => {
  const { id } = await params;

  const idea = await singleIdeaDataById(id);

  return {
    title: idea?.title || "Idea Details",
    description: idea?.["short-description"] || "Startup idea details page",
  };
};

const IdeasDetailsPage = async ({ params }) => {
  const { id } = await params;

  //jwt token generate
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const ideaData = await singleIdeaDataById(id, token);

  const userComment = await getCommentsData(id);

  return <IdeasDetails ideaData={ideaData} userComment={userComment} />;
};

export default IdeasDetailsPage;
