"use client";
import { motion } from "framer-motion";
import {useRouter} from "next/navigation";
import {useSession} from "next-auth/react";
import Title from "@/components/UI/Title";
import Socials from "@/components/Auth/Socials";
import Divider from "@/components/Auth/Divider";
import Switcher from "@/components/Auth/Switcher";
import Login from "@/components/Auth/LoginForm";

const LoginPage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  if (session) return router.push("/dashboard");
  return <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="flex flex-col mb-30 bg-neutral rounded-2xl max-w-[26em] w-full overflow-hidden outline-1 outline-primary/20"
  >
    <div className="relative flex flex-col justify-center items-center gap-10 px-8 py-10 max-w-[28em] bg-neutral gradient-auth">
      <div className="flex flex-col gap-2 text-center">
        <Title />
        <p className="text-sm text-text/60">Organize your work, amplify your productivity</p>
      </div>
      <Switcher />
      <div className="flex flex-col gap-8 w-full">
        <Login />
        <Divider>or continue with</Divider>
        <Socials />
      </div>
    </div>
  </motion.div>
}

export default LoginPage;
