function Header() {
  return (
    <header className="text-white py-2 px-4">
      <nav className="flex flex-row h-12">
        <div className="text-3xl md:hidden">
          <button className="burger-menu flex absolute right-4 top-3">
            <i className="fa-solid fa-bars h-7"></i>
          </button>
        </div>
        <ul className="flex flex-col text-xl font-extrabold items-center mt-12 gap-5 md:mt-0 md:flex-row md:justify-center">
          <li>
            <a
              href="#About"
              className="border-b-2 rounded-sm p-2 border-[#00d1cd] hover:bg-[#00d1ceb4]"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#Skills"
              className="border-b-2 rounded-sm p-2 border-[#00d1cd] hover:bg-[#00d1ceb4]"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#Education"
              className="border-b-2 rounded-sm p-2 border-[#00d1cd] hover:bg-[#00d1ceb4]"
            >
              Education
            </a>
          </li>
          <li>
            <a
              href="#Contact"
              className="border-b-2 rounded-sm p-2 border-[#00d1cd] hover:bg-[#00d1ceb4]"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
