import { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-blue-500/10 ${
        scrolled
          ? "bg-[#020617]/95 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">

        <h1 className="text-3xl font-bold text-white">
          BEPETA <span className="text-blue-500">LOGICX</span>
        </h1>

        <ul className="hidden md:flex gap-14 text-white font-medium">
          <li className="hover:text-blue-400 cursor-pointer">Home</li>
          <li className="hover:text-blue-400 cursor-pointer">About</li>
          <li className="hover:text-blue-400 cursor-pointer">Services</li>
          <li className="hover:text-blue-400 cursor-pointer">Technology</li>
          <li className="hover:text-blue-400 cursor-pointer">Contact</li>
        </ul>

      <button className="bg-blue-600/80 hover:bg-blue-500/90 backdrop-blur-md transition px-5 py-2 rounded-xl text-sm leading-none text-white font-medium border border-white/10 shadow-md shadow-blue-500/10">
  Get In Touch
</button>

      </div>
    </nav>
  );
}

export default Navbar;