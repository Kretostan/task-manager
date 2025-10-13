import FeatureCard from "./FeatureCard";

const Features = () => {
  return <section id="features" className="flex justify-center bg-neutral/30 w-screen text-center">
    <div className="flex flex-col items-center gap-16 px-4 md:px-0 py-28 max-w-[1200px]">
      <div className="flex flex-col gap-8 px-3">
        <h2 className="title-gradient text-4xl font-bold">Powerful Features</h2>
        <h3 className="text-lg opacity-70">Everything you need to manage tasks efficiently and boost your team&apos;s productivity</h3>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-10">
        <FeatureCard icon="📋" title="Smart Task Organization" description="Organize tasks with priorities, categories, tags, and custom workflows. Never lose track of important deadlines again." />
        <FeatureCard icon="👥" title="Team Collaboration" description="Assign tasks, share progress, and communicate seamlessly. Built for teams that work better together." />
        <FeatureCard icon="📊" title="Progress Tracking" description="Visual progress bars, completion rates, and insightful analytics to keep your projects on track." />
        <FeatureCard icon="🔔" title="Smart Notifications" description="Get notified about important deadlines, updates, and changes. Stay informed without being overwhelmed." />
        <FeatureCard icon="📱" title="Cross-Platform Sync" description="Access your tasks anywhere, anytime. Perfect synchronization across desktop, mobile, and tablet devices." />
        <FeatureCard icon="🔒" title="Secure & Private" description="Enterprise-grade security with end-to-end encryption. Your data stays private and protected." />
      </div>
    </div>
  </section>;
}

export default Features;
