import type { Techs } from "../types/type";
import TechCards from "./TechCards";
import TechStack from "./TechStack";

const Technologies = () => {
  const technologiesPromise = async (): Promise<Techs[]> => {
    const res = await fetch("/technologies.json");
    const technologies = await res.json();
    return technologies;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 ">
      <h2 className="text-2xl font-bold text-gray-900">Technologies</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-4">
        <TechCards technologiesPromise={technologiesPromise()} />
        <TechStack />
      </div>
    </div>
  );
};

export default Technologies;
