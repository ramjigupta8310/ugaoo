import React from "react";

const BestPicks = () => {
  return (
    <>
      {/* Your Best Picks*/}
      <section className="my-12 lg:px-12 px-4">
        <h1 className="text-[#0A4C36] text-4xl font-medium text-center mb-8">
          Your Best Picks
        </h1>

        <div
          className={`place-items-center grid grid-cols-2 lg:grid-cols-4 text-center gap-6`}
        >
          {/* First Card */}
          <div className="group cursor-pointer w-full">
            <img
              src="https://www.ugaoo.com/cdn/shop/files/Generic_TIle_Images-03.jpg?v=1730694207&width=360"
              alt="Plants"
              className="mb-2 w-full"
            />
            <p className="text-xl relative inline-block">
              Plants
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#0A4C36] transition-all duration-300 group-hover:w-full"></span>
            </p>
          </div>

          {/* Second Card */}
          <div className="group cursor-pointer w-full">
            <img
              src="https://www.ugaoo.com/cdn/shop/files/Generic_TIle_Images-02_1.jpg?v=1730694221&width=360"
              alt="Seeds"
              className="mb-2 w-full"
            />
            <p className="text-xl relative inline-block">
              Seeds
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#0A4C36] transition-all duration-300 group-hover:w-full"></span>
            </p>
          </div>

          {/* Third Card */}
          <div className="group cursor-pointer w-full">
            <img
              src="https://www.ugaoo.com/cdn/shop/files/Generic_TIle_Images-04.jpg?v=1730694250&width=360"
              alt="Pots & Planters"
              className="mb-2 w-full"
            />
            <p className="text-xl relative inline-block">
              Pots & Planters
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#0A4C36] transition-all duration-300 group-hover:w-full"></span>
            </p>
          </div>

          {/* Fourth Card */}
          <div className="group cursor-pointer w-full">
            <img
              src="https://www.ugaoo.com/cdn/shop/files/Generic_TIle_Images-01.jpg?v=1730694264&width=360"
              alt="Plant Care"
              className="mb-2 w-full"
            />
            <p className="text-xl relative inline-block">
              Plant Care
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#0A4C36] transition-all duration-300 group-hover:w-full"></span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default BestPicks;
