import { Button, ConfigProvider } from "antd";
import { useMediaQuery } from "@mui/material";
import modal from "../../store/modal";
import "./Preview.scss";

const Preview = () => {
  const isXS = useMediaQuery("(max-width:700px)");
  const { setIsOpenModal } = modal;

  const handleClickButton = () => {
    setIsOpenModal(true);
  };

  return (
    <section className="preview__container" id="preview__container">
      <div className="preview__content">
        <div className="preview__right-content-container">
          <div className="preview__right-content__block">
            <div className="preview__info-message">
              <span className="preview__info-message__text">
                Бесплатный пробный урок
              </span>
            </div>
            <div className="preview__main-text">
              <h1 className="preview__main-text__title">
                Шахматная онлайн школа
              </h1>
              <div>
                <p className="preview__additional-text">
                  Вместе с{" "}
                  <span className="preview__additional-text__title">
                    CoolChess
                  </span>
                  , вы создаете успешное{isXS ? " " : <br></br>}
                  будущее ваших детей в&nbsp;настоящем!
                </p>
              </div>
            </div>
            <div className="preview__button">
              <ConfigProvider
                theme={{
                  components: {
                    Button: {
                      colorPrimary: ` #DCE204`,
                      colorPrimaryHover: `#464BFF`,
                      colorPrimaryActive: `#262def`,
                      lineWidth: 0,
                      fontWeight: "600",
                    },
                  },
                }}
              >
                <Button
                  type="primary"
                  onClick={handleClickButton}
                  size="large"
                  className="preview__button-sign-up"
                >
                  Начать заниматься
                </Button>
              </ConfigProvider>
            </div>
          </div>
        </div>
        <div className="preview__left-content">
          <div className="preview__left-block">
            <img
              src={
                isXS
                  ? `${process.env.PUBLIC_URL}/images/mobile_image.png`
                  : `${process.env.PUBLIC_URL}/images/desk_image.png`
              }
              alt="preview__icon"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Preview;
