import { allIdeasData } from "@/lib/data";
import SearchIdea from "./SearchIdea";
import IdeaCard from "../shared/IdeaCard";

const AllIdeas = async () => {
  const ideas = await allIdeasData();

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#140d0d] via-[#2a1618] to-[#120b0b] text-white">
      <div className="w-10/12 mx-auto py-28">
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-12">
            {/* ── Search Bar ── */}
            <SearchIdea />

            {/* Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-10/12 mx-auto">
              {ideas?.map((idea, index) => (
                <IdeaCard key={idea._id} idea={idea} index={index} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-3 mt-10">
              <button className="w-10 h-10 rounded bg-pink-500">1</button>

              <button className="w-10 h-10 rounded bg-white/10">2</button>

              <button className="w-10 h-10 rounded bg-white/10">3</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllIdeas;
