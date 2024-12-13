import React, { useEffect, useState } from "react";
import styles from "./NewArrival.module.css";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";

const NewArrival = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  useEffect(() => {
    const container = document.querySelector(`.${styles["sl-cards"]}`);

    const updateScrollState = () => {
      if (container) {
        const maxScroll = container.scrollWidth - container.offsetWidth;
        setMaxScroll(maxScroll);
        setScrollPosition(container.scrollLeft);
      }
    };

  
    if (container) {
      updateScrollState();
      container.addEventListener("scroll", updateScrollState);
    }

    // Cleanup event listener
    return () => {
      if (container) {
        container.removeEventListener("scroll", updateScrollState);
      }
    };
  }, []);

  const handleScroll = (direction) => {
    const container = document.querySelector(`.${styles["sl-cards"]}`);
    const cardWidth =
      container.querySelector(`.${styles["sl-card"]}`).offsetWidth + 16; // Card width + gap
    const maxScroll = container.scrollWidth - container.offsetWidth;

    if (direction === "prev" && scrollPosition > 0) {
      setScrollPosition((prev) => Math.max(prev - cardWidth, 0));
      container.scrollLeft -= cardWidth;
    } else if (direction === "next" && scrollPosition < maxScroll) {
      setScrollPosition((prev) => Math.min(prev + cardWidth, maxScroll));
      container.scrollLeft += cardWidth;
    }
  };

  const isPrevDisabled = scrollPosition === 0;
  const isNextDisabled = scrollPosition >= maxScroll;

  return (
    <>
      {/* New Arrivals */}
      <section className="my-12 lg:px-12 px-4">
        <div className="flex justify-center items-center mb-8 relative">
          <h1 className="text-[#0A4C36] lg:text-4xl text-2xl sm:text-3xl font-medium text-center">
            New Arrivals
          </h1>

          {/* Buttons */}
          <div className="absolute right-0 flex sm:gap-2 gap-[1px] lg:hidden">
            <button
              onClick={() => handleScroll("prev")}
              className={`w-8 h-8 flex items-center justify-center rounded-full bg-[#149253] ${
                !isPrevDisabled ? "text-yellow-400" : ""
              } ${styles["sl-button-icon-container"]}`}
              disabled={isPrevDisabled}
            >
              <GrLinkPrevious className={`${styles["sl-button-icon"]}`} />
            </button>

            <button
              onClick={() => handleScroll("next")}
              className={`w-8 h-8 flex items-center justify-center rounded-full bg-[#149253] ${
                !isNextDisabled ? "text-yellow-400" : ""
              } ${styles["sl-button-icon-container"]}`}
              disabled={isNextDisabled}
            >
              <GrLinkNext className={`${styles["sl-button-icon"]}`} />
            </button>
          </div>
        </div>

        {/* cards container */}
        <div className={`text-center ${styles["sl-cards"]}`}>
          {/* First Card */}
          <div
            className={`cursor-pointer overflow-hidden  ${styles["sl-card"]}`}
          >
            <img
              src="https://www.ugaoo.com/cdn/shop/files/1_6de529e9-d6e5-4ff4-b284-a6f07cbd218d.jpg"
              alt="Air Purifier"
              className="mb-2 transition-transform duration-300 hover:scale-[1.04]"
            />
            <div className={`${styles["sl-card-detail"]}`}>
              <p className={`text-xl ${styles["sl-card-detail-heading"]} pb-2`}>
                Mini Lite - Room Air Purifier
              </p>
              <div className="card-info-price-section flex flex-col justify-center">
                <p className="text-[#349655] lg:text-lg font-medium">
                  <span className="text-base">₹</span> 4,719
                </p>
                <div className="text-2xl leading-[1rem]">
                  <span
                    className="text-transparent ml-1"
                    style={{ WebkitTextStroke: "1.5px #FFB503" }}
                  >
                    ★
                  </span>
                  <span
                    className="text-transparent ml-1"
                    style={{
                      WebkitTextStroke: "1.5px #FFB503",
                    }}
                  >
                    ★
                  </span>
                  <span
                    className="text-transparent ml-1"
                    style={{
                      WebkitTextStroke: "1.5px #FFB503",
                    }}
                  >
                    ★
                  </span>
                  <span
                    className="text-transparent ml-1"
                    style={{
                      WebkitTextStroke: "1.5px #FFB503",
                    }}
                  >
                    ★
                  </span>
                  <span
                    className="text-transparent ml-1"
                    style={{
                      WebkitTextStroke: "1.5px #FFB503",
                    }}
                  >
                    ★
                  </span>
                </div>
              </div>
              <div className="bg-[#149253] text-white py-2 mt-3 text-sm font-medium rounded">
                ADD TO CART
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div
            className={`cursor-pointer overflow-hidden  ${styles["sl-card"]} relative`}
          >
            <p className="absolute bg-[#FED02F] w-14 top-2 left-2 z-10 font-light text-xs py-0.5 rounded-sm">
              -29%
            </p>
            <img
              src="https://www.ugaoo.com/cdn/shop/files/1_1_272eb665-c32e-4a56-983b-8005a02590d2.jpg"
              alt="Air Purifier"
              className="mb-2 transition-transform duration-300 hover:scale-[1.04]"
            />
            <div>
              <p className={`text-xl ${styles["sl-card-detail-heading"]} pb-2`}>
                Smart Life - Indoor Air Purifier
              </p>
              <div className="card-info-price-section flex flex-col justify-center">
                <p className="text-[#349655] lg:text-lg font-medium">
                  <span className="text-[#969696] line-through text-sm">
                    ₹ 24,999
                  </span>{" "}
                  <span className="text-base">₹</span> 17,999
                </p>
                <div className="text-2xl leading-[1rem]">
                  <span
                    className="text-transparent ml-1"
                    style={{ WebkitTextStroke: "1.5px #FFB503" }}
                  >
                    ★
                  </span>
                  <span
                    className="text-transparent ml-1"
                    style={{
                      WebkitTextStroke: "1.5px #FFB503",
                    }}
                  >
                    ★
                  </span>
                  <span
                    className="text-transparent ml-1"
                    style={{
                      WebkitTextStroke: "1.5px #FFB503",
                    }}
                  >
                    ★
                  </span>
                  <span
                    className="text-transparent ml-1"
                    style={{
                      WebkitTextStroke: "1.5px #FFB503",
                    }}
                  >
                    ★
                  </span>
                  <span
                    className="text-transparent ml-1"
                    style={{
                      WebkitTextStroke: "1.5px #FFB503",
                    }}
                  >
                    ★
                  </span>
                </div>
              </div>
              <div className="bg-[#149253] text-white py-2 mt-3 text-sm font-medium rounded">
                ADD TO CART
              </div>
            </div>
          </div>

          {/* Third Card */}
          <div
            className={`cursor-pointer overflow-hidden  ${styles["sl-card"]} relative`}
          >
            <p className="absolute bg-[#FED02F] w-14 top-2 left-2 z-10 font-light text-xs py-0.5 rounded-sm">
              -23%
            </p>
            <img
              src="https://www.ugaoo.com/cdn/shop/files/1_4a150359-ee97-4b51-a34a-5c3ca688d1a1.jpg"
              alt="Air Purifier"
              className="mb-2 transition-transform duration-300 hover:scale-[1.04]"
            />
            <div>
              <p className={`text-xl ${styles["sl-card-detail-heading"]} pb-2`}>
                Mini Classic - Air Purifier for Home
              </p>
              <div className="card-info-price-section flex flex-col justify-center">
                <p className="text-[#349655] lg:text-lg font-medium">
                  <span className="text-[#969696] line-through text-sm">
                    ₹ 6,489
                  </span>{" "}
                  <span className="text-base">₹</span> 4,999
                </p>
                <div className="text-2xl text-[#FFB503] leading-[1rem]">
                  <span className="ml-1">★</span>
                  <span className="ml-1">★</span>
                  <span className="ml-1">★</span>
                  <span className="ml-1">★</span>
                  <span className="ml-1">★</span>
                </div>
              </div>
              <div className="bg-[#149253] text-white py-2 mt-3 text-sm font-medium rounded">
                ADD TO CART
              </div>
            </div>
          </div>

          {/* Fourth Card */}
          <div
            className={`cursor-pointer overflow-hidden  ${styles["sl-card"]} relative`}
          >
            <p className="absolute bg-[#FED02F] w-14 top-2 left-2 z-10 font-light text-xs py-0.5 rounded-sm">
              SALE
            </p>
            <img
              src="https://www.ugaoo.com/cdn/shop/files/1_e87ec79e-3adc-4674-8d46-e3563e0309a9.jpg"
              alt="Plant"
              className="mb-2 transition-transform duration-300 hover:scale-[1.04]"
            />
            <div>
              <p className={`text-xl ${styles["sl-card-detail-heading"]} pb-2`}>
                Dieffenbachia Delilah - Large
              </p>
              <div className="card-info-price-section flex flex-col justify-center">
                <p className="text-[#349655] lg:text-lg font-medium">
                  <span className="text-[#969696] line-through text-sm">
                    ₹ 1,499
                  </span>{" "}
                  <span className="text-sm lg:text-lg">From </span>
                  <span className="text-base">₹</span> 999
                </p>
                <div className="text-2xl text-[#FFB503] leading-[1rem]">
                  <span className="ml-1">★</span>
                  <span className="ml-1">★</span>
                  <span className="ml-1">★</span>
                  <span className="ml-1">★</span>
                  <span className="ml-1">★</span>
                </div>
              </div>
              <div className="bg-[#149253] text-white py-2 mt-3 text-sm font-medium rounded">
                VIEW PRODUCT
              </div>
            </div>
          </div>
        </div>

        <div className="sl-cards-button my-8 flex justify-center">
          <button className="bg-[#149253] text-white font-medium rounded py-1.5 text-base w-52">
            VIEW ALL
          </button>
        </div>
      </section>
    </>
  );
};

export default NewArrival;
