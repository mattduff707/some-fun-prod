"use client";
import React from "react";
import { useInView } from "react-intersection-observer";

const SpecialStar = ({
  className,
  fill = "#F9EFE1",
  x,
  y,
  shadowColor = "hsla(169deg, 32%, 13%, 0.6)",
}) => {
  // const { inView, ref: starRef } = useInView({ triggerOnce: true });

  // console.log(inView);

  return (
    <svg
      viewBox="0 0 338 338"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMinYMin meet"
      className={`relative ${className}`}
      x={x}
      y={y}
    >
      <style>
        {`
        .star-shadow {
          transform-origin: 50% 50%;
        }
        .shadowy {
          fill: ${shadowColor};
          -webkit-filter:blur(6px);
          filter:blur(2px);
          transform: rotate(0deg) translate(1px, 1px) rotate(0deg);
          transform-origin: 50% 50%;
        }

            `}
      </style>
      <svg
        viewBox="0 0 334 334"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible p-8"
        y="8"
      >
        <path
          d="M162.476 4.05793C163.196 -1.20489 170.804 -1.2049 171.524 4.05793L183.282 89.9713C183.83 93.9795 188.935 95.3474 191.414 92.1504L244.553 23.626C247.808 19.4284 254.397 23.2322 252.389 28.1501L219.615 108.432C218.086 112.178 221.822 115.914 225.568 114.385L305.85 81.611C310.768 79.6033 314.572 86.1918 310.374 89.4469L241.85 142.586C238.653 145.065 240.02 150.17 244.029 150.718L329.942 162.476C335.205 163.196 335.205 170.804 329.942 171.524L244.029 183.282C240.02 183.83 238.653 188.935 241.85 191.414L310.374 244.553C314.572 247.808 310.768 254.397 305.85 252.389L225.568 219.615C221.822 218.086 218.086 221.822 219.615 225.568L252.389 305.85C254.397 310.768 247.808 314.572 244.553 310.374L191.414 241.85C188.935 238.653 183.83 240.02 183.282 244.029L171.524 329.942C170.804 335.205 163.196 335.205 162.476 329.942L150.718 244.029C150.17 240.02 145.065 238.653 142.586 241.85L89.4469 310.374C86.1918 314.572 79.6033 310.768 81.611 305.85L114.385 225.568C115.914 221.822 112.178 218.086 108.432 219.615L28.1501 252.389C23.2322 254.397 19.4284 247.808 23.626 244.553L92.1504 191.414C95.3474 188.935 93.9796 183.83 89.9713 183.282L4.05793 171.524C-1.20489 170.804 -1.2049 163.196 4.05793 162.476L89.9713 150.718C93.9795 150.17 95.3474 145.065 92.1504 142.586L23.626 89.4469C19.4284 86.1918 23.2322 79.6033 28.1501 81.611L108.432 114.385C112.178 115.914 115.914 112.178 114.385 108.432L81.611 28.1501C79.6033 23.2322 86.1918 19.4284 89.4469 23.626L142.586 92.1504C145.065 95.3474 150.17 93.9796 150.718 89.9713L162.476 4.05793Z"
          style={{ animationDuration: "56s" }}
          className="shadowy motion-safe:animate-shadowRotation"
        />
      </svg>
      <svg
        viewBox="0 0 334 334"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible p-8"
      >
        <path
          d="M162.476 4.05793C163.196 -1.20489 170.804 -1.2049 171.524 4.05793L183.282 89.9713C183.83 93.9795 188.935 95.3474 191.414 92.1504L244.553 23.626C247.808 19.4284 254.397 23.2322 252.389 28.1501L219.615 108.432C218.086 112.178 221.822 115.914 225.568 114.385L305.85 81.611C310.768 79.6033 314.572 86.1918 310.374 89.4469L241.85 142.586C238.653 145.065 240.02 150.17 244.029 150.718L329.942 162.476C335.205 163.196 335.205 170.804 329.942 171.524L244.029 183.282C240.02 183.83 238.653 188.935 241.85 191.414L310.374 244.553C314.572 247.808 310.768 254.397 305.85 252.389L225.568 219.615C221.822 218.086 218.086 221.822 219.615 225.568L252.389 305.85C254.397 310.768 247.808 314.572 244.553 310.374L191.414 241.85C188.935 238.653 183.83 240.02 183.282 244.029L171.524 329.942C170.804 335.205 163.196 335.205 162.476 329.942L150.718 244.029C150.17 240.02 145.065 238.653 142.586 241.85L89.4469 310.374C86.1918 314.572 79.6033 310.768 81.611 305.85L114.385 225.568C115.914 221.822 112.178 218.086 108.432 219.615L28.1501 252.389C23.2322 254.397 19.4284 247.808 23.626 244.553L92.1504 191.414C95.3474 188.935 93.9796 183.83 89.9713 183.282L4.05793 171.524C-1.20489 170.804 -1.2049 163.196 4.05793 162.476L89.9713 150.718C93.9795 150.17 95.3474 145.065 92.1504 142.586L23.626 89.4469C19.4284 86.1918 23.2322 79.6033 28.1501 81.611L108.432 114.385C112.178 115.914 115.914 112.178 114.385 108.432L81.611 28.1501C79.6033 23.2322 86.1918 19.4284 89.4469 23.626L142.586 92.1504C145.065 95.3474 150.17 93.9796 150.718 89.9713L162.476 4.05793Z"
          fill={fill}
          style={{ animationDuration: "56s" }}
          className="star-shadow motion-safe:animate-rotation"
        />
      </svg>
      {/* <rect y="240" x="160" ref={starRef}></rect> */}
      {/* <svg
        width="267"
        height="275"
        viewBox="0 0 267 275"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M129.956 3.90764C130.578 -0.0576216 136.288 -0.0576129 136.91 3.90765L147.418 70.8698C147.894 73.9024 151.753 74.9149 153.656 72.5063L195.194 19.9436C197.677 16.802 202.641 19.5839 201.258 23.3416L177.756 87.1899C176.707 90.0393 179.516 92.7907 182.343 91.6824L244.2 67.4317C247.909 65.9775 250.799 70.8357 247.751 73.4012L196.113 116.863C193.817 118.796 194.839 122.532 197.799 123.027L263.571 134.019C267.491 134.675 267.491 140.307 263.571 140.962L197.799 151.955C194.839 152.45 193.817 156.186 196.113 158.119L247.751 201.581C250.799 204.146 247.909 209.004 244.2 207.55L182.343 183.299C179.516 182.191 176.707 184.942 177.756 187.792L201.258 251.64C202.641 255.398 197.677 258.18 195.194 255.038L153.656 202.475C151.753 200.067 147.894 201.079 147.418 204.112L136.91 271.074C136.288 275.039 130.578 275.039 129.956 271.074L119.448 204.112C118.972 201.079 115.113 200.067 113.21 202.475L71.6723 255.038C69.1896 258.18 64.2248 255.398 65.608 251.64L89.1104 187.792C90.1593 184.942 87.3497 182.191 84.5229 183.299L22.6664 207.55C18.9572 209.004 16.0673 204.146 19.1154 201.581L70.753 158.119C73.0497 156.186 72.0276 152.45 69.0668 151.955L3.29474 140.962C-0.624442 140.307 -0.624439 134.675 3.29474 134.019L69.0668 123.027C72.0276 122.532 73.0497 118.796 70.753 116.863L19.1154 73.4012C16.0673 70.8357 18.9573 65.9776 22.6664 67.4317L84.5229 91.6824C87.3497 92.7907 90.1593 90.0393 89.1104 87.1899L65.6079 23.3416C64.2248 19.5839 69.1896 16.802 71.6723 19.9436L113.21 72.5063C115.113 74.9149 118.972 73.9024 119.448 70.8697L129.956 3.90764Z"
          fill="#33524C"
        />
      </svg> */}
    </svg>
  );
};

export default SpecialStar;
