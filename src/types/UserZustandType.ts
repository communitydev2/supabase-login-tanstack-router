import type { User } from "./User";


export interface UserZustandType {
    user: User |null,


    setUser: (user:User) => void;
}