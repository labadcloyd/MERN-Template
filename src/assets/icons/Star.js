import React from "react";

const Star = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={props.size || 20}
      height={props.size || 20}
      viewBox='0 0 13 13'
      onClick={props?.onClick}>
      <defs>
        <linearGradient id={props.id}>
          <stop offset={props.percent || 1} stopColor='#EFC65C' />
          <stop offset={props.percent || 1} stopColor='#DFE1E5' />
        </linearGradient>
      </defs>
      <path
        d='M7.623.939l1.144 2.306c.156.321.572.63.923.688l2.073.348c1.326.223 1.638 1.192.682 2.15l-1.611 1.624c-.273.275-.423.806-.338 1.186l.461 2.012c.364 1.592-.474 2.208-1.872 1.376l-1.943-1.16c-.35-.21-.93-.21-1.287 0l-1.943 1.16c-1.391.832-2.236.21-1.872-1.376l.462-2.012c.084-.38-.065-.91-.338-1.186L.552 6.43c-.95-.957-.644-1.926.682-2.15l2.073-.347c.345-.059.76-.367.917-.688L5.368.94c.624-1.252 1.638-1.252 2.255 0z'
        fill={props.percent === 0 ? "#DFE1E5" : `url(#${props.id})`}
      />
    </svg>
  );
};

export default Star;
