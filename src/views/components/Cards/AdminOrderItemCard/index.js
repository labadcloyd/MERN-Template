/* eslint-disable @next/next/no-img-element */
// Icons
import { ImageIcon } from "@/assets/icons";
// CSS
import css from "./styles.module.css";

export default function OrderItemCard(props) {
  const { data, status } = props;
  if (data) {
    const { id, quantity, title, price, imgUrl } = data;

    return (
      <div className={css.wrapper}>
        <div className={css.imgWrapper}>
          {imgUrl && <img alt={title} src={imgUrl} />}
          {!imgUrl && <ImageIcon size={30} />}
        </div>
        <div className={css.itemNameWrapper}>
          <div className={css.colWrapper}>
            <h6>{title}</h6>
            <p>Price: ₱ {price}</p>
            <p>Quantity: {quantity}</p>
          </div>
        </div>
        <div className={css.colWrapper}>
          <h4>₱ {price * quantity}</h4>
        </div>
      </div>
    );
  }
}
