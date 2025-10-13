const AuthMessage = ({ children }: { children: React.ReactNode }) => {
  return <p className="px-4 py-3 text-warning-1 text-sm outline-1 outline-warning-1 bg-warning-1/10 rounded-lg">
    {children}
  </p>;
}

export default AuthMessage;
