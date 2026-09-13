import { X } from "lucide-react";
import type { Techs } from "../types/type";

interface TechStackProps {
  selectedTechnologies: Techs[];
  removeFromStack: (id: string) => void;
  removeAll: () => void;
}

const TechStack = ({ selectedTechnologies, removeFromStack, removeAll }: TechStackProps) => {
  return (
    <aside className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm lg:sticky lg:top-24">
      <div className="border-b border-gray-100 pb-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Your Stack</h2>
          <p className="text-sm text-gray-500">{selectedTechnologies.length} Technology Selected</p>
        </div>
      </div>

      {selectedTechnologies.length === 0 ? (
        <p className="py-10 text-center text-sm text-gray-500">Your stack is empty. Add technologies to get started.</p>
      ) : (
        <div className="space-y-3 pt-4">
          {selectedTechnologies.map((technology) => (
            <div key={technology.id} className="flex items-center gap-3 rounded-lg border border-gray-100 p-3">
              <img src={technology.icon} alt={`${technology.name} icon`} className="h-9 w-9 object-contain" />
              <div className="min-w-0 flex-1">
                <p className="truncate font-semibold text-gray-900">{technology.name}</p>
                <p className="text-xs text-gray-500">{technology.category}</p>
              </div>
              <button onClick={() => removeFromStack(technology.id)} className="rounded-md p-1 text-gray-400 hover:bg-red-50 hover:text-red-600" title={`Remove ${technology.name}`}>
                <X className="h-5 w-5" />
              </button>
            </div>
          ))}
          <button onClick={removeAll} className="mt-4 w-full rounded-lg border border-red-300 py-1.5 text-sm font-semibold text-red-600 transition-colors hover:bg-red-50" title="Remove all technologies">
            Remove All
          </button>
        </div>
      )}
    </aside>
  );
};

export default TechStack;
