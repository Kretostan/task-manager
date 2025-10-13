"use client";
import {motion} from "framer-motion";
import {useRouter} from "next/navigation";

type PrimaryButtonProps = {
  children: React.ReactNode;
  path?: string;
  className?: string;
};

const PrimaryButton = ({children, path, className}: PrimaryButtonProps) => {
  const router = useRouter();

  return <motion.button
    initial={{ y: 0 }}
    whileHover={{
      y: -3,
      boxShadow: "0px 10px 30px var(--primary)",
    }}
    onClick={() => path && router.push(path)}
    className={`relative md:text-base bg-linear-to-br from-primary to-secondary rounded-xl shine overflow-hidden cursor-pointer ${className}`}
  >
    {children}
  </motion.button>;
}

export default PrimaryButton;
