import { create } from "zustand";

const text = " hidden relative  top-20"

const  textvisible  = "  relative  top-20"

export const useButton = create((set) => ({
  ButtonVisible: {text},
  visibleON: () =>
    set(() => {
      return { ButtonVisible:textvisible };
    }),
}));