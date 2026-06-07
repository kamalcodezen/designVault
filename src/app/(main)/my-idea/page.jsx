import MyIdeas from "@/components/myIdeas/MyIdeas";
import { allIdeasData } from "@/lib/data";

const MyIdeasPage = async () => {
  const myIdeas = await allIdeasData();

  // console.log(myIdeas, "my idea");

  return (
    <div className="min-h-screen">
      <MyIdeas myIdeas={myIdeas} />
    </div>
  );
};

export default MyIdeasPage;
