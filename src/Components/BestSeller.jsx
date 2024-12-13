import React, { useEffect, useState } from "react";
import styles from "./BestSeller.module.css";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";

const BestSeller = () => {
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

    // Initialize max scroll and set event listener for scroll
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
      {/* Best Seller */}
      <section className="my-12 lg:px-12 px-4">
        <div className="flex justify-center items-center mb-8 relative">
          <h1 className="text-[#0A4C36] lg:text-4xl text-2xl sm:text-3xl font-medium text-center">
            Bestsellers
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
            className={`cursor-pointer overflow-hidden  ${styles["sl-card"]} relative`}
          >
            <p className="absolute bg-[#FED02F] w-14 top-2 left-2 z-10 font-light text-xs py-0.5 rounded-sm">
              SALE
            </p>
            <img
              src="https://www.ugaoo.com/cdn/shop/files/1_f3594aff-28ef-447a-92e2-320c5ae5b937.jpg"
              alt="Plant"
              className="mb-2 transition-transform duration-300 hover:scale-[1.04]"
            />
            <div className={`${styles["sl-card-detail"]}`}>
              <p className={`text-xl ${styles["sl-card-detail-heading"]} pb-2`}>
                Brazilian Wood Plant
              </p>
              <div className="card-info-price-section flex flex-col justify-center">
                <p className="text-[#349655] lg:text-lg font-medium">
                  <span className="text-[#969696] line-through text-sm">
                    ₹ 1,999
                  </span>{" "}
                  <span className="text-sm lg:text-lg">From </span>
                  <span className="text-base">₹</span> 499
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

          {/* Second Card */}
          <div
            className={`cursor-pointer overflow-hidden  ${styles["sl-card"]} relative`}
          >
            <p className="absolute bg-[#FED02F] w-14 top-2 left-2 z-10 font-light text-xs py-0.5 rounded-sm">
              SALE
            </p>
            <img
              src="https://www.ugaoo.com/cdn/shop/files/Smallpot-164.jpg"
              alt="Plant"
              className="mb-2 transition-transform duration-300 hover:scale-[1.04]"
            />
            <div>
              <p className={`text-xl ${styles["sl-card-detail-heading"]} pb-2`}>
                Peace Lily Plant
              </p>
              <div className="card-info-price-section flex flex-col justify-center">
                <p className="text-[#349655] lg:text-lg font-medium">
                  <span className="text-[#969696] line-through text-sm">
                    ₹ 399
                  </span>{" "}
                  <span className="text-sm lg:text-lg">From </span>
                  <span className="text-base">₹</span> 299
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

          {/* Third Card */}
          <div
            className={`cursor-pointer overflow-hidden  ${styles["sl-card"]} relative`}
          >
            <p className="absolute bg-[#FED02F] w-14 top-2 left-2 z-10 font-light text-xs py-0.5 rounded-sm">
              SALE
            </p>
            <img
              src="https://www.ugaoo.com/cdn/shop/files/2_430a864d-f4ed-46d0-b5e6-ff0d55c422db.jpg"
              alt="Plant"
              className="mb-2 transition-transform duration-300 hover:scale-[1.04]"
            />
            <div>
              <p className={`text-xl ${styles["sl-card-detail-heading"]} pb-2`}>
                Monstera Deliciosa Plant
              </p>
              <div className="card-info-price-section flex flex-col justify-center">
                <p className="text-[#349655] lg:text-lg font-medium">
                  <span className="text-[#969696] line-through text-sm">
                    ₹ 1,499
                  </span>{" "}
                  <span className="text-sm lg:text-lg">From </span>
                  <span className="text-base">₹</span> 1,049
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

          {/* Fourth Card */}
          <div
            className={`cursor-pointer overflow-hidden  ${styles["sl-card"]} relative`}
          >
            <p className="absolute bg-[#FED02F] w-14 top-2 left-2 z-10 font-light text-xs py-0.5 rounded-sm">
              SALE
            </p>
            <img
              src="https://www.ugaoo.com/cdn/shop/products/LagosPlanter-Grey_f26c8dee-c8ce-4e1a-bec7-86006f560c98.jpg"
              alt="Plant"
              className="mb-2 transition-transform duration-300 hover:scale-[1.04]"
            />
            <div>
              <p className={`text-xl ${styles["sl-card-detail-heading"]} pb-2`}>
                Jade Plant Mini
              </p>
              <div className="card-info-price-section flex flex-col justify-center">
                <p className="text-[#349655] lg:text-lg font-medium">
                  <span className="text-[#969696] line-through text-sm">
                    ₹ 299
                  </span>{" "}
                  <span className="text-sm lg:text-lg">From </span>
                  <span className="text-base">₹</span> 249
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

export default BestSeller;
