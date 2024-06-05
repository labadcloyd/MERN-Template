import React from "react";

function ArrowLeftIcon(props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={props?.size || "24"}
      height={props?.size || "24"}
      fill='none'
      viewBox='0 0 24 24'>
      <path
        stroke='#292D32'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={props?.strokeWidth || "1.5"}
        d='M9.57 5.93L3.5 12l6.07 6.07M20.5 12H3.67'></path>
    </svg>
  );
}

export default ArrowLeftIcon;
