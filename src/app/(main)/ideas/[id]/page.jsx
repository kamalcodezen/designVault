import IdeasDetails from "@/components/ideasPage/IdeasDetails";
import { getCommentsData, singleIdeaDataById } from "@/lib/data";


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

  const ideaData = await singleIdeaDataById(id);

  const userComment = await getCommentsData(id);

  return <IdeasDetails ideaData={ideaData} userComment={userComment} />;
};

export default IdeasDetailsPage;
