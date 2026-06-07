import IdeasDetails from "@/components/ideasPage.jsx/IdeasDetails";
import { singleIdeaDataById } from "@/lib/data";

const IdeasDetailsPage = async ({ params }) => {
  const { id } = await params;
  //   console.log(id, "params");
  const ideaData = await singleIdeaDataById(id);
  //   console.log(ideaData,"single");
  return (
    <div>
      <IdeasDetails ideaData={ideaData} />
    </div>
  );
};

export default IdeasDetailsPage;
