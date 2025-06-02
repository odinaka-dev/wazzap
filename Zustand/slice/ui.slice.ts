// "use client";

import { create } from "zustand";

// state types
interface FaqStore {
  openItem: string | null;
  toggle: (id: string) => void;
  isOpen: (id: string) => boolean;
}

// faq state change
export const useFaqStore = create<FaqStore>((set, get) => ({
  openItem: null,
  toggle: (id) => {
    const current = get().openItem;
    set({ openItem: current === id ? null : id });
  },
  isOpen: (id) => get().openItem === id,
}));

// other state change
