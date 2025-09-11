import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-6xl rounded-2xl transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg"
          : "bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] shadow-md"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-white tracking-wide">
          AlphaPay
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link
            href="#"
            className="text-white/90 hover:text-white transition-colors"
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-white/90 hover:text-white transition-colors"
          >
            About
          </Link>
          <Link
            href="#"
            className="text-white/90 hover:text-white transition-colors"
          >
            Services
          </Link>
          <Link
            href="#"
            className="text-white/90 hover:text-white transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div
          className={`flex flex-col items-center space-y-4 py-6 ${
            scrolled
              ? "backdrop-blur-lg bg-white/10 border-t border-white/20"
              : "bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364]"
          }`}
        >
          <Link
            href="#"
            className="text-white/90 hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-white/90 hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="#"
            className="text-white/90 hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            href="#"
            className="text-white/90 hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}