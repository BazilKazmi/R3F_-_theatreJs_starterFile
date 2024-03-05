import { create } from "zustand";


export const useOrbitEnable = create((set) => ({
  disabled: false,
  enableModel: () =>
    set(() => {
      return { disabled: true };
    }),
  DisableModel: () => set(() => ({ disabled: false })),
})); 