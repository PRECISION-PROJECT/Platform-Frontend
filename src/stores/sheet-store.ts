import { createSelectorFunctions } from "auto-zustand-selectors-hook";
import { create } from "zustand";

type TType = "navigation" | null;

export type ISheetStore = {
  type: TType;
  setType: (target: TType) => void;
};

const useSheetStore = create<ISheetStore>((set) => ({
  type: null,
  setType: (type) =>
    set(() => ({
      type,
    })),
}));

export const useIntersectionStore = createSelectorFunctions(useSheetStore);
