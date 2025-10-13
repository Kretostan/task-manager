type FeatureCardProps = {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return <div className="relative bg-neutral/60 outline-1 outline-primary/10 rounded-3xl hover:outline-primary transition-colors overflow-hidden hover:shadow-xl shadow-primary/30 hover:transition-shadow">
    <div className="flex flex-col items-center gap-5 px-6 md:px-10 py-10 max-w-[24em] feature-card">
      <div className="p-4 bg-linear-to-br from-primary to-secondary text-3xl rounded-2xl">{icon}</div>
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="opacity-70">{description}</p>
    </div>
  </div>;
}

export default FeatureCard;
