
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
          ? 'bg-white/90 backdrop-blur-sm shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="#" className="font-bold text-2xl text-beseng-orange">
            <img 
              src="/lovable-uploads/0e64652e-0d42-4e7f-a50a-6773f7240da2.png" 
              alt="Beseng Chillas Logo" 
              className="h-14 md:h-16" 
            />
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="font-medium hover:text-beseng-orange transition-colors">About</a>
            <a href="#services" className="font-medium hover:text-beseng-orange transition-colors">Services</a>
            <a href="#menu" className="font-medium hover:text-beseng-orange transition-colors">Menu</a>
            <a href="#gallery" className="font-medium hover:text-beseng-orange transition-colors">Gallery</a>
            <a href="#contact" className="font-medium hover:text-beseng-orange transition-colors">Contact</a>
            <a href="#booking" className="btn-primary">Book Now</a>
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
              <a 
                href="#booking" 
                className="btn-primary text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
