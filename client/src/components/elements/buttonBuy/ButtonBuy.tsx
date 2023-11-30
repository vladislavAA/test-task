import { FC } from "react";
import "./ButtonBuy.css";

interface ButtonBuy {
  disable: boolean;
}

const ButtonBuy: FC<ButtonBuy> = ({ disable }) => {
  return (
    <button className="button-buy" disabled={disable}>
      <span className="button-buy__text">Купить</span>
    </button>
  );
};

export default ButtonBuy;
