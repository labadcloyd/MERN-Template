import css from "./styles.module.css";

export default function CircleLoader(props) {
  const { size, strokeWidth, ...rest } = props;
  return (
    <div style={{ width: size || 64, height: size || 64 }} {...rest}>
      <div className={css.ldsDualRingContainer}>
        <div
          className={css.ldsDualRing}
          style={{ borderWidth: strokeWidth || 6 }}></div>
      </div>
    </div>
  );
}
