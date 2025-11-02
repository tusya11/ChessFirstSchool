import { useState } from "react";
import { Button, ConfigProvider, Drawer } from "antd";
import { useSearchParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import clsx from "classnames";
import { useMediaQuery } from "@mui/material";
// import { urlToSignUpForClass } from '../../utils/globalConstants'
import whatsupLogo from "../../assets/whatsup_new.svg";
import menuButton from "../../assets/burgerMenuBtn.svg";
import { urlToWhatsApp } from "../../utils/globalConstants";
import NavigationItemsMobile from "./NavigationItemsMobile/NavigationItemsMobile";
import { navigatePanel } from "./consts";
import logo from "../../assets/logo.svg";
import modal from "../../store/modal";
import { openPersonalAccountCRM } from "../../utils/openPersonalAccountCRM";
import "./Header.scss";

const Header = observer(({ className }) => {
  const isXS = useMediaQuery("(max-width:700px)");
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const { setIsOpenModal } = modal;
  // eslint-disable-next-line no-unused-vars
  const [_, setSearchParams] = useSearchParams({ block: "" });
  const [search] = useSearchParams();
  const blockTitle = search.get("block");

  const handleClickLink = (link) => {
    if (link === "personal_account") {
      openPersonalAccountCRM();
      return;
    }

    setSearchParams({ block: link });
  };

  const handleClickButton = () => {
    // window.open(urlToSignUpForClass, '_blank', 'noopener,noreferrer');
    setIsOpenModal(true);
  };

  const handleClose = () => {
    setIsOpenDrawer(false);
  };

  return (
    <header className={clsx("header_main", className)}>
      <div className="header__image-container">
        <a href="/">
          <img className="header__image" src={logo} alt="" loading="lazy" />
        </a>
      </div>
      {isXS ? (
        <>
          <div
            className="header_menu_burger_button"
            onClick={() => setIsOpenDrawer(true)}
          >
            <img src={menuButton} alt="burger-menu-button" loading="lazy" />
          </div>
          <Drawer
            placement={"left"}
            width={"100%"}
            onClose={handleClose}
            open={isOpenDrawer}
            styles={{
              header: {
                display: "flex",
                marginLeft: "auto",
                border: "none",
              },
            }}
          >
            <NavigationItemsMobile onChoose={handleClose} />
          </Drawer>
        </>
      ) : (
        <div className="header__navigate-block">
          {navigatePanel.map((v) => (
            <div
              className={clsx(
                "header__navigate-block-item",
                blockTitle === v.link && "active-item"
              )}
              key={v.id}
              onClick={() => handleClickLink(v.link)}
            >
              <span className="header__navigate-item">{v.title}</span>
            </div>
          ))}
        </div>
      )}
      {!isXS && (
        <div className="header__info-block">
          <div className="header__social-link">
            <a
              href={urlToWhatsApp}
              target="_black"
              alt="url"
              rel="noreferrer"
              className="header__social-link__icon"
            >
              <img src={whatsupLogo} alt="social-link-whatsup" loading="lazy" />
            </a>
          </div>
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
              className="header__button"
            >
              Записаться
            </Button>
          </ConfigProvider>
        </div>
      )}
    </header>
  );
});

export default Header;
