import React, { useEffect, useState } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";
import styles from './AnnounceMent.module.css'

const AnnounceMent = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const announcements = [
    "Free Shipping above ₹499 | All India Delivery",
    "Get ₹100 OFF Above ₹899 | Code: ECO100",
    "Buy Our XL Plants",
  ];

  useEffect(() => {
    let timeout;

    if (isAnimating) {
      timeout = setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % announcements.length);
      }, 6000);
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, isAnimating]);

  const restartAnimation = () => {
    setIsAnimating(false);
    setTimeout(() => setIsAnimating(true), 6000);
  };

  // Handle prev click
  const handlePrev = () => {
    setIsAnimating(false);
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + announcements.length) % announcements.length
    );
    restartAnimation();
  };

  // Handle next click
  const handleNext = () => {
    setIsAnimating(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % announcements.length);
    restartAnimation();
  };
  return (
    <>
      {/*  announcement bar*/}
      <div className="bg-[#0F4C36] text-white flex flex-col justify-center h-12 px-2 overflow-hidden relative ">
        {/* Small Screen Announcement */}
        {window.innerWidth <= 767 ? (
          <>
            <div className={`flex justify-center`}>
              <div
                key={currentIndex}
                className={`text-[15px] px-8 text-center ${
                  currentIndex !== 2
                    ? styles["animated-text"]
                    : styles["sm-animated-text"]
                }`}
              >
                {announcements[currentIndex]}
              </div>
            </div>

            {/* Manual Navigation Buttons */}
            <div className={`absolute flex justify-between w-full pr-4 }`}>
              <button onClick={handlePrev} className="cursor-pointer">
                <GrPrevious />
              </button>

              <button onClick={handleNext} className="cursor-pointer">
                <GrNext />
              </button>
            </div>
          </>
        ) : (
          /* Large Screen Announcement and Animated Screen Announcement*/
          <div
            className={`flex justify-around items-center ${styles["md-announcement"]}`}
          >
            {announcements.map((announcement, index) => (
              <div key={index} className="text-[15px] ">
                {announcement}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default AnnounceMent;
