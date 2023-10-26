import SocialLink from "../../components/SocialLink/SocialLink";
import { FaWhatsapp } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";
import "./Footer.scss";

const Footer = () => (
  <footer className="footer__container">
    <div className="footer__block">
      <img
        src="https://thumb.tildacdn.com/tild3139-3438-4465-b834-656330343861/-/resize/240x/-/format/webp/1.png"
        alt="logo"
      />
      <span>Политика конфиденциальности</span>
      <div className="footer__icons">
        <SocialLink icon={<SlSocialVkontakte />} />
        <SocialLink icon={<FaWhatsapp />} />
      </div>
    </div>
  </footer>
);

export default Footer;
