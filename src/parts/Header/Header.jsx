import { BsWhatsapp } from "react-icons/bs";
import { useSearchParams } from "react-router-dom";
import SocialLink from "../../components/SocialLink/SocialLink";
import RecordButton from "../../components/RecordButton/RecordButton";
import { contactNumber, urlToWhatsApp } from "../../utils/globalConstants";
import { navigatePanel } from "./consts";
import logo from "../../assets/logo.svg";
import "./Header.scss";

const Header = () => {
  // eslint-disable-next-line no-unused-vars
  const [_, setSearchParams] = useSearchParams({ block: "" });

  const handleClickLink = (link) => {
    setSearchParams({ block: link });
  };

  return (
    <header className="header">
      <div className="header__image-container">
        <a href="/">
          <img className="header__image" src={logo} alt="" />
        </a>
      </div>
      <div className="header__navigate-block">
        {navigatePanel.map((v) => (
          <span
            key={v.id}
            className="header__navigate-item"
            onClick={() => handleClickLink(v.link)}
          >
            {v.title} <span></span>
          </span>
        ))}
      </div>
      <div className="header__info-block">
        <div className="header__number-phone">
          <a href={`tel:${contactNumber}`}>{contactNumber}</a>
        </div>
        <SocialLink
          icon={<BsWhatsapp cssClasses="header__icon" color={"#827a7a"} beat />}
          url={urlToWhatsApp}
        />
        <RecordButton />
      </div>
    </header>
  );
};

export default Header;
