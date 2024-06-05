/* eslint-disable @next/next/no-img-element */
// Components
import { Button, NumberButton } from "@/views/components";
// Icons
import { ImageIcon, TrashIcon } from "@/assets/icons";
// CSS
import css from "./styles.module.css";
import { BTN_VARIANTS } from "@/common/constants/styles";

export default function CartCard(props) {
  const { data, onChange, onRemove } = props;
  if (data?.product) {
    const { id, quantity, product } = data;

    const { title, price, imgUrl } = product;

    return (
      <div className={css.wrapper}>
        <div className={css.imgWrapper}>
          {imgUrl && <img alt={title} src={imgUrl} />}
          {!imgUrl && <ImageIcon size={30} />}
        </div>
        <div className={css.itemNameWrapper}>
          <div className={css.rowContainer}>
            <Button variant={BTN_VARIANTS.transparent} onClick={onRemove}>
              <TrashIcon />
            </Button>
            <h6>{title}</h6>
          </div>
          <p>Price: ₱ {price}</p>
          <p>Quantity: </p>
          <div className={css.rowContainer}>
            <NumberButton
              value={quantity}
              onChange={onChange}
              variant={BTN_VARIANTS.outlined}
            />
          </div>
        </div>
        <div className={css.colWrapper}>
          <h4>₱ {price * quantity}</h4>
        </div>
      </div>
    );
  }
}
