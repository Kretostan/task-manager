const Footer = () => {
  const year = new Date().getFullYear();

  return <div className="px-3 py-5 md:py-4 w-full max-w-[1200px] border-t-1 border-primary/10 text-center">
    <p className="opacity-50">&copy;{year} TaskManager. All rights reserved. Built with passion for productivity.</p>
  </div>
}

export default Footer;
