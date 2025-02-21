import Logo from "./ui/Logo";

const Footer = () => {
  return (
    <section>
      <div className="flex md:flex-row flex-between text-lg flex-col gap-5 text-center">
        <div>
          <p>Design By: Czireosaurus</p>
          <p>Contact me: Don&apos;t me</p>
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem, ipsum dolor.</p>
        </div>
        <Logo />
      </div>
    </section>
  );
};

export default Footer;
