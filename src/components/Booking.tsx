
import { useState } from 'react';
import { Utensils } from 'lucide-react';

const Booking = () => {
  return (
    <section id="booking" className="py-16 md:py-24 bg-gradient-to-br from-beseng-navy to-beseng-navy/70 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Make a Booking</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Reserve your table for a wonderful dining experience at Beseng Chillas.
          </p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/20 max-w-4xl mx-auto">
          <div className="mb-8 flex justify-center">
            <div className="bg-beseng-orange text-white rounded-md p-4 flex items-center justify-center gap-2">
              <Utensils size={20} />
              <span>Restaurant Booking</span>
            </div>
          </div>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-beseng-orange"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-beseng-orange"
                  placeholder="+266 63097111"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="date" className="block text-sm font-medium mb-2">Date</label>
                <input 
                  type="date" 
                  id="date" 
                  className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-beseng-orange"
                />
              </div>
              <div>
                <label htmlFor="time" className="block text-sm font-medium mb-2">Time</label>
                <input 
                  type="time" 
                  id="time" 
                  className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-beseng-orange"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="guests" className="block text-sm font-medium mb-2">Number of Guests</label>
              <input 
                type="number" 
                id="guests" 
                className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-beseng-orange"
                placeholder="2"
                min="1"
              />
            </div>
            
            <div>
              <label htmlFor="notes" className="block text-sm font-medium mb-2">Special Requests</label>
              <textarea 
                id="notes" 
                rows={3} 
                className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-beseng-orange"
                placeholder="Any special requests or notes..."
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="btn-primary w-full"
            >
              Confirm Booking
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Booking;
