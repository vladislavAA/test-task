import { ChangeEvent, KeyboardEvent, FC, memo, useRef, useState } from "react";
import Search from "../../../assets/Search";
import "./Input.css";

interface Input {
  search: (search: string) => void;
}

const Input: FC<Input> = ({ search }) => {
  const [value, setValue] = useState("");
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleSearch = () => {
    search(value);
  };

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const pressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && buttonRef.current) buttonRef.current.click();
  };

  return (
    <div className="input">
      <input
        className="input__field"
        type="text"
        placeholder="Найти авто"
        onChange={(e) => onChangeValue(e)}
        value={value}
        onKeyDown={(e) => pressEnter(e)}
      />
      <button
        className="input__btn"
        onClick={() => handleSearch()}
        ref={buttonRef}
      >
        <Search />
      </button>
    </div>
  );
};

export default memo(Input);
