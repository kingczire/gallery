const About = () => {
  return (
    <section className="relative flex flex-col items-center justify-center md:flex-row gap-5 h-screen w-full">
      <div
        className="absolute h-screen bg-cover bg-no-repeat bg-center bg-fixed md:bg-scroll inset-0 -z-40 opacity-45"
        style={{ backgroundImage: "url('/about-bg.jpg')" }}
      />
      {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900 to-transparent md:from-black md:via-gray-700 md:to-transparent -z-40" /> */}

      <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-black -z-50" />
      <div className="">
        <h3 className="font-rubik">
          &#34;We are Science Titans formed on the day of greatness&#34;
        </h3>
        <p className="mt-10 text-xl font-cinzel font-bold italic">
          Aim for The Sky
        </p>
      </div>
      <div className="">
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
          quae!
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
          suscipit perferendis earum sunt ea, ut dicta inventore nemo obcaecati,
          aperiam atque? Accusantium laudantium culpa nobis.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus,
          ipsum!
        </p>
      </div>
    </section>
  );
};

export default About;
