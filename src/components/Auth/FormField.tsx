"use client";
import {type ChangeEvent, useState} from "react";
import {motion} from "framer-motion";

type FormFieldProps = {
  children: React.ReactNode;
  name: string;
  type: string;
  placeholder?: string;
  isPassword?: boolean;
  textarea?: boolean;
  className?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

const FormField = ({ children, name, type, placeholder = "", isPassword, textarea = false, className, ...props }: FormFieldProps) => {
  const [showPassword, setShowPassword] = useState<{ password: boolean, confirmPassword: boolean }>({
    password: false,
    confirmPassword: false,
  });

  if (textarea) {
    return <div className={`${isPassword && "relative"} flex flex-col gap-2 w-full`}>
      <label htmlFor={name} className="text-text/60 text-sm">{children}</label>
      <motion.textarea
        whileFocus={{
          boxShadow: "0px 5px 20px rgba(187, 134, 252)",
        }}
        id={name} name={name} placeholder={placeholder}
        className="bg-background px-4 py-3 min-h-[45px] max-h-[200px] outline outline-primary/30 focus:outline-primary transition-colors rounded-lg text-white" {...props} />
    </div>
  }

  return <div className={`${isPassword && "relative"} flex flex-col gap-2 w-full ${className}`}>
    <label htmlFor={name} className="text-text/60 text-sm">{children}</label>
    <motion.input
      whileFocus={{
        boxShadow: "0px 5px 20px rgba(187, 134, 252)",
      }}
      id={name} name={name} type={!isPassword ? type : (showPassword.password ? "text" : type)} {...props} placeholder={placeholder} autoComplete={isPassword ? "new-password" : "off"}
      className="bg-background px-4 py-3 outline outline-primary/30 focus:outline-primary transition-colors rounded-lg text-white" />
    {isPassword && <span
      className="show-pass"
      onClick={() => setShowPassword(prevState => {
        return {...prevState, password: !prevState.password};
      })}>
          {!showPassword.password ? "👁️" : "🙈"}
      </span>}
  </div>;
}

export default FormField;
