import SimpleStar from "./icons/simpleStar";
import React from "react";

const item =
  "text-[#FFF] tracking-widest whitespace-nowrap flex gap-2 items-center shrink-0";

const Carousel = ({
  message,
  width,
  animation,
  wrapClass,
  trackClass,
  itemClass,
}) => {
  const containerWidth = width * 16;
  return (
    <div
      className={`m-auto w-full overflow-hidden bg-seaweed py-2 ${wrapClass}`}
    >
      <div
        style={{ containerWidth }}
        className={`flex ${animation} items-center font-bold ${trackClass}`}
      >
        <p style={{ width }} className={`${item} ${itemClass}`}>
          <SimpleStar />
          {message}
        </p>
        <p style={{ width }} className={`${item} ${itemClass}`}>
          <SimpleStar />
          {message}
        </p>
        <p style={{ width }} className={`${item} ${itemClass}`}>
          <SimpleStar />
          {message}
        </p>
        <p style={{ width }} className={`${item} ${itemClass}`}>
          <SimpleStar />
          {message}
        </p>
        <p style={{ width }} className={`${item} ${itemClass}`}>
          <SimpleStar />
          {message}
        </p>
        <p style={{ width }} className={`${item} ${itemClass}`}>
          <SimpleStar />
          {message}
        </p>
        <p style={{ width }} className={`${item} ${itemClass}`}>
          <SimpleStar />
          {message}
        </p>
        <p style={{ width }} className={`${item} ${itemClass}`}>
          <SimpleStar />
          {message}
        </p>
        <p style={{ width }} className={`${item} ${itemClass}`}>
          <SimpleStar />
          {message}
        </p>
        <p style={{ width }} className={`${item} ${itemClass}`}>
          <SimpleStar />
          {message}
        </p>
        <p style={{ width }} className={`${item} ${itemClass}`}>
          <SimpleStar />
          {message}
        </p>
        <p style={{ width }} className={`${item} ${itemClass}`}>
          <SimpleStar />
          {message}
        </p>
        <p style={{ width }} className={`${item} ${itemClass}`}>
          <SimpleStar />
          {message}
        </p>
        <p style={{ width }} className={`${item} ${itemClass}`}>
          <SimpleStar />
          {message}
        </p>
        <p style={{ width }} className={`${item} ${itemClass}`}>
          <SimpleStar />
          {message}
        </p>
        <p style={{ width }} className={`${item} ${itemClass}`}>
          <SimpleStar />
          {message}
        </p>
      </div>
    </div>
  );
};

export default Carousel;
