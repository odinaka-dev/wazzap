import { StateCreator } from "zustand";

import { RegisterUsers, UserLoginData } from "@/types/auth";

export interface AuthSlice {
  isLoggedIn: boolean;
  user: RegisterUsers | null;
  users: UserLoginData | null;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  setUser: (user: RegisterUsers | null) => void;
  setUsers: (users: UserLoginData | null) => void;
  resetAuth: () => void;
}

export type AuthState = {
  isLoggedIn: boolean;
  user: RegisterUsers | null;
  users: UserLoginData | null;
};

export const defaultAuthState: AuthState = {
  isLoggedIn: false,
  user: null,
  users: null,
};

export const createAuthSlice: StateCreator<AuthSlice> = (set) => ({
  ...defaultAuthState,
  setIsLoggedIn: (isLoggedIn: boolean) => set({ isLoggedIn }),
  setUser: (user: RegisterUsers | null) => set({ user }),
  setUsers: (users: UserLoginData | null) => set({ users }),
  resetAuth: () => set(defaultAuthState),
});
