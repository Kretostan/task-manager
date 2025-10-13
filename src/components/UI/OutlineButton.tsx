"use client";
import {motion} from "framer-motion";
import {useRouter} from "next/navigation";

type OutlineButtonProps = {
  children: React.ReactNode;
  path: string;
  className?: string;
  onClick?: () => void;
};

const OutlineButton = ({ children, path, className, onClick }: OutlineButtonProps) => {
  const router = useRouter();

  return <motion.button
    type="button"
    initial={{ y: 0 }}
    whileHover={{
      y: -3,
      transition: { type: "tween" }
    }}
    onClick={() => {
      if(onClick) return onClick();
      if (path.includes("#")) {
        const element = document.getElementById(path.split("#")[1]);
        return element?.scrollIntoView({ behavior: "smooth" });
      }
      if (path.includes("-1")) return router.back();
      return router.push(path);
    }}
    className={`relative md:text-base bg-background outline-2 outline-primary/30 hover:outline-primary rounded-xl shine overflow-hidden cursor-pointer transition-colors hover:bg-primary/10 ${className}`}
  >
    {children}
  </motion.button>;
}

export default OutlineButton;
