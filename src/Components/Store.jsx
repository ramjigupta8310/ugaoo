import React from "react";

const Logo = () => {
  return (
    <section className="bg-[#0F4C36] py-3">
      <div className="flex justify-center items-center md:gap-4 gap-2">
        {/* Text content */}
        <div className="">
          <p className="text-white font-bold md:text-2xl md:block hidden">
            Download The Ugaoo App!
          </p>

          <p className="text-white font-bold text-base md:hidden">Download App!</p>
        </div>

        {/* App Store Images */}
        <div className="flex gap-2">
          <div>
            <img
              src="https://www.ugaoo.com/cdn/shop/files/Desktop_Google_Play_Button_decbe13e-879c-43f6-ae59-d23224715246.png"
              alt="Play Store"
              className="w-20 sm:w-28 md:w-40"
            />
          </div>
          <div>
            <img
              src="https://www.ugaoo.com/cdn/shop/files/Desktop_App_Store_Button_fc5a2c57-76d5-4ca9-ac67-ed49bbe8f510.png?v=1727675922&width=360"
              alt="App Store"
              className="w-20 sm:w-28 md:w-40"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logo;
