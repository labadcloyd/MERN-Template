/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Star from "@/assets/icons/Star";
import css from "./styles.module.css";
import { useEffect, useState } from "react";

export default function StarRatingInput(props) {
  const { rating, setRating, size, id } = props;

  // Local State
  const [localRating, setLocalRating] = useState(rating || 0);

  // UseEffects
  useEffect(() => {
    if (setRating) setRating(localRating);
  }, [localRating]);
  return (
    <div className={css.wrapper}>
      {Array.from({ length: 5 }, (item, index) => {
        return (
          <Star
            key={`${id}${index}`}
            size={size || 20}
            id={`${id}${index}`}
            onClick={() => setLocalRating(index + 1)}
            percent={
              localRating - index > 1
                ? 1
                : localRating - index <= 0
                ? 0
                : localRating - index
            }
          />
        );
      })}
    </div>
  );
}
