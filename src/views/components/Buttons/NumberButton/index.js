/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect, useState } from "react";
import css from "./styles.module.css";
import { MinusIcon, PlusIcon } from "@/assets/icons";

export default function QuantityButton(props) {
  const { value, onChange, variant, ...rest } = props;

  const [amount, setAmount] = useState(value || 1);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!isLoaded) {
      setIsLoaded(true);
      return;
    }
    if (onChange) onChange(amount);
  }, [amount]);
  return (
    <div className={css[variant] || css.primary} {...rest}>
      <button onClick={() => amount > 1 && setAmount(amount - 1)}>
        <MinusIcon />
      </button>
      <p>{amount}</p>
      <button onClick={() => setAmount(amount + 1)}>
        <PlusIcon />
      </button>
    </div>
  );
}
