import SocialLink from "../../components/SocialLink/SocialLink";
import { FaWhatsapp } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";
import offer from "../../docs/offer.pdf";
import privacyPolicy from "../../docs/privacy_policy.pdf";
import "./Footer.scss";
import { LINK_VK, LINK_WHATS_UP } from "./consts";

const Footer = () => (
  <footer className="footer__container">
    <div className="footer__block">
      <img
        src="https://thumb.tildacdn.com/tild3139-3438-4465-b834-656330343861/-/resize/240x/-/format/webp/1.png"
        alt="logo"
      />
      <div className="footer__docs">
        <a href={offer} target="_blank" rel="noreferrer">
          Договор оферты
        </a>
        <a href={privacyPolicy} target="_blank" rel="noreferrer">
          Политика конфиденциальности
        </a>
      </div>
      <div className="footer__icons">
        <SocialLink icon={<SlSocialVkontakte />} url={LINK_VK} />
        <SocialLink icon={<FaWhatsapp />} url={LINK_WHATS_UP} />
      </div>
    </div>
  </footer>
);

export default Footer;
