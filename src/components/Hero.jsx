import Button from "./ui/Button";

const Hero = () => {
  return (
    <section
      className="relative h-screen flex flex-col items-center justify-center bg-cover bg-fixed md:bg-scroll bg-right bg-no-repeat md:bg-center"
      style={{ backgroundImage: "url(./gallery/hero-bg.jpg)" }}
    >
      <div className="my-auto">
        <h1>
          Capture <br /> The Moments
        </h1>
        <h2 className="uppercase">With Science Titans | Czire The Great</h2>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-3 w-full my-20">
        <p>Contact me: 09222tutunogtunog</p>
        <div className="flex flex-col md:flex-row gap-5">
          <Button text="Sample 1" primary={true} className="mx-auto" />
          <Button text="Sample 2" className="mx-auto" />
        </div>
      </div>
      {/* <h1>Hero Section</h1> */}
    </section>
  );
};

export default Hero;
