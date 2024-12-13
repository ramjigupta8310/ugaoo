import React, { useState } from "react";
import { IoPlayOutline } from "react-icons/io5";
import ReactPlayer from "react-player";
import styles from "./WhyUgao.module.css";

const WhyUgao = () => {
  const [isVideoPlaying, setVideoPlaying] = useState(false);

  const handleThumbnailClick = () => {
    setVideoPlaying(true);
  };
  return (
    <>
      {/* Benifits Section */}
      <div className="bg-[#EFF8F2]">
        <h1 className="text-[#0A4C36] lg:text-4xl text-2xl sm:text-3xl font-medium text-center pb-8 pt-10">
          Why Ugaoo
        </h1>

        <div className="flex justify-evenly pb-10 gap-x-2">
          <div className="flex flex-col justify-center items-center">
            <img
              src="https://www.ugaoo.com/cdn/shop/files/Packaging_2x_small_67a5f444-bdcc-4d0b-a3d1-8a5d31cff366_medium.png"
              className="w-12 pb-4"
              alt="Recyclable Packaging"
            />
            <p className="md:text-base text-sm font-medium text-center">
              Secure and Recyclable Packaging
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              src="https://www.ugaoo.com/cdn/shop/files/Returns_2x_small_0924bced-0e21-493e-8e74-922d93b34a53_medium.png"
              className="w-12 pb-4"
              alt="Replacement"
            />
            <p className="md:text-base text-sm font-medium text-center">
              Free Replacements if Damaged
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              src="https://www.ugaoo.com/cdn/shop/files/Pot_2x_small_5598237e-2d07-4270-a7bb-95482177c4e0_medium.png"
              className="w-12 pb-4"
              alt="Pots"
            />
            <p className="md:text-base text-sm font-medium text-center">
              Self-Watering Pots with Every Plant
            </p>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <section id="why-ugao">
        <div
          className="cursor-pointer group relative flex justify-center items-center w-full lg:h-[70vh] sm:h-[60vh] h-[35vh]"
          onClick={handleThumbnailClick}
        >
          {/* Thumbnail and Play Icon */}
          {!isVideoPlaying && (
            <>
              {/* Thumbnail */}
              <img
                src="https://www.ugaoo.com/cdn/shop/files/Untitled-1.jpg"
                alt="Video Thumbnail"
                className="w-full h-full sm:object-cover object-cover"
              />

              {/* Play Icon */}
              <div
                className={`absolute flex justify-center items-center w-16 h-16 bg-[rgba(0,0,0,0.6)] transition-all rounded-full duration-300 ease group-hover:scale-105 `}
              >
                <IoPlayOutline
                  className={`text-white w-8 h-8 transition-all duration-300 ease transform group-hover:scale-110 ${styles["icon-custom-stroke"]}`}
                />
              </div>
            </>
          )}

          {/* Video */}
          {isVideoPlaying && (
            <ReactPlayer
              url="https://www.youtube.com/watch?v=Xq2iDxLWgB0"
              playing
              width="100%"
              height="100%"
            />
          )}
        </div>
      </section>

      {/* Experience The Magic Section*/}
      <section className="my-8 flex flex-col items-center justify-center text-center">
        <h1 className="lg:text-4xl text-2xl sm:text-3xl font-light text-center py-6 ">
          Experience the magic of growing plants
        </h1>
        <p className="text-center md:w-[60%] w-[90%] opacity-90 text-base">
          Ugaoo is here to inspire you to have plants around you. To look at
          life in a very different way, helping you connect with nature. Each
          plant you buy is packed and shipped with care, from our 25-acre farm
          to your doorstep.
        </p>
      </section>

      {/* Plant Subscription */}
      <section className="bg-[#EFF8F2] py-12 md:px-16 px-4 my-12 flex md:flex-row flex-col xl:gap-24 md:gap-12 gap-6">
        <div className="xl:w-[50%] lg:w-[65%] md:w-[100%]">
          <img
            src="https://www.ugaoo.com/cdn/shop/files/Subscription_Stop_Motion.gif"
            alt="Plants"
            className="object-cover h-[65vh] w-full sm:h-[70vh]"
          />
        </div>
        <div className="flex flex-col justify-center items-center md:items-start">
          <h1 className="text-[#0A4C36] lg:text-4xl text-2xl sm:text-3xl font-light pb-2">
            Plant Subscriptions
          </h1>
          <p className="text-base opacity-90 text-center md:text-left">
            Receive a curated box of handpicked plants, packaged with care,
            every month.
          </p>
          <button className="bg-[#149253] text-white py-[10px] px-12 mt-3 text-sm font-medium rounded ">
            EXPLORE BOXES
          </button>
        </div>
      </section>

      {/* Rewards Section */}
      <section className="bg-[#EFF8F2] py-12 md:px-16 px-4 mb-4 flex md:flex-row flex-col xl:gap-24 md:gap-12 gap-6">
        <div className="flex flex-col justify-center  sm:items-start md:items-start items-center order-2 md:order-1">
          <h1 className="text-[#0A4C36] lg:text-4xl text-2xl sm:text-3xl font-light pb-2 sm:text-left text-center">
            Join our Plant Parent Rewards Club
          </h1>
          <p className="text-base opacity-90 sm:text-left text-center">
            Every plant purchase is a gift that keeps on giving. Earn coins and
            redeem them for exclusive discounts.
          </p>
          <div className="flex xl:flex-row sm:flex-col xl:gap-4 sm:gap-0 gap-4 sm:self-start">
            <button className="bg-[#149253] text-white py-[10px] sm:px-12 px-6 mt-3 sm:text-sm text-xs font-medium rounded">
              LEARN MORE
            </button>
            <button className="bg-[#149253] text-white py-[10px] sm:px-12 px-6 mt-3 sm:text-sm text-xs font-medium rounded ">
              REFER A FRIEND
            </button>
          </div>
        </div>
        <div className="xl:w-[60%] lg:w-[65%] md:w-[100%] order-1 md:order-2">
          <img
            src="https://www.ugaoo.com/cdn/shop/files/PPC.jpg"
            alt="Reward"
            className="object-cover h-[65vh] w-full sm:h-[70vh] xl:h-[80vh]"
          />
        </div>
      </section>

      {/* ABout Ugaoo */}
      <section className="flex flex-col items-center justify-center text-center mb-12">
        <h1 className="lg:text-4xl text-2xl sm:text-3xl font-light text-center py-6 ">
        About Ugaoo
        </h1>
        <p className="text-center xl:w-[75%] w-[90%] opacity-90 text-base">
        As India’s largest and most trusted online plant nursery and gardening store, Ugaoo is here to bring you only the best for all your gardening and plant needs. From exotic indoor plants for your homes to flowering plants and succulents for your ornamental gardens, we bring you all the plants you may want! We also specialize in the highest quality seeds, organic fertilizers, premium pots and planters, and garden tools for effective plant care. So, turn a new leaf and start your gardening journey with Ugaoo!
        </p>
      </section>
    </>
  );
};

export default WhyUgao;
