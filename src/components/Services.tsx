
import { Car, Utensils, Music } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Services</h2>
          <p className="text-lg max-w-3xl mx-auto">
            We offer three exceptional services to make your visit complete.
            Enjoy great food, get your car cleaned, and relax in our lounge atmosphere.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Restaurant Service */}
          <div className="service-card flex flex-col items-center text-center">
            <div className="mb-6 w-20 h-20 rounded-full bg-beseng-orange/10 flex items-center justify-center text-beseng-orange">
              <Utensils size={40} />
            </div>
            <h3 className="text-2xl font-bold mb-3">Restaurant</h3>
            <p className="mb-6">
              Experience our delicious menu featuring local favorites and signature dishes. 
              From burgers to traditional meals, we have something for every taste bud.
            </p>
            <div className="grid grid-cols-2 gap-4 w-full mt-auto">
              <div className="bg-beseng-lightGray p-3 rounded-lg">
                <p className="font-bold">30+</p>
                <p className="text-sm">Menu Items</p>
              </div>
              <div className="bg-beseng-lightGray p-3 rounded-lg">
                <p className="font-bold">7-10 PM</p>
                <p className="text-sm">Peak Hours</p>
              </div>
            </div>
            <a href="#menu" className="btn-outline mt-6 w-full">View Menu</a>
          </div>
          
          {/* Car Wash Service */}
          <div className="service-card flex flex-col items-center text-center">
            <div className="mb-6 w-20 h-20 rounded-full bg-beseng-orange/10 flex items-center justify-center text-beseng-orange">
              <Car size={40} />
            </div>
            <h3 className="text-2xl font-bold mb-3">Car Wash</h3>
            <p className="mb-6">
              While you enjoy your meal, let us take care of your vehicle. 
              Our professional car wash services will make your car look brand new.
            </p>
            <div className="grid grid-cols-2 gap-4 w-full mt-auto">
              <div className="bg-beseng-lightGray p-3 rounded-lg">
                <p className="font-bold">5</p>
                <p className="text-sm">Wash Packages</p>
              </div>
              <div className="bg-beseng-lightGray p-3 rounded-lg">
                <p className="font-bold">30 min</p>
                <p className="text-sm">Average Time</p>
              </div>
            </div>
            <a href="#booking" className="btn-outline mt-6 w-full">Book Wash</a>
          </div>
          
          {/* Lounge Service */}
          <div className="service-card flex flex-col items-center text-center">
            <div className="mb-6 w-20 h-20 rounded-full bg-beseng-orange/10 flex items-center justify-center text-beseng-orange">
              <Music size={40} />
            </div>
            <h3 className="text-2xl font-bold mb-3">Lounge</h3>
            <p className="mb-6">
              Relax and socialize in our comfortable lounge area. 
              Enjoy drinks, music, and a vibrant atmosphere for the perfect hangout spot.
            </p>
            <div className="grid grid-cols-2 gap-4 w-full mt-auto">
              <div className="bg-beseng-lightGray p-3 rounded-lg">
                <p className="font-bold">Hookah</p>
                <p className="text-sm">Available</p>
              </div>
              <div className="bg-beseng-lightGray p-3 rounded-lg">
                <p className="font-bold">Weekend</p>
                <p className="text-sm">Live Events</p>
              </div>
            </div>
            <a href="#booking" className="btn-outline mt-6 w-full">Reserve Space</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
