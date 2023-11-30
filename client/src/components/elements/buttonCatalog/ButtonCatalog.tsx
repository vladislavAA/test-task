import { FC, ReactNode } from "react";
import Burger from "../../../assets/Burger";
import "./ButtonCatalog.css";

interface Button {
  click: Function;
}

const ButtonCatalog: FC<Button> = ({ click }) => {
  return (
    <button className="button" onClick={() => click()}>
      <Burger />
      <span className="button__text">Каталог</span>
    </button>
  );
};

export default ButtonCatalog;
