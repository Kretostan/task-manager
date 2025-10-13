import PrimaryButton from "@/components/UI/PrimaryButton";
import OutlineButton from "@/components/UI/OutlineButton";

const Cta = () => {
  return <section className="w-screen bg-linear-to-br from-primary/10 to-secondary/10">
    <div className="flex flex-col gap-8 px-4 py-24 text-center">
      <h2 className="flex flex-col title-gradient text-4xl font-bold">Ready to Transform Your <span>Productivity?</span></h2>
      <p className="opacity-80">Join thousands of teams who trust TaskManager to manage their work efficiently</p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-sm md:text-base font-semibold">
        <PrimaryButton path="register" className="px-7 py-4 w-[20em] md:w-auto">Start Your Free Trial</PrimaryButton>
        <OutlineButton path="login" className="px-7 py-4 w-[20em] md:w-auto">Sign In to Your Account</OutlineButton>
      </div>
    </div>
  </section>;
}

export default Cta;
