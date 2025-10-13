const Stats = () => {
  return <section className="w-screen bg-primary/5">
    <div className="flex flex-col justify-center items-center py-24">
      <h3 className="">Sample data provided</h3>
      <div className="flex flex-col md:flex-row flex-wrap justify-around items-center gap-20 px-12 text-center">
        <div className="flex flex-col gap-4">
          <p className="text-4xl font-bold title-gradient">50K+</p>
          <p className="opacity-80">Active Users</p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-4xl font-bold title-gradient">1M+</p>
          <p className="opacity-80">Tasks Completed</p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-4xl font-bold title-gradient">99.9%</p>
          <p className="opacity-80">Uptime</p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center title-gradient">
            <p className="text-4xl font-bold">4.9</p>
            <span className="text-3xl">⭐</span>
          </div>
          <p className="opacity-80">User Rating</p>
        </div>
      </div>
    </div>
  </section>;
}

export default Stats;
