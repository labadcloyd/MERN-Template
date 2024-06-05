import React from "react";

function Wallet(props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='31'
      height='30'
      fill='none'
      viewBox='0 0 31 30'
      {...props}>
      <path
        stroke='#fff'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M22.579 16.938a2.51 2.51 0 00-.75 2.037c.112 1.35 1.35 2.337 2.7 2.337h2.375V22.8a4.71 4.71 0 01-4.7 4.7H7.854a4.71 4.71 0 01-4.7-4.7v-8.413a4.71 4.71 0 014.7-4.7h14.35a4.71 4.71 0 014.7 4.7v1.8h-2.525c-.7 0-1.338.275-1.8.75z'></path>
      <path
        stroke='#fff'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M3.154 15.513V9.8a3.56 3.56 0 012.3-3.337l9.925-3.75c1.55-.588 3.212.562 3.212 2.225v4.75M28.227 17.463v2.575c0 .687-.55 1.25-1.25 1.275h-2.45c-1.35 0-2.587-.988-2.7-2.338a2.51 2.51 0 01.75-2.037c.463-.475 1.1-.75 1.8-.75h2.6c.7.025 1.25.587 1.25 1.275zM8.779 15h8.75'></path>
    </svg>
  );
}

export default Wallet;
