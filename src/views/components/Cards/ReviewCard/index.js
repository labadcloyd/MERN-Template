/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
// Components
import moment from "moment";
import StarRating from "../../StarRating";
// CSS
import css from "./styles.module.css";
import { ImageIcon } from "@/assets/icons";

export default function ReviewCard(props) {
  const { data, ...rest } = props;
  const { id, ownerName, rating, createdAt, comment, pfp } = data;
  return (
    <div key={id} className={css.rowWrapper} {...rest}>
      <div className={css.imgWrapper}>
        {pfp && <img src={pfp} />}
        {!pfp && <ImageIcon size={40} />}
      </div>
      <div className={css.colWrapper}>
        <h6>{ownerName}</h6>
        <div className={css.rowWrapper}>
          <StarRating rating={rating} size={20} />
          <span>{moment(createdAt).format("MMMM DD, YYYY")}</span>
        </div>
        <p>{comment}</p>
      </div>
    </div>
  );
}
