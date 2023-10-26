import PropTypes from "prop-types";
import "./SocialLink.scss";

const SocialLink = ({ icon, url }) => (
  <a href={url} target="_blank" alt="url" rel="noreferrer">
    <div className="header__social-link">
      <span className="header__link-block">{icon}</span>
    </div>
  </a>
);

SocialLink.propTypes = {
  icon: PropTypes.node,
  url: PropTypes.string,
};

export default SocialLink;
