import PropTypes from "prop-types";
import "./SocialLink.scss";

const SocialLink = ({ icon, url }) => (
  <a href={url} target="_blank" alt="url" rel="noreferrer">
    <div className="header__social-link">
      <img src={icon} alt="icon" loading="lazy" />
    </div>
  </a>
);

SocialLink.propTypes = {
  icon: PropTypes.node,
  url: PropTypes.string,
};

export default SocialLink;
