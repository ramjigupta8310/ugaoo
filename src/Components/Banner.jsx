import React, { useState, useEffect } from 'react';

const Banner = () => {
  const images = [
    'https://www.ugaoo.com/cdn/shop/files/4_7_cb408561-77e3-4809-8a94-7eead1fc0191.jpg?v=1731045556&width=1500',
    'https://www.ugaoo.com/cdn/shop/files/4_1_e72e9d7f-d12a-42ad-bdf0-f4d7327f14f7.jpg?v=1731047138&width=1500',
    'https://www.ugaoo.com/cdn/shop/files/1_1_340a8481-2049-49b7-9d4f-b1239abcb1a4.jpg?v=1731047088&width=1500',
    'https://www.ugaoo.com/cdn/shop/files/3_1_c9b66850-a02a-4b25-89c6-d7d2b003eea7.jpg?v=1731047163&width=1500',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden mt-12">
      {/* Carousel Images */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div className="flex-shrink-0 w-full" key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full sm:h-80 md:h-96 lg:h-[500px] object-cover"
            />
          </div>
        ))}
      </div>

      {/* "Shop Now" Button */}
      <button className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-700 text-white py-2 px-6 rounded-md hover:bg-green-500 transition duration-300 ease-in-out">
        Shop Now
      </button>
    </section>
  );
};

export default Banner;
