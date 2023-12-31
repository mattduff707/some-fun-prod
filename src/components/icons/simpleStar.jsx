import React from "react";

function SimpleStar({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      className={className}
      fill="#F4D8CD"
    >
      <path
        fill="inherit"
        d="M9.771 1.156c.05-.25.408-.25.458 0l1.043 5.267c.032.164.22.241.358.149l4.462-2.988c.212-.142.466.112.324.324L13.428 8.37a.233.233 0 00.149.359l5.267 1.042c.25.05.25.408 0 .458l-5.267 1.043a.233.233 0 00-.149.358l2.988 4.462c.142.212-.112.466-.324.324l-4.462-2.988a.233.233 0 00-.359.149l-1.042 5.267c-.05.25-.408.25-.458 0L8.73 13.577a.233.233 0 00-.359-.149l-4.462 2.988c-.212.142-.466-.112-.324-.324l2.988-4.462a.233.233 0 00-.149-.359L1.156 10.23c-.25-.05-.25-.408 0-.458L6.423 8.73a.233.233 0 00.149-.359L3.584 3.908c-.142-.212.112-.466.324-.324L8.37 6.572a.233.233 0 00.359-.149L9.77 1.156z"
      ></path>
    </svg>
  );
}

export default SimpleStar;
