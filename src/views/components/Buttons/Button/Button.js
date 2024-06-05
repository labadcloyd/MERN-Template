import css from "./styles.module.css";

export default function Button(props) {
  const { children, size, variant, disabled, ...rest } = props;
  return (
    <button
      className={`${css.wrapper} ${variant && css[variant]} ${
        disabled && css.disabled
      }`}
      {...rest}>
      {children}
    </button>
  );
}
