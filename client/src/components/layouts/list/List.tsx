import { FC } from "react";
import { Query } from "../../../graphql/generated";
import "./List.css";

interface List {
  data: Query["cars"];
  renderData: Function;
}

const List: FC<List> = ({ data, renderData }) => {
  return <div className="list">{data.map((item) => renderData(item))}</div>;
};

export default List;
