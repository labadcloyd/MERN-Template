import { BTN_VARIANTS } from "@/common/constants/styles";
import css from "./styles.module.css";

export default function TextAreaInput(props) {
  return (
    <textarea
      className={`${css.wrapper} ${
        props?.variant && css[props?.variant || BTN_VARIANTS.outlined]
      }`}
      {...props}></textarea>
  );
}
