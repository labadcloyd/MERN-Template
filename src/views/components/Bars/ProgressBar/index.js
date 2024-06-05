import css from "./styles.module.css";

export default function ProgressBar(props) {
  const { percent } = props;
  return (
    <div className={css.wrapper}>
      <div
        className={css.container}
        style={{
          width: percent !== null || percent !== undefined ? `${percent}%` : 0,
        }}></div>
    </div>
  );
}
