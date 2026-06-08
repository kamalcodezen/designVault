"use client";

import {useState } from "react";
import SearchIdea from "./SearchIdea";
import IdeaCard from "../shared/IdeaCard";

const AllIdeas = ({ initialIdeas }) => {
  const [ideas, setIdeas] = useState(initialIdeas);

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#140d0d] via-[#2a1618] to-[#120b0b] text-white">
      <div className="w-10/12 mx-auto py-28">
        <SearchIdea setIdeas={setIdeas} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-10/12 mx-auto">
          {ideas?.map((idea, index) => (
            <IdeaCard key={idea._id} idea={idea} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllIdeas;
