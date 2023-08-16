import SimpleStar from "../components/icons/simpleStar";
import React from "react";

const item =
  "text-[#FFF] tracking-widest whitespace-nowrap flex gap-2 items-center shrink-0";

const HeaderCarousel = ({ message, width, animation }) => {
  const containerWidth = width * 16;
  return (
    <div className="m-auto w-full overflow-hidden bg-seaweed py-2">
      <div
        style={{ containerWidth }}
        className={`flex ${animation} items-center font-bold`}
      >
        <p style={{ width }} className={`${item}`}>
          <SimpleStar />
          {message}
        </p>
        <p style={{ width }} className={`${item}`}>
          <SimpleStar />
          {message}
        </p>
        <p style={{ width }} className={`${item}`}>
          <SimpleStar />
          {message}
        </p>
        <p style={{ width }} className={`${item}`}>
          <SimpleStar />
          {message}
        </p>
        <p style={{ width }} className={`${item}`}>
          <SimpleStar />
          {message}
        </p>
        <p style={{ width }} className={`${item}`}>
          <SimpleStar />
          {message}
        </p>
        <p style={{ width }} className={`${item}`}>
          <SimpleStar />
          {message}
        </p>
        <p style={{ width }} className={`${item}`}>
          <SimpleStar />
          {message}
        </p>
        <p style={{ width }} className={`${item}`}>
          <SimpleStar />
          {message}
        </p>
        <p style={{ width }} className={`${item}`}>
          <SimpleStar />
          {message}
        </p>
        <p style={{ width }} className={`${item}`}>
          <SimpleStar />
          {message}
        </p>
        <p style={{ width }} className={`${item}`}>
          <SimpleStar />
          {message}
        </p>
        <p style={{ width }} className={`${item}`}>
          <SimpleStar />
          {message}
        </p>
        <p style={{ width }} className={`${item}`}>
          <SimpleStar />
          {message}
        </p>
        <p style={{ width }} className={`${item}`}>
          <SimpleStar />
          {message}
        </p>
        <p style={{ width }} className={`${item}`}>
          <SimpleStar />
          {message}
        </p>
      </div>
    </div>
  );
};

export default HeaderCarousel;
