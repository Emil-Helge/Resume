import HrAnimation from './HrAnimation';

function About() {
  return (
    <>
      <div id="About" className="flex flex-col pl-5 pr-5 pt-5 gap-3 text-lg">
        <h1 className="text-4xl font-mono font-extrabold mb-2 first-letter:text-[#00d1cd]">
          About me
        </h1>
        <img
          src="/dist/images/CV-name-alt-logo.png"
          alt="Image with name and logo"
          className="w-40"
        />
        <h2 className="text-xl font-mono font-extrabold">
          Front End Developer Student
        </h2>
        <p className="md:w-2/3  scroll-animation-hidden">
          I am currently studying a two year program at Medieinstitutet in
          Gothenburg and aspiring to get to work as a{' '}
          <span className="text-[#00d1cd]">Front End Developer</span> in the
          coming years. I have had a genuine interest for web development for
          almost a decade now and am very eager to get to put all of my passion
          into practice and start to learn all the ins and outs that comes with
          the job. I have a strong drive to learn and experience new things and
          whenever challenges appear I am not one to shy away from them and that
          is a trait that I truly believe will be of great use in this business.
        </p>
        <p className="md:w-2/3  scroll-animation-hidden">
          I aspire to be up to date and familiar with the most frequently
          occuring frameworks such as{' '}
          <span className="text-[#00d1cd]">React JS</span>,{' '}
          <span className="text-[#00d1cd]">Next JS</span> &{' '}
          <span className="text-[#00d1cd]">Angular</span> in order to be able to
          adapt and adjust accordingly.
        </p>
      </div>
      <HrAnimation width="66%" />
    </>
  );
}

export default About;
