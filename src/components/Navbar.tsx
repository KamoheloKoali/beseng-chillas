
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-2xl shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="#" className="font-bold text-2xl text-beseng-orange">
            <img 
              src="https://0x9xypt1ix.ufs.sh/f/t4K2Ge5sLyAxbgSNZyWTNs2BRivj9oLa0pCmVYl3WbEMdhF8" 
              alt="Beseng Chillas Logo" 
              className="h-14 md:h-16" 
            />
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className={`font-medium hover:text-beseng-orange transition-colors ${isScrolled ? 'text-black' : 'text-white'} `}>About</a>
            <a href="#services" className={`font-medium hover:text-beseng-orange transition-colors ${isScrolled ? 'text-black' : 'text-white'}`}>Services</a>
            <a href="#menu" className={`font-medium hover:text-beseng-orange transition-colors ${isScrolled ? 'text-black' : 'text-white'}`}>Menu</a>
            <a href="#gallery" className={`font-medium hover:text-beseng-orange transition-colors ${isScrolled ? 'text-black' : 'text-white'}`}>Gallery</a>
            <a href="#contact" className={`font-medium hover:text-beseng-orange transition-colors ${isScrolled ? 'text-black' : 'text-white'}`}>Contact</a>
            {/* <a href="#booking" className="btn-primary">Book Now</a> */}
          </div>
          
          {/* Mobile Nav Button */}
          <button 
            className="md:hidden text-beseng-navy"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Nav Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg animate-fade-in">
            <div className="flex flex-col space-y-4 p-4">
              <a 
                href="#about" 
                className="font-medium hover:text-beseng-orange transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#services" 
                className="font-medium hover:text-beseng-orange transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#menu" 
                className="font-medium hover:text-beseng-orange transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Menu
              </a>
              <a 
                href="#gallery" 
                className="font-medium hover:text-beseng-orange transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </a>
              <a 
                href="#contact" 
                className="font-medium hover:text-beseng-orange transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
