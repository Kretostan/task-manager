"use client";
import {type FormEvent, useState} from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import FormField from "./FormField";
import Checkbox from "./Checkbox";
import PrimaryButton from "../UI/PrimaryButton";
import AuthMessage from "@/components/Auth/AuthMessage";

const Form = () => {
  const [isValid, setIsValid] = useState<string | null>(null);
  const router = useRouter();

  const handleSignUp = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const jsonData = Object.fromEntries(formData.entries());
    try {
      const response = await axios.post("/api/auth/register", jsonData);
      if (response.status === 201) {
        router.push("/dashboard");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data?.error;
        setIsValid(errorMessage);
      } else {
        setIsValid("Unexpected error occurred.");
      }
    }
  }

  return <form onSubmit={handleSignUp} className="flex flex-col gap-6 w-full">
    {isValid !== null && <AuthMessage>{isValid}</AuthMessage>}
    <FormField name="name" type="text" placeholder="Enter your full name">
      Full Name
    </FormField>
    <FormField name="email" type="email" placeholder="Enter your email">
      Email Address
    </FormField>
    <FormField name="password" type="password" placeholder="Create a password" isPassword={true}>
      Password
    </FormField>
    <FormField name="confirmPassword" type="password" placeholder="Confirm your password" isPassword={true}>
      Confirm Password
    </FormField>
    {/* TODO: Red color if not checked on submit */}
    <Checkbox name="agreeTerms">
      I agree to the Terms of Service and Privacy Policy
    </Checkbox>
    <PrimaryButton className="py-3 w-full font-semibold">
      Create Account
    </PrimaryButton>
  </form>;
}

export default Form;
