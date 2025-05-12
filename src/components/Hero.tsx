
const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-beseng-navy/80 to-beseng-navy/60 z-10"></div>
      
      <div className="absolute inset-0">
        <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-2 h-full">
          <div className="col-span-1 row-span-1 overflow-hidden">
            <img 
              src="/lovable-uploads/5d0e4564-22d8-4702-8084-6161ba1967cc.png" 
              alt="Delicious food" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-1 row-span-1 overflow-hidden">
            <img 
              src="/lovable-uploads/4ad3e87f-3e31-472c-9fd5-637bb2ffe29d.png" 
              alt="Car wash service" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-1 row-span-1 overflow-hidden hidden md:block">
            <img 
              src="/lovable-uploads/9aa74852-866a-42e3-b5f3-fc3f6a312066.png" 
              alt="Lounge area" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-1 row-span-1 overflow-hidden">
            <img 
              src="/lovable-uploads/fa210e88-2eab-4f26-be26-811f6d01017d.png" 
              alt="Burger and fries" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-1 row-span-1 overflow-hidden">
            <img 
              src="/lovable-uploads/5470a350-857c-4923-b706-6e3154c4753d.png" 
              alt="Car washing" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-1 row-span-1 overflow-hidden hidden md:block">
            <img 
              src="/lovable-uploads/b932b21c-fa12-45cc-888e-2f489b38e52f.png" 
              alt="Specialty sandwich" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-20 text-center text-white">
        <div className="mb-8 flex justify-center animate-fade-in">
          <img 
            src="/lovable-uploads/0e64652e-0d42-4e7f-a50a-6773f7240da2.png" 
            alt="Beseng Chillas Logo" 
            className="h-32 md:h-40 mb-6"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
          Dine. Wash. Relax.
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 animate-fade-in-slow">
          Experience the perfect combination of delicious food, professional car care, and a relaxing lounge atmosphere.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 animate-fade-in-slow">
          <a href="#booking" className="btn-primary">Book Now</a>
          <a href="#services" className="btn-outline text-white border-white hover:bg-white hover:text-beseng-navy">Explore Services</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
