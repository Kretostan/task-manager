"use client";
import {motion} from "framer-motion";
import {signOut} from "next-auth/react";
import {Session} from "next-auth";

const UserNavigation = ({ session }: { session: Session }) => {
  const name = session?.user?.name?.split(" ")[0];
  const firstLetter = name?.split("")[0];

  return <div className="flex items-center gap-4">
    <motion.div
      whileHover={{ borderColor: "var(--primary)" }}
      className="flex justify-center items-center gap-3 md:py-2 md:px-4 md:bg-neutral border-1 border-transparent rounded-4xl outline-none text-sm font-semibold">
      <p className="hidden md:block">Welcome back{", " + name}</p>
      <button className="h-10 w-10 bg-linear-to-br from-primary to-tertiary rounded-[50%] text-lg cursor-pointer">{firstLetter}</button>
    </motion.div>
    <motion.button
      whileHover={{ y: -2, backgroundColor: "var(--warning-1)", color: "#fff", boxShadow: "0 2px 10px var(--warning-1)" }}
      className="px-4 py-1.5 border-2 border-warning-1/40 rounded-lg text-warning-1 cursor-pointer"
      onClick={() => signOut({ callbackUrl: "/" })}>Logout</motion.button>
  </div>;
};

export default UserNavigation;
