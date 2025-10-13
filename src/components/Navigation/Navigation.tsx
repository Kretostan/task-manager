"use client";
import Image from "next/image";
import {useSession} from "next-auth/react";
import Title from "../UI/Title";
import AuthNavigation from "./AuthNavigation";
import UserNavigation from "./UserNavigation";

const Navigation = () => {
  const { data: session } = useSession();

  return <nav className="fixed top-0 flex justify-center items-center px-5 sm:px-10 py-5 h-[90px] w-screen border-b-1 border-primary/10 z-1000 backdrop-blur-lg bg-background">
    <div className="flex justify-between max-w-[1200px] w-full">
      <div className="flex justify-center items-center gap-2">
        <Image src="/logo.png" alt="Task Manager logo" height={42} width={42} />
        <Title className="hidden sm:block" />
      </div>
      {!session ? <AuthNavigation /> : <UserNavigation />}
    </div>
  </nav>
}

export default Navigation;
