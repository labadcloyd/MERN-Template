import React from "react";

function ImageIcon(props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={props?.size}
      height={props?.size}
      fill='none'
      viewBox='0 0 24 24'>
      <path
        stroke={props?.color || "#292D32"}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={props?.strokeWidth || "1.5"}
        d='M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7z'></path>
      <path
        stroke='#292D32'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={props?.strokeWidth || "1.5"}
        d='M9 10a2 2 0 100-4 2 2 0 000 4zM2.67 18.95l4.93-3.31c.79-.53 1.93-.47 2.64.14l.33.29c.78.67 2.04.67 2.82 0l4.16-3.57c.78-.67 2.04-.67 2.82 0L22 13.9'></path>
    </svg>
  );
}

export default ImageIcon;
