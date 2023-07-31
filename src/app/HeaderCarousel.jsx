import SimpleStar from "@/components/icons/simpleStar";
import React from "react";

const item =
  "text-[#FFF] tracking-widest whitespace-nowrap flex gap-2 items-center w-[366px] shrink-0";

const HeaderCarousel = () => {
  return (
    <div className="py-2 w-full overflow-hidden bg-seaweed">
      <div className="flex items-center font-bold animate-slowSlide w-[3660px]">
        <p className={`${item}`}>
          <SimpleStar />
          NOW BOOKING PROJECTS FOR 2023
        </p>
        <p className={`${item}`}>
          <SimpleStar />
          NOW BOOKING PROJECTS FOR 2023
        </p>
        <p className={`${item}`}>
          <SimpleStar />
          NOW BOOKING PROJECTS FOR 2023
        </p>
        <p className={`${item}`}>
          <SimpleStar />
          NOW BOOKING PROJECTS FOR 2023
        </p>
        <p className={`${item}`}>
          <SimpleStar />
          NOW BOOKING PROJECTS FOR 2023
        </p>
        <p className={`${item}`}>
          <SimpleStar />
          NOW BOOKING PROJECTS FOR 2023
        </p>
        <p className={`${item}`}>
          <SimpleStar />
          NOW BOOKING PROJECTS FOR 2023
        </p>
        <p className={`${item}`}>
          <SimpleStar />
          NOW BOOKING PROJECTS FOR 2023
        </p>
        <p className={`${item}`}>
          <SimpleStar />
          NOW BOOKING PROJECTS FOR 2023
        </p>
        <p className={`${item}`}>
          <SimpleStar />
          NOW BOOKING PROJECTS FOR 2023
        </p>
      </div>
    </div>
  );
};

export default HeaderCarousel;
