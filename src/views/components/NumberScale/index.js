"use client";
import { useEffect, useState } from "react";
import Star from "@/assets/icons/Star";
import css from "./styles.module.css";
import Button from "../Buttons/Button";
import { BTN_VARIANTS } from "@/common/constants/styles";

export default function NumberScale(props) {
  const { value, onChange } = props;
  const [scale, setScale] = useState(value);

  useEffect(() => {
    if (onChange) {
      onChange(scale);
    }
  }, [scale]);
  return (
    <div className={css.wrapper}>
      {Array.from({ length: 5 }, (item, index) => {
        return (
          <Button
            variant={
              scale === index + 1 ? BTN_VARIANTS.primary : BTN_VARIANTS.outlined
            }
            onClick={() => setScale(index + 1)}
            key={index}>
            {index + 1}
          </Button>
        );
      })}
    </div>
  );
}
