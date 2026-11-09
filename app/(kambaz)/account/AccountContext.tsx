"use client";
import { createContext, useContext, useState, type ReactNode } from "react";
import { users as initialUsers } from "../database";

export type User = (typeof initialUsers)[number] & {
  password?: string; dob?: string;
};
export const emptyUser: User = {
  _id: "", username: "", firstName: "", lastName: "", role: "STUDENT", email: "",
};

type AccountValue = {
  currentUser: User | null;
  users: User[];
  signin: (username: string, password: string) => boolean;
  signup: (user: User) => void;
  updateProfile: (user: User) => void;
  signout: () => void;
};
const AccountContext = createContext<AccountValue | null>(null);
export function AccountProvider({ children }: { children: ReactNode }) {
  const [users, setUsers] = useState<User[]>(() => initialUsers.map((user) => ({ ...user })));
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  function signin(username: string, password: string) {
    const found = users.find((user) => user.username.toLowerCase() === username.trim().toLowerCase());
    // Course demo has no authentication server. Accept nonempty passwords for seed users.
    if (!found || !password.trim() || (found.password && found.password !== password)) return false;
    setCurrentUser(found);
    return true;
  }
  function signup(user: User) {
    setUsers((old) => [...old, user]);
    setCurrentUser(user);
  }
  function updateProfile(user: User) {
    setUsers((old) => old.map((entry) => entry._id === user._id ? user : entry));
    setCurrentUser(user);
  }
  return <AccountContext.Provider value={{ currentUser, users, signin, signup, updateProfile,
    signout: () => setCurrentUser(null) }}>{children}</AccountContext.Provider>;
}
export function useAccount() {
  const context = useContext(AccountContext);
  if (!context) throw new Error("AccountProvider is missing");
  return context;
}
