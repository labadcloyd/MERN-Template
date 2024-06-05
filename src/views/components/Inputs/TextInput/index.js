import { BTN_VARIANTS } from "@/common/constants/styles";
import css from "./styles.module.css";

export default function TextInput(props) {
  return (
    <div
      className={`${css.wrapper} ${
        props?.variant && css[props?.variant || BTN_VARIANTS.outlined]
      }`}>
      <input {...props}></input>
    </div>
  );
}
