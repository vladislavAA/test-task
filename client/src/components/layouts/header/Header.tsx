import { FC, memo } from "react";
import Logo from "../../../assets/Logo";
import Heart from "../../../assets/Heart";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import ButtonCatalog from "../../elements/buttonCatalog/ButtonCatalog";
import "./Header.css";

const Header: FC = () => {
  const navigate = useNavigate();
  const pageTo = () => {
    navigate("/");
  };
  return (
    <div className="header">
      <div className="header__body">
        <div className="header__left-part">
          <Logo />
          <div className="header__left-part-nav">
            <ButtonCatalog click={pageTo} />
          </div>
        </div>
        <div className="header__right-part">
          <div className="header__right-part-info">
            <span>Москва, Волгоградский пр-кт, 43, стр 1</span>
            <a href="tel:+78005553535" className="header__right-part-phone">
              +7 800 555 35 35
            </a>
          </div>
          <div className="header__right-part-favorites">
            <Heart />
            <Link to="/favorites" className="header__right-part-link">
              Избранное
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
