import { FC } from "react";
import Select from "../../elements/select/Select";
import Input from "../../elements/input/Input";
import "./Tools.css";

interface Options {
  value: string;
  title: string;
}

interface Tools {
  options: Array<Options>;
  sort: Function;
  valueSelect: string;
  search: (search: string) => void;
}

const Tools: FC<Tools> = ({ options, sort, valueSelect, search }) => {
  return (
    <div className="tools">
      <Select options={options} sort={sort} valueSelect={valueSelect} />
      <Input search={search} />
    </div>
  );
};

export default Tools;
