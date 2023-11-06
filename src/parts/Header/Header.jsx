import { BsWhatsapp } from "react-icons/bs";
import { useSearchParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import SocialLink from "../../components/SocialLink/SocialLink";
import RecordButton from "../../components/RecordButton/RecordButton";
import { contactNumber, urlToWhatsApp } from "../../utils/globalConstants";
import { navigatePanel } from "./consts";
import logo from "../../assets/logo.svg";
import modal from "../../store/modal";
import "./Header.scss";

const Header = observer(() => {
  const { setIsOpenModal } = modal;
  // eslint-disable-next-line no-unused-vars
  const [_, setSearchParams] = useSearchParams({ block: "" });

  const handleClickLink = (link) => {
    setSearchParams({ block: link });
  };

  const handleClickButton = () => {
    setIsOpenModal(true);
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
          icon={<BsWhatsapp color={"#827a7a"} />}
          url={urlToWhatsApp}
        />
        <RecordButton onClick={handleClickButton} />
      </div>
    </header>
  );
});

export default Header;