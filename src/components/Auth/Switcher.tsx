import {usePathname, useRouter} from "next/navigation";

const Switcher = () => {
  const router = useRouter();
  const pathname = usePathname();

  return <div className="p-1 w-full bg-background rounded-xl text-text/60">
    <button
      onClick={() => router.push("/login")}
      className={`py-3 w-1/2 text-sm rounded-lg cursor-pointer ${pathname === "/login" && "bg-linear-to-br from-primary to-secondary text-white"}`}
    >
      Sign In
    </button>
    <button
      onClick={() => router.push("/register")}
      className={`py-3 w-1/2 text-sm rounded-lg cursor-pointer ${pathname === "/register" && "bg-linear-to-br from-primary to-secondary text-white"}`}
    >
      Sign Up
    </button>
  </div>;
}

export default Switcher;
