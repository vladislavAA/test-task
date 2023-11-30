import { Global } from "@emotion/react";
import { FC } from "react";
import Cars from "./pages/Cars/Cars";
import { GLOBAL_STYLES } from "./styles/global.styles";
import "./styles/font.css";
import AppRouter from "./pages";

const App: FC = () => {
  return (
    <div>
      <AppRouter />
      <Global styles={GLOBAL_STYLES} />
    </div>
  );
};

export default App;
