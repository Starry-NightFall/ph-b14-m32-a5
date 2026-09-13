import { use, useState } from "react";
import type { Techs } from "../types/type";
import TechCard from "./TechCard";

interface TechCardsProps {
  technologiesPromise: Promise<Techs[]>;
}

export default function TechCards({ technologiesPromise }: TechCardsProps) {
  const technologies: Techs[] = use(technologiesPromise);
  const [addedItems, setAddedItems] = useState({});


  const toggleStack = (id: string) => {
    setAddedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="max-w-7xl md:col-span-4 mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {technologies.map((technology) => (
          <TechCard key={technology.id} tech={technology} toggleStack={toggleStack} addedItems={addedItems} />
        ))}
      </div>
    </section>
  );
}
