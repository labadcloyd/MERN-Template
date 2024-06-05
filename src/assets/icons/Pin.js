import React from "react";

function Icon(props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={props?.size || "24"}
      height={props?.size || "24"}
      fill='none'
      viewBox='0 0 24 24'>
      <path
        fill='#292D32'
        d='M15.49 18.071l4.28-8.56c2.88-5.75.52-8.11-5.23-5.23l-1.74.87c-.51.25-1.1.25-1.61 0l-1.73-.87c-5.75-2.88-8.11-.53-5.23 5.23l4.28 8.56c1.92 3.84 5.06 3.84 6.98 0zm-4.24-3.23v-5.4c0-.41.34-.75.75-.75s.75.34.75.75v5.4c0 .41-.34.75-.75.75s-.75-.34-.75-.75z'></path>
    </svg>
  );
}

export default Icon;
