import { FC } from "react";
import "./Availability.css";

interface IAvailability {
  availability?: boolean;
  img_src?: string;
}

const Availability: FC<IAvailability> = ({ availability, img_src }) => {
  return (
    <>
      {" "}
      <img
        className={
          !availability
            ? "availability__img availability__img_null"
            : "availability__img"
        }
        src={`http://localhost:4000${img_src}`}
        alt="photo car"
      />
      {!availability ? (
        <div className="availability__block">Нет в наличии</div>
      ) : null}
    </>
  );
};

export default Availability;
