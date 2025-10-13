const Divider = ({ children }: { children: React.ReactNode }) => {
  return <div className="relative flex items-center justify-center text-text/60 w-full text-center">
    <span className="separator z-20"></span>
    <p className="z-30 bg-neutral px-2">{children}</p>
  </div>;
}

export default Divider;
