import { Star, Plus, Check } from "lucide-react";
import type { Techs } from "../types/type";

const TechCard = ({ tech, addToStack, isAdded }: { tech: Techs; addToStack: (technology: Techs) => void; isAdded: boolean }) => {
  return (
    <div key={tech.id} className="flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
      <div>
        <div className="flex items-start justify-between gap-2 mb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-50 p-2 border border-gray-100">
              <img src={tech.icon} alt={`${tech.name} icon`} className="h-full w-full object-contain" loading="lazy" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{tech.name}</h3>
              <span className="inline-block rounded-md bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700">{tech.category}</span>
            </div>
          </div>

          <span className="rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-700 border border-amber-200/60 shrink-0">{tech.badge}</span>
        </div>

        <p className="text-sm text-gray-600 mb-6 line-clamp-3">{tech.description}</p>
      </div>

      <div className="pt-4 border-t border-gray-100">
        <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
          <span className="font-medium text-gray-700 bg-gray-100 px-2 py-1 rounded">{tech.difficulty}</span>

          <div className="flex items-center gap-1 font-semibold text-gray-900">
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            <span>{tech.rating}</span>
          </div>
        </div>

        <button disabled={isAdded} onClick={() => addToStack(tech)} className={`w-full flex items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-medium transition-colors ${isAdded ? "bg-emerald-50 text-emerald-700 border border-emerald-200 cursor-not-allowed" : "bg-gray-900 text-white hover:bg-gray-800"}`}>
          {isAdded ? (
            <>
              <Check className="h-4 w-4" /> Added to Stack
            </>
          ) : (
            <>
              <Plus className="h-4 w-4" /> Add to Stack
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default TechCard;
