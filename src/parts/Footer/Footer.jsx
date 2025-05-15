import SocialLink from "../../components/SocialLink/SocialLink";
import offer from "../../docs/offer.pdf";
import privacyPolicy from "../../docs/privacy_policy.pdf";
import { LINK_VK, LINK_WHATS_UP } from "./consts";
import vk_mobile from "../../assets/whatsup_white.svg";
import whatsup from "../../assets/vk_white.svg";
import logoWhite from "../../assets/logoWhite.svg";
import "./Footer.scss";

const Footer = () => (
  <footer className="footer__container">
    <div className="footer__block">
      <div className="footer__links">
        <div className="footer__logo">
          <img src={logoWhite} alt="logo" loading="lazy" />
        </div>
        <div className="footer__icons">
          <SocialLink icon={whatsup} url={LINK_WHATS_UP} />
          <SocialLink icon={vk_mobile} url={LINK_VK} />
        </div>
      </div>

      <div className="footer__docs">
        <a href={offer} target="_blank" rel="noreferrer">
          Договор оферты
        </a>
        <a href={privacyPolicy} target="_blank" rel="noreferrer">
          Политика конфиденциальности
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
