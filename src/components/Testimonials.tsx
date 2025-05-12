
const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      role: "Regular Customer",
      comment: "I love coming to Beseng Chillas! The food is amazing, and I can get my car washed while I enjoy my meal. Talk about convenience!",
      rating: 5,
    },
    {
      name: "Michael T.",
      role: "Weekend Visitor",
      comment: "Great atmosphere in the lounge, perfect for hanging out with friends. The burgers are incredible too!",
      rating: 5,
    },
    {
      name: "Linda K.",
      role: "Car Enthusiast",
      comment: "Their car wash service is top-notch. My car always looks brand new after they're done. And the waiting area is so comfortable.",
      rating: 4,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Customer Testimonials</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Don't just take our word for it - hear what our customers have to say about their experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-beseng-lightGray p-6 rounded-lg shadow-lg"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i}
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-beseng-orange' : 'text-gray-300'}`}
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path 
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" 
                      />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700">"{testimonial.comment}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
