import { Button, ConfigProvider } from "antd";
import { useSearchParams } from "react-router-dom";

// import { urlToSignUpForClass } from "../../../utils/globalConstants";
import { navigatePanel } from "../consts";
import { contactNumber } from "../../../utils/globalConstants";
import whatsup from "../../../assets/whatsupMobile.svg";
import vk_mobile from "../../../assets/VK_Mobile.svg";

import SocialLink from "../../../components/SocialLink/SocialLink";
import { LINK_VK, LINK_WHATS_UP } from "../../Footer/consts";
import modal from "../../../store/modal";

import "./NavigationItemsMobile.scss";

const NavigationItemsMobile = ({ onChoose }) => {
  const { setIsOpenModal } = modal;
  // eslint-disable-next-line no-unused-vars
  const [_, setSearchParams] = useSearchParams({ block: "" });

  const handleClickButton = () => {
    // window.open(urlToSignUpForClass, '_blank', 'noopener,noreferrer');
    setIsOpenModal(true);
    onChoose();
  };

  const handleClickLink = (link) => {
    setSearchParams({ block: link });
    onChoose();
  };

  return (
    <div className="navigation-block__container">
      <div className="navigation-block__content">
        <div className="navigation-block_nav">
          {navigatePanel.map((v) => (
            <div
              key={v.id}
              className="navigation-block__item"
              onClick={() => handleClickLink(v.link)}
            >
              <span className="navigation-block__nav-el">{v.title}</span>
            </div>
          ))}
          <div className="navigation-block__number-phone">
            <a href={`tel:${contactNumber}`}>{contactNumber}</a>
          </div>
        </div>
        <div className="navigation-block__links">
          <SocialLink icon={whatsup} url={LINK_WHATS_UP} />
          <SocialLink icon={vk_mobile} url={LINK_VK} />
        </div>
      </div>
      <div className="navigation-block__button">
        <ConfigProvider
          theme={{
            components: {
              Button: {
                colorPrimary: ` #464BFF`,
                colorPrimaryHover: `black`,
                colorPrimaryActive: `black`,
                lineWidth: 0,
                fontWeight: "600",
                paddingBlock: 18,
                paddingInline: 20,
              },
            },
          }}
        >
          <Button
            type="primary"
            onClick={handleClickButton}
            size="large"
            className="sign-up__button"
          >
            Записаться
          </Button>
        </ConfigProvider>
      </div>
    </div>
  );
};

export default NavigationItemsMobile;
