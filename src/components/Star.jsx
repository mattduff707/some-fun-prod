import React from "react";

const Star = ({
  className,
  fill = "#F9EFE1",
  x,
  y,
  shadowColor = "hsla(169deg, 32%, 13%, 0.6)",
}) => {
  return (
    <svg
      viewBox="0 0 338 338"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMinYMin meet"
      className={className}
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
          className="shadowy animate-shadowRotation"
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
          className="star-shadow animate-rotation"
        />
      </svg>
    </svg>
  );
};

export default Star;
