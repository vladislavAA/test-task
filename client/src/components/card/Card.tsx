import { FC, useEffect } from "react";
import { observer, useObserver } from "mobx-react-lite";
import ButtonBuy from "../elements/buttonBuy/ButtonBuy";
import { Query } from "../../graphql/generated";
import priceFormater from "../../utils/priceFormater";
import Availability from "../elements/availability/Availability";
import Heart from "../../assets/Heart";
import HeartNoFill from "../../assets/HeartNoFill";
import "./Card.css";

interface Card {
  data: Query["car"];
  addInFavorites: Function;
  favorites: boolean;
}

const Card: FC<Card> = ({ data, favorites, addInFavorites }) => {
  const image = () => {
    if (favorites) return <Heart color={"#240C86"} />;
    return <HeartNoFill color={!data?.availability ? "#D9D9D9" : "#000000"} />;
  };

  return (
    <div className="card">
      <div className="card__img-box">
        <Availability
          availability={data?.availability}
          img_src={data?.img_src}
        />
      </div>

      <div className="card__info">
        <h3 className="card__model">{data?.brand + " " + data?.model}</h3>
        <div className="card__description">
          <span className="card__year">Год: {data?.model_year}</span>
          <span> Цвет: {data?.color}</span>
        </div>
        <h4 className="card__price">от {priceFormater(data?.price)}</h4>
      </div>

      <div className="card__management">
        <ButtonBuy disable={!data?.availability} />
        <div
          className="card__icon-favorites"
          onClick={() => addInFavorites(data?.id)}
        >
          {image()}
        </div>
      </div>
    </div>
  );
};

export default observer(Card);
