import {motion} from "framer-motion";

type CheckBoxProps = {
  children: React.ReactNode;
  name: string;
};

const Checkbox = ({ children, name }: CheckBoxProps) => {
  return <div className="flex items-center gap-3 text-text/60 cursor-pointer">
    <motion.input
      whileFocus={{
        boxShadow: "0px 5px 20px rgba(187, 134, 252)",
      }}
      type="checkbox" id={name} name={name} value="true" className="outline-2 outline-primary/30 focus:outline-primary transition-colors rounded text-sm   cursor-pointer " />
    <label htmlFor="rememberMe" className="text-sm cursor-pointer">{children}</label>
  </div>;
}

export default Checkbox;
