import { create } from "zustand";
import type { UserZustandType } from "../types/UserZustandType";
import type { User } from "../types/User";
export const useAuthStore = create<UserZustandType>((set) => ({
    user : null,

    
    setUser: (user:User) => set(() => ({user})),

}));