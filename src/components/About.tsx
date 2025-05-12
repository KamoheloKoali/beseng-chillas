
const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-beseng-lightGray">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="/lovable-uploads/0e64652e-0d42-4e7f-a50a-6773f7240da2.png" 
              alt="Beseng Chillas Logo" 
              className="w-2/3 md:w-3/4"
            />
          </div>
          
          <div className="md:w-1/2">
            <h2 className="section-title">About Beseng Chillas</h2>
            <p className="text-lg mb-6">
              Welcome to Beseng Chillas, where we combine three exceptional experiences under one roof. 
              Born from a passion for hospitality and service, we offer a unique blend of culinary delights, 
              professional car care, and a relaxing lounge atmosphere.
            </p>
            <p className="text-lg mb-6">
              Our restaurant serves mouthwatering meals crafted with fresh ingredients and authentic recipes. 
              While you dine, our skilled team can transform your vehicle with our professional car wash services. 
              And if you're looking to unwind, our lounge provides the perfect ambiance to relax and socialize.
            </p>
            <p className="text-lg mb-8">
              We take pride in creating a space where convenience meets quality, 
              ensuring every visit leaves you satisfied and eager to return.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-beseng-orange rounded-full flex items-center justify-center text-white text-xl font-bold">
                  7
                </div>
                <span className="text-lg font-medium">Days Open</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-beseng-orange rounded-full flex items-center justify-center text-white text-xl font-bold">
                  3
                </div>
                <span className="text-lg font-medium">Services</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-beseng-orange rounded-full flex items-center justify-center text-white text-xl font-bold">
                  1
                </div>
                <span className="text-lg font-medium">Amazing Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
