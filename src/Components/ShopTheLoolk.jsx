import React from "react";

const ShopTheLoolk = () => {
  return (
    <>
      <section id="shop-the-look" className="my-12">
        <h1 className="text-[#0A4C36] lg:text-4xl text-2xl sm:text-3xl font-medium text-center mb-8">
          Shop The Look
        </h1>
        <div className="img-section relative ">
          <img
            src="https://www.ugaoo.com/cdn/shop/files/Sitout_Area_Final-2.jpg"
            alt="Plant"
            className="w-full xl:h-[80vh] lg:h-[70vh] sm:h-[60vh] h-[35vh] "
          />
          <a
            href=""
            className="bg-[#149253] py-1 px-2 rounded-sm text-xs absolute sm:bottom-6 bottom-4 left-1/2 translate-x-[-50%] text-white font-medium md:hidden"
          >
            SEE PRODUCTS
          </a>
        </div>
      </section>
    </>
  );
};

export default ShopTheLoolk;
