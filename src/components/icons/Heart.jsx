import React from "react";

function Heart({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="25"
      fill="none"
      viewBox="0 0 28 25"
      className={className}
    >
      <path
        fill="#F7B917"
        fillOpacity="0.5"
        d="M26.587 9.939C29.68.218 14.397-1.043 14.397 8.082c0-8.76-14.52-8.63-12.815 1.857 1.181 4.65 9.403 8.864 13.146 13.458 3.313-4.431 9.037-7.193 11.859-13.458z"
      ></path>
      <path
        fill="#33524C"
        d="M13.516 8.082a.88.88 0 001.76 0h-1.76zm13.07 1.857l.803.361.021-.046.015-.048-.838-.267zM14.73 23.397l-.683.557a.88.88 0 001.388-.03l-.705-.527zM1.582 9.94l-.869.141.006.038.01.038.853-.217zm13.694-1.857c0-2.006.826-3.372 1.98-4.216 1.181-.865 2.767-1.222 4.296-1.048 1.531.173 2.906.865 3.728 1.971.8 1.077 1.17 2.674.468 4.883l1.677.534c.844-2.651.464-4.858-.731-6.467-1.174-1.579-3.04-2.455-4.943-2.67-1.905-.217-3.947.214-5.535 1.376-1.615 1.182-2.7 3.08-2.7 5.637h1.76zm10.508 1.495c-1.337 2.97-3.369 5.13-5.54 7.132-2.13 1.965-4.5 3.86-6.22 6.161l1.41 1.054c1.591-2.129 3.74-3.832 6.005-5.921 2.225-2.053 4.466-4.407 5.95-7.703l-1.605-.723zM15.277 8.082c0-2.458-1.03-4.347-2.576-5.57C11.175 1.303 9.19.775 7.285.914c-1.907.138-3.8.952-5.098 2.515C.877 5.01.253 7.252.713 10.08l1.738-.282c-.393-2.416.16-4.121 1.091-5.243.945-1.137 2.362-1.774 3.872-1.884 1.512-.11 3.05.316 4.194 1.221 1.123.889 1.908 2.269 1.908 4.19h1.76zM.729 10.156c.345 1.358 1.184 2.618 2.22 3.786 1.043 1.174 2.341 2.315 3.684 3.426 2.74 2.266 5.614 4.377 7.413 6.586l1.365-1.113c-1.944-2.386-5.053-4.678-7.656-6.83-1.328-1.099-2.54-2.17-3.489-3.238-.953-1.074-1.585-2.084-1.83-3.05l-1.707.433z"
      ></path>
    </svg>
  );
}

export default Heart;