import React from "react";

const Swipper = () => {
  return (
    <section className="w-full my-16 px-8">
      <div
        className={`overflow-auto flex xl:justify-around xl:gap-0 sm:gap-20 gap-4`}
        style={{
          scrollbarColor: "rgb(15, 76, 54) transparent",
        }}
      >
        <div className="flex-shrink-0 text-center">
          <img
            className="md:w-36 md:h-36 sm:w-28 sm:h-28 w-20 h-20 object-cover rounded-full mx-auto"
            src="https://www.ugaoo.com/cdn/shop/files/1_copy.jpg"
            alt="Plants"
          />
          <p className="md:text-[1.2rem] text-[1rem] font-[400] my-4">
            Best Seller
          </p>
        </div>
        <div className="flex-shrink-0 text-center">
          <img
            className="md:w-36 md:h-36 sm:w-28 sm:h-28 w-20 h-20 object-cover rounded-full mx-auto"
            src="https://www.ugaoo.com/cdn/shop/files/2_copy.jpg"
            alt="Plants"
          />
          <p className="md:text-[1.2rem] text-[1rem] font-[400] my-4">
            Easy to Care
          </p>
        </div>
        <div className="flex-shrink-0 text-center">
          <img
            className="md:w-36 md:h-36 sm:w-28 sm:h-28 w-20 h-20 object-cover rounded-full mx-auto"
            src="https://www.ugaoo.com/cdn/shop/files/3_copy.jpg"
            alt="Plants"
          />
          <p className="md:text-[1.2rem] text-[1rem] font-[400] my-4">
            XL Plants
          </p>
        </div>
        <div className="flex-shrink-0 text-center">
          <img
            className="md:w-36 md:h-36 sm:w-28 sm:h-28 w-20 h-20 object-cover rounded-full mx-auto"
            src="https://www.ugaoo.com/cdn/shop/files/4_copy.jpg"
            alt="Pots"
          />
          <p className="md:text-[1.2rem] text-[1rem] font-[400] my-4">
            Ceramic Pots
          </p>
        </div>
        <div className="flex-shrink-0 text-center">
          <img
            className="md:w-36 md:h-36 sm:w-28 sm:h-28 w-20 h-20 object-cover rounded-full mx-auto"
            src="https://www.ugaoo.com/cdn/shop/files/1_copy.jpg"
            alt="Seeds"
          />
          <p className="md:text-[1.2rem] text-[1rem] font-[400] my-4">
            Vegetable Seeds
          </p>
        </div>
        <div className="flex-shrink-0 text-center">
          <img
            className="md:w-36 md:h-36 sm:w-28 sm:h-28 w-20 h-20 object-cover rounded-full mx-auto"
            src="https://www.ugaoo.com/cdn/shop/files/5_copy.jpg"
            alt="Fertilisers"
          />
          <p className="md:text-[1.2rem] text-[1rem] font-[400] my-4">
            Fertilisers
          </p>
        </div>
      </div>
    </section>
  );
};

export default Swipper;
