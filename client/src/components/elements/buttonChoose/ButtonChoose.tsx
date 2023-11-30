import { FC } from "react";
import "./ButtonChoose.css";

interface ButtonChoose {
  disable: boolean;
}

const ButtonChoose: FC<ButtonChoose> = ({ disable }) => {
  return (
    <button className="button-choose" disabled={disable}>
      <span className="button-buy__choose">Выбрать комплектацию</span>
    </button>
  );
};

export default ButtonChoose;
