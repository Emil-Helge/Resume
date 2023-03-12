function Contact() {
  return (
    <>
      <div
        id="Contact"
        className="flex flex-col pl-5 pr-5 pt-5 gap-3 items-center"
      >
        <h1 className="text-4xl text-center font-mono font-extrabold mb-2 first-letter:text-[#00d1cd]">
          Contact
        </h1>
        <img
          src="/dist/images/Selfie.jpg"
          alt="Picture of me"
          className="w-44 border-y-4 rounded-full border-[#00d1ce88]"
        />
        <p className="text-center max-w-xl scroll-animation-hidden">
          If you would like to get in touch with me or learn more about me you
          can visit my Linkedin page or send me an email by clicking the icons
          below. Additionally, if you are curious about my previous projects and
          want to know what I am currently working on you can also visit my
          Github page.
        </p>
        <div className="icon-container w-full flex gap-4 justify-center mt-3 mb-7">
          <a
            href="https://www.linkedin.com/in/emil-helgesson94/"
            target="_blank"
            id="linkedinIcon"
            className="fa-brands fa-linkedin fa-3x opacity-60 hover:opacity-100 hover:text-[#00d1cd]"
          ></a>
          <a
            href="https://github.com/Emil-Helge"
            target="_blank"
            id="githubIcon"
            className="fa-brands fa-square-github fa-3x opacity-60 hover:opacity-100 hover:text-[#00d1cd]"
          ></a>
          <a
            href="mailto:emil.helgesson@medieinstitutet.se"
            target="_blank"
            id="emailIcon"
            className="fa-solid fa-square-envelope fa-3x opacity-60 hover:opacity-100 hover:text-[#00d1cd]"
          ></a>
        </div>
      </div>
    </>
  );
}

export default Contact;
