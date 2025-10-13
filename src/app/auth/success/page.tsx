"use client";
import {useEffect} from "react";
import {useRouter} from "next/navigation";
import {useSession} from "next-auth/react";

const AuthSuccess = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/dashboard");
    }
  }, [session, router]);

  return <div>
    Success
  </div>;
};

export default AuthSuccess;
