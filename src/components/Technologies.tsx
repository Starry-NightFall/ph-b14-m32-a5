import { Suspense, use, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import type { Techs } from "../types/type";
import TechCards from "./TechCards";
import TechStack from "./TechStack";

const fetchTechnologies = async (): Promise<Techs[]> => {
  const response = await fetch("/data.json");
  const data = await response.json();
  return data;
};

const technologiesPromise = fetchTechnologies();

const TechnologiesContent = () => {
  const technologies = use(technologiesPromise);
  const [selectedTechnologies, setSelectedTechnologies] = useState<Techs[]>([]);

  const addToStack = (technology: Techs) => {
    if (selectedTechnologies.some((item) => item.id === technology.id)) {
      toast.warning(`${technology.name} is already in your stack.`);
      return;
    }

    setSelectedTechnologies((currentStack) => [...currentStack, technology]);
    toast.success(`${technology.name} added to your stack.`);
  };

  const removeFromStack = (id: string) => {
    const technology = selectedTechnologies.find((item) => item.id === id);
    setSelectedTechnologies((currentStack) => currentStack.filter((item) => item.id !== id));
    if (technology) {
      toast.info(`${technology.name} removed from your stack.`);
    }
  };

  const removeAll = () => {
    setSelectedTechnologies([]);
    toast.info("Your stack has been cleared.");
  };

  return (
    <div className="grid gap-6 mt-4 lg:grid-cols-[minmax(0,1fr)_320px] items-start">
      <TechCards technologies={technologies} selectedTechnologies={selectedTechnologies} addToStack={addToStack} />
      <TechStack selectedTechnologies={selectedTechnologies} removeFromStack={removeFromStack} removeAll={removeAll} />
    </div>
  );
};

const Technologies = () => {
  return (
    <div id="technologies" className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-900">Technologies</h2>
      <Suspense fallback={<p className="py-12 text-center text-gray-600">Loading technologies...</p>}>
        <TechnologiesContent />
      </Suspense>
      <ToastContainer position="bottom-right" autoClose={2500} />
    </div>
  );
};

export default Technologies;
