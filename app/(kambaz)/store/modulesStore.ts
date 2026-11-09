import { create } from "zustand";
import { modules as initialModules } from "../database";

export type Module = (typeof initialModules)[number];

type ModulesState = {
  modules: Module[];
  addModule: (module: Module) => void;
  updateModule: (module: Module) => void;
  deleteModule: (id: string) => void;
};

export const useModulesStore = create<ModulesState>((set) => ({
  modules: initialModules.map((module) => ({ ...module, lessons: [...module.lessons] })),
  addModule: (module) => set((state) => ({ modules: [...state.modules, module] })),
  updateModule: (module) => set((state) => ({
    modules: state.modules.map((item) => item._id === module._id ? module : item),
  })),
  deleteModule: (id) => set((state) => ({
    modules: state.modules.filter((module) => module._id !== id),
  })),
}));
