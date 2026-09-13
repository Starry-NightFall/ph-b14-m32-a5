import type { Techs } from "../types/type";
import TechCard from "./TechCard";

interface TechCardsProps {
  technologies: Techs[];
  selectedTechnologies: Techs[];
  addToStack: (technology: Techs) => void;
}

export default function TechCards({ technologies, selectedTechnologies, addToStack }: TechCardsProps) {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {technologies.map((technology) => {
          const isAdded = selectedTechnologies.some((item) => item.id === technology.id);
          return <TechCard key={technology.id} tech={technology} addToStack={addToStack} isAdded={isAdded} />;
        })}
      </div>
    </section>
  );
}
