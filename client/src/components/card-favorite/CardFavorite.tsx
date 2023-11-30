import { FC } from "react";
import { Query } from "../../graphql/generated";
import Availability from "../elements/availability/Availability";
import priceFormater from "../../utils/priceFormater";
import ButtonChoose from "../elements/buttonChoose/ButtonChoose";
import Delete from "../../assets/Delete";
import favoritesStore from "../../store/favoritesStore";
import "./CardFavorite.css";

interface CardFavorite {
  data: Query["car"];
}

const CardFavorite: FC<CardFavorite> = ({ data }) => {
  return (
    <div className="card-favorite">
      <div className="card-favorite__img-box">
        <Availability
          availability={data?.availability}
          img_src={data?.img_src}
        />
      </div>

      <div className="card-favorite__info-box">
        <h2 className="card-favorite__name">
          {data?.brand + " " + data?.model}
        </h2>

        <div className="card-favorite__description">
          <p className="card-favorite__text">{data?.description}</p>
          <p className="card-favorite__text card-favorite__text-medium">
            Год: {data?.model_year}
          </p>
          <p className="card-favorite__text">Цвет: {data?.color}</p>
        </div>

        <h3 className="card-favorite__price">
          от {priceFormater(data?.price)}
        </h3>

        <div className="card-favorite__management">
          <ButtonChoose disable={!data?.availability} />
          <div
            className="card-favorite__delete"
            onClick={() => favoritesStore.checkId(data!.id!)}
          >
            <Delete />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFavorite;
