/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import css from "./styles.module.css";
import { ImageIcon, StarIcon } from "@/assets/icons";
import StarRating from "../../StarRating";

export default function ProductCard(props) {
  const {
    id,
    title,
    price,
    imgUrl,
    onClick,
    rating,
    reviewCount,
    link,
    ...rest
  } = props;
  return (
    <Link href={link}>
      <div className={css.wrapper} onClick={onClick} {...rest}>
        <div className={css.imgWrapper}>
          {imgUrl && <img alt={title} src={imgUrl} />}
          {!imgUrl && <ImageIcon size={70} />}
        </div>
        <div className={css.titleWrapper}>
          <div className={css.rowContainer}>
            <h5>₱ {price}</h5>
            <div className={css.ratingContainer}>
              <StarIcon id={id} size={15} />
              {rating || 0} ({reviewCount || 0})
            </div>
          </div>
          <p>{title}</p>
        </div>
      </div>
    </Link>
  );
}
