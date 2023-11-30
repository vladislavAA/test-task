import { FC, memo, ChangeEvent, useCallback } from "react";
import Sort from "../../../assets/Sort";
import "./Select.css";

interface Options {
  value: string;
  title: string;
}

interface Select {
  options: Array<Options>;
  sort: Function;
  valueSelect: string;
}

const Select: FC<Select> = ({ options, sort, valueSelect }) => {
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    sort(event.target.value);
  };

  return (
    <div className="select">
      <Sort />
      <select
        className="select__list"
        onChange={handleSelectChange}
        value={valueSelect}
      >
        {options.map((item: Options) => (
          <option value={item.value} key={item.value}>
            {item.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default memo(Select);
