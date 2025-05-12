
const Menu = () => {
  return (
    <section id="menu" className="py-16 md:py-24 bg-beseng-navy text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Menu</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Discover our mouthwatering dishes crafted with passion and quality ingredients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-beseng-navy/50 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden flex flex-col h-full">
            <div className="h-64 relative">
              <img 
                src="/lovable-uploads/fa210e88-2eab-4f26-be26-811f6d01017d.png" 
                alt="Burger and fries" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-beseng-navy to-transparent"></div>
              <h3 className="text-2xl font-bold text-beseng-orange absolute bottom-4 left-6">Popular Combos</h3>
            </div>
            
            <div className="p-6 space-y-4 flex-grow">
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <div>
                  <h4 className="text-xl font-medium">Meat Combo & Fries</h4>
                  <p className="text-white/70">Tender meat with a side of crispy fries</p>
                </div>
                <div className="text-beseng-orange font-bold">M120</div>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <div>
                  <h4 className="text-xl font-medium">Meat Combo & Pap</h4>
                  <p className="text-white/70">Grilled meat served with traditional pap</p>
                </div>
                <div className="text-beseng-orange font-bold">M120</div>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <div>
                  <h4 className="text-xl font-medium">Twin Burgers, Wings & Fries</h4>
                  <p className="text-white/70">Double burger delight with wings and fries</p>
                </div>
                <div className="text-beseng-orange font-bold">M180</div>
              </div>
              <div className="mt-4">
                <a 
                  href="https://localbites.co.ls" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary inline-block"
                >
                  Order Now
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-beseng-navy/50 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden flex flex-col h-full">
            <div className="h-64 relative">
              <img 
                src="/lovable-uploads/b932b21c-fa12-45cc-888e-2f489b38e52f.png" 
                alt="Specialty sandwich" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-beseng-navy to-transparent"></div>
              <h3 className="text-2xl font-bold text-beseng-orange absolute bottom-4 left-6">Kota Stop</h3>
            </div>
            
            <div className="p-6 space-y-4 flex-grow">
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <div>
                  <h4 className="text-xl font-medium">Chips, Cheese, Lettuce, Russian</h4>
                  <p className="text-white/70">Classic kota with russian sausage</p>
                </div>
                <div className="text-beseng-orange font-bold">M40</div>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <div>
                  <h4 className="text-xl font-medium">Chips, Cheese, Lettuce, Eggs, Russian, Patty</h4>
                  <p className="text-white/70">Loaded kota with all the fixings</p>
                </div>
                <div className="text-beseng-orange font-bold">M70</div>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <div>
                  <h4 className="text-xl font-medium">Kota & Wings</h4>
                  <p className="text-white/70">Perfect combination of kota and chicken wings</p>
                </div>
                <div className="text-beseng-orange font-bold">M80</div>
              </div>
              <div className="mt-4">
                <a 
                  href="https://localbites.co.ls" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary inline-block"
                >
                  Order Now
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <a 
            href="https://localbites.co.ls" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary"
          >
            View Full Menu
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;
