import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import Cars from "./Cars/Cars";
import Favorites from "./Favorites/Favorites";

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Cars />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
};

export default AppRouter;
