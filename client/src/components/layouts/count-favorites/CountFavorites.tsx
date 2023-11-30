import { FC } from "react";
import plural from "plural-ru";
import "./CountFavorites.css";

interface CountFavorites {
  count: number;
}

const CountFavorites: FC<CountFavorites> = ({ count }) => {
  const countText = `${count} ${plural(
    count,
    "позиция",
    "позиции",
    "позиций"
  )}`;
  return (
    <div className="count-favorites">
      <span>Избранные товары — {countText}</span>
    </div>
  );
};

export default CountFavorites;
