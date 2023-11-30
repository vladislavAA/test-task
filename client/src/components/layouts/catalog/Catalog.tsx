import { FC } from "react";
import { Query } from "../../../graphql/generated";
import "./Catalog.css";

interface ICatalog {
  items: Query["cars"];
  renderItem: Function;
}

const Catalog: FC<ICatalog> = ({ items, renderItem }) => {
  return <div className="catalog">{items.map((item) => renderItem(item))}</div>;
};

export default Catalog;
