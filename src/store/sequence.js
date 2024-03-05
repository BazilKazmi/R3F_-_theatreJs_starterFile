import { create } from "zustand";


export const useSequence = create((set) => ({
  play: false,
  startSequence: () =>
    set(() => {
      return { play: true };
   })
}));