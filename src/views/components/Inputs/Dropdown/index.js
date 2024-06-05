"use client";
import { useState } from "react";
// Assets
import { ArrowDownIcon } from "@/assets/icons";
// CSS
import css from "./styles.module.css";

export default function Dropdown(props) {
  const { value, placeholder, options, onChange } = props;

  // Local State
  const [isOpen, setIsOpen] = useState(false);

  // Functions
  function handleClick(v) {
    setIsOpen(false);
    if (onChange) onChange(v);
  }
  return (
    <div className={css.wrapper}>
      <div className={css.valueWrapper} onClick={() => setIsOpen(!isOpen)}>
        <p>{value || placeholder}</p>
        <div className={css.arrowContainer}>
          <ArrowDownIcon size={16} />
        </div>
      </div>
      {isOpen && (
        <div className={css.optionsWrapper}>
          {options &&
            options.map((item) => (
              <div
                key={item?.value}
                className={css.optionContainer}
                onClick={() => handleClick(item?.value)}>
                {item?.label}
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
