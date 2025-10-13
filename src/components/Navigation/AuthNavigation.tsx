import OutlineButton from "../UI/OutlineButton";
import PrimaryButton from "../UI/PrimaryButton";

const AuthNavigation = () => {
  return <div className="flex gap-4 text-sm font-semibold">
    <OutlineButton path="login" className="px-5 py-3">Sign In</OutlineButton>
    <PrimaryButton path="register" className="px-5 py-3">Get Started</PrimaryButton>
  </div>;
}

export default AuthNavigation;
