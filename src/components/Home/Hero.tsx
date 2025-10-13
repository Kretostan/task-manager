import OutlineButton from "@/components/UI/OutlineButton";
import PrimaryButton from "@/components/UI/PrimaryButton";
import HeroCard from "./HeroCard";

const Hero = () => {

  return <section className="flex flex-col items-center gap-16 max-w-[1200px] text-center">
    <div className="flex flex-col gap-8 py-2">
      <h2 className="flex flex-col hero-gradient text-5xl font-bold">
        Organize Your Work.
        <span>Amplify Your Productivity.</span>
      </h2>
      <h3 className="px-4 md:px-8 text-text/80 text-lg md:text-xl">The most intuitive task management platform that transforms chaos
        into clarity. Built for teams who demand excellence.</h3>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm font-semibold">
        <PrimaryButton path="register" className="px-7 py-4 w-[20em] md:w-auto">Start Free Today</PrimaryButton>
        <OutlineButton path="#features" className="px-7 py-4 w-[20em] md:w-auto">Explore Features</OutlineButton>
      </div>
    </div>
    <HeroCard />
  </section>;
}

export default Hero;
