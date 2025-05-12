
const Gallery = () => {
  const images = [
    {
      src: "/lovable-uploads/5d0e4564-22d8-4702-8084-6161ba1967cc.png",
      alt: "Delicious noodle dish"
    },
    {
      src: "/lovable-uploads/b932b21c-fa12-45cc-888e-2f489b38e52f.png",
      alt: "Specialty sandwich"
    },
    {
      src: "/lovable-uploads/fa210e88-2eab-4f26-be26-811f6d01017d.png",
      alt: "Burger meal with fries and wings"
    },
    {
      src: "/lovable-uploads/7fbd8137-5614-44ad-95c0-07e0e1963215.png",
      alt: "Loaded fries"
    },
    {
      src: "/lovable-uploads/4ad3e87f-3e31-472c-9fd5-637bb2ffe29d.png",
      alt: "Car wash service"
    },
    {
      src: "/lovable-uploads/5470a350-857c-4923-b706-6e3154c4753d.png", 
      alt: "Car washing"
    },
    {
      src: "/lovable-uploads/9aa74852-866a-42e3-b5f3-fc3f6a312066.png",
      alt: "Lounge seating area"
    },
    {
      src: "/lovable-uploads/f5a31056-93b6-46be-b5e6-8315a416aa26.png",
      alt: "Outdoor lounge area"
    },
    {
      src: "/lovable-uploads/3b6d7c29-ada3-4d96-b45b-f2721ffa4978.png",
      alt: "Lounge entertainment"
    },
    {
      src: "/lovable-uploads/181b4d27-cecd-4c6b-b0f8-8420de41eb7c.png", 
      alt: "Traditional meal"
    },
    {
      src: "/lovable-uploads/e14a19d7-00aa-4a22-91cb-f3c97e996280.png",
      alt: "Chicken and fries meal with salad"
    }
  ];

  return (
    <section id="gallery" className="py-16 md:py-24 bg-beseng-lightGray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Photo Gallery</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Take a visual tour of our establishment, our delicious food, car wash services, and lounge atmosphere.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div 
              key={index} 
              className={`overflow-hidden rounded-lg shadow-lg ${
                index === 0 ? 'col-span-2 row-span-2 md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                style={{ aspectRatio: index === 0 ? '4/3' : '1/1' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
