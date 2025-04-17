
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white py-4 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-heading font-bold text-nova-darkgray">
            Nova<span className="text-nova-blue">Tech</span>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-nova-mediumgray hover:text-nova-blue transition-colors font-medium">
            Home
          </a>
          <a href="#services" className="text-nova-mediumgray hover:text-nova-blue transition-colors font-medium">
            Services
          </a>
          <a href="#about" className="text-nova-mediumgray hover:text-nova-blue transition-colors font-medium">
            About
          </a>
          <a href="#process" className="text-nova-mediumgray hover:text-nova-blue transition-colors font-medium">
            Process
          </a>
          <a href="#testimonials" className="text-nova-mediumgray hover:text-nova-blue transition-colors font-medium">
            Testimonials
          </a>
          <a href="#contact" className="text-nova-mediumgray hover:text-nova-blue transition-colors font-medium">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-nova-darkgray p-2 focus:outline-none"
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 absolute top-full left-0 right-0 shadow-md animate-fade-in">
          <div className="flex flex-col space-y-4">
            <a 
              href="#home" 
              className="text-nova-mediumgray hover:text-nova-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#services" 
              className="text-nova-mediumgray hover:text-nova-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#about" 
              className="text-nova-mediumgray hover:text-nova-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#process" 
              className="text-nova-mediumgray hover:text-nova-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Process
            </a>
            <a 
              href="#testimonials" 
              className="text-nova-mediumgray hover:text-nova-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              className="text-nova-mediumgray hover:text-nova-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
