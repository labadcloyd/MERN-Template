/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect, useState } from "react";
// Constants
import { BTN_VARIANTS } from "@/common/constants/styles";
// Assets
import { ArrowLeftIcon, ArrowRightIcon } from "@/assets/icons";
// Components
import Button from "../Buttons/Button";
// CSS
import css from "./styles.module.css";

export default function Pagination(props) {
  const { page, setPage, size, total, ...rest } = props;

  // Local State
  const [pages, setPages] = useState();

  // Functions
  function handleBack() {
    if (page - 1 < 0) return;
    setPage((prevValue) => prevValue - 1);
  }
  function handleNext() {
    const max = Math.ceil(total / size);
    if (page + 2 > max) return;
    setPage((prevValue) => prevValue + 1);
  }

  // UseEffects
  useEffect(() => {
    if (size && total) {
      setPages([...Array(Math.ceil(total / size)).keys()].map((i) => i + 1));
    }
  }, [size, total]);
  return (
    <div className={css.wrapper} {...rest}>
      <Button
        disabled={!pages || page - 1 < 0}
        variant={BTN_VARIANTS.outlined}
        onClick={handleBack}>
        <ArrowLeftIcon />
      </Button>
      {pages &&
        pages?.map((i) => (
          <p
            key={i}
            className={i === page + 1 ? css.active : ""}
            onClick={() => setPage(i - 1)}>
            {i}
          </p>
        ))}
      <Button
        disabled={!pages || page + 2 > Math.ceil(total / size)}
        variant={BTN_VARIANTS.outlined}
        onClick={handleNext}>
        <ArrowRightIcon />
      </Button>
    </div>
  );
}
