import { create } from "zustand";


export const usePopUpModal = create((set) => ({
  show: false,
  showModal: () =>
    set(() => {
      return { show: true };
    }),
  closeModal: () => set(() => ({ show: false })),
}));