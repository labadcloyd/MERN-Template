import { SearchIcon } from "@/assets/icons";
import css from "./styles.module.css";

export default function SearchInput(props) {
  return (
    <div className={css.wrapper}>
      <input {...props}></input>
      <div className={css.iconWrapper} onClick={props?.onSubmit}>
        <SearchIcon />
      </div>
    </div>
  );
}
