import {useRouter} from "next/navigation";

const ForgotPassword = () => {
  const router = useRouter();

  return <p className="mx-auto px-2 text-sm text-center text-primary hover:text-secondary transition-colors cursor-pointer" onClick={() => router.push("#")}>Forgot your password?</p>;
}

export default ForgotPassword;
