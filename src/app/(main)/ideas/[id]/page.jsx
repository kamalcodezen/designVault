import IdeasDetails from "@/components/ideasPage.jsx/IdeasDetails";
import { getCommentsData, singleIdeaDataById } from "@/lib/data";

const IdeasDetailsPage = async ({ params }) => {
  const { id } = await params;

  const ideaData = await singleIdeaDataById(id);

  const userComment = await getCommentsData(id);

 
  return (
    <div>
      <IdeasDetails ideaData={ideaData} userComment={userComment} />
    </div>
  );
};

export default IdeasDetailsPage;
