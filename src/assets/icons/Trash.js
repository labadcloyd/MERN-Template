import React from "react";

function TrashIcon(props) {
  const { ...rest } = props;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={props.size || 21}
      height={props.size || 21}
      fill='none'
      viewBox='0 0 21 21'
      {...rest}>
      <path
        stroke='#EF7F5C'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M18.375 5.232a88.988 88.988 0 00-8.768-.437c-1.732 0-3.464.087-5.197.262l-1.785.175M7.438 4.349l.192-1.147c.14-.83.245-1.452 1.724-1.452h2.292c1.479 0 1.593.656 1.724 1.461l.193 1.138M16.494 7.997l-.569 8.812c-.096 1.373-.175 2.441-2.616 2.441H7.69c-2.44 0-2.52-1.067-2.616-2.441l-.569-8.812M9.04 14.438h2.913M8.313 10.938h4.374'></path>
    </svg>
  );
}

export default TrashIcon;
