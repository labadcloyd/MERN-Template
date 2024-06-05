import Star from "@/assets/icons/Star";
import css from "./styles.module.css";

export default function StarRating(props) {
  const { rating, size, id } = props;
  return (
    <div className={css.wrapper}>
      {Array.from({ length: 5 }, (item, index) => {
        return (
          <Star
            key={`${id}${index}`}
            size={size || 20}
            id={`${id}${index}`}
            percent={
              rating - index > 1 ? 1 : rating - index <= 0 ? 0 : rating - index
            }
          />
        );
      })}
    </div>
  );
}
