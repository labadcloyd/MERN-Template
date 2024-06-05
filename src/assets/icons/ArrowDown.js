import React from "react";

function ArrowDownIcon(props) {
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
        strokeWidth='1.5'
        d='M18.07 14.43L12 20.5l-6.07-6.07M12 3.5v16.83'></path>
    </svg>
  );
}

export default ArrowDownIcon;
