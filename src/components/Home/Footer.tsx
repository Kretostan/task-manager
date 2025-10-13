import Title from "../UI/Title";

const Footer = () => {
  const listItems = ["Features", "Pricing", "About", "Contact", "Privacy", "Terms"];

  return <footer className="flex flex-col justify-center items-center py-2 max-w-[1200px] w-full">
    <div className="flex flex-col justify-center items-center gap-8 py-10 text-center">
      <Title />
      <p className="px-4 text-text/60">Empowering teams worldwide to achieve more through better task management</p>
      <ul className="flex flex-col md:flex-row gap-8 text-text/70">
        {listItems.map((item, index) => <li className="hover:text-primary transition-colors cursor-pointer" key={index}>{item}</li>
        )}
      </ul>
    </div>
  </footer>;
}

export default Footer;
