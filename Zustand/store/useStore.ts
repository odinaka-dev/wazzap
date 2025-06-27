import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

import { type AuthSlice, createAuthSlice } from "@/Zustand/slice/auth-slice";

export interface StoreSlice extends AuthSlice {}

export const useStore = create<StoreSlice>()(
  devtools(
    persist(
      (set, get, store) => ({
        ...createAuthSlice(set, get, store),
      }),
      {
        name: "store",
      }
    )
  )
);
