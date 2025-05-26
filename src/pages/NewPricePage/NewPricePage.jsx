import React, { useState } from "react";
import { Button, Col, ConfigProvider, Drawer, Row, Segmented } from "antd";
import { useMediaQuery } from "@mui/material";
import clsx from "classnames";
import NewPayment from "../../components/NewPayment/NewPayment";
import MainTitleWithContent from "../../new_components/MainTitleWithContent/MainTitleWithContent";
import trophyImage from "./assets/trophy.png";
import dolyamiImage from "./assets/dolyami_image.png";
import dolyamiLogo from "./assets/dolyami_logo.png";

import "./NewPricePage.scss";

const NewPricePage = ({
  prices = [],
  hasAdditional = false,
  hideElements = false,
  titlePt = "0px",
}) => {
  const isXS = useMediaQuery("(max-width:700px)");
  const [priceData, setPriceData] = useState(prices[0]);
  const [tarif, setTarif] = useState({});
  const [valueOption, setValueOption] = useState(prices[0]?.flag);
  const options = [prices[0]?.flag, prices[1]?.flag, prices[2]?.flag];
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const handleChangeSegmented = (event) => {
    setValueOption(event);
    const foundElement = prices.find((v) => v.flag === event);

    if (foundElement) {
      setPriceData(foundElement);
    }
  };

  const handleClickButton = () => {
    setIsOpenDrawer(true);
  };

  const handleClickPriceData = (id) => {
    const foundTarif = priceData?.itemPrices?.find((v) => v.id === id);
    setTarif(foundTarif);
    handleClickButton();
  };

  return (
    <>
      <div className="new-price-page__container" id="new-price-page__container">
        <MainTitleWithContent
          title="Стоимость"
          padding={isXS ? `${titlePt} 0px` : `${titlePt} 40px 40px`}
          paddingLeftTitle={isXS && "15px"}
        >
          <Row className="new-price-page__content" id="price">
            <Col flex={1} className="new-price-page__image-container">
              <img
                src={priceData.image}
                alt="new-price-page-icon"
                className="new-price-page__image"
                loading="lazy"
              />
              {valueOption === prices[2]?.flag && (
                <div className="new-price-page__icon">
                  <img src={trophyImage} alt="icon-price-page" loading="lazy" />
                </div>
              )}
            </Col>
            <Col flex={1.5} className="new-price-page__main-content">
              <div className="new-price-page__segmented">
                <Segmented
                  options={options}
                  block
                  value={valueOption}
                  onChange={handleChangeSegmented}
                  className="new-price-page__segmented-component"
                />
              </div>
              <div className="new-price-page__paper-text">
                <h3 className="new-price-page__main-text">{priceData.title}</h3>
                <p className="new-price-page__subtitle">{priceData.subtitle}</p>
              </div>
              <div className="new-price-page__paper-price-items">
                {priceData.itemPrices.map((v) => (
                  <div
                    //TODO: убрать clsx и оставить один класс
                    className={clsx(
                      hasAdditional
                        ? "new-price-page__items-2"
                        : "new-price-page__items"
                    )}
                    key={v.id}
                    onClick={() => handleClickPriceData(v.id)}
                  >
                    <div className="new-price-page__block-description">
                      <p className="new-price-page__description">
                        {v.description}
                      </p>
                      <p className="new-price-page__price">{v.price} ₽</p>
                    </div>
                    {hasAdditional && (
                      <div className="new-price-page__additional-text">
                        <span>{v.additional_content}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {!hideElements && (
                <div className="new-price-page__button">
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
                      className="new-price-page__sign-up-btn"
                    >
                      Записаться на обучение
                    </Button>
                  </ConfigProvider>
                </div>
              )}
            </Col>
          </Row>
        </MainTitleWithContent>
      </div>
      {!hideElements && (
        <div className="new-price-page__dolyami">
          <div className="new-price-page__icon">
            <img src={dolyamiImage} alt="dolyami-icon" loading="lazy" />
          </div>
          <div className="new-price-page__quote">
            <div className="new-price-page__text">
              <p>
                Учитесь сейчас — <br />
                платите потом
              </p>
            </div>
            <div className="new-price-page__logo">
              <img src={dolyamiLogo} alt="dolyami_logo" loading="lazy" />
            </div>
          </div>
        </div>
      )}
      {!hideElements && (
        <Drawer
          placement={"right"}
          width={isXS ? "100%" : "50%"}
          onClose={() => setIsOpenDrawer((prev) => !prev)}
          open={isOpenDrawer}
          styles={{
            header: {
              display: "flex",
              marginLeft: "auto",
              border: "none",
            },
          }}
          className="new-price-page__drawer"
        >
          <NewPayment payment={priceData} tarif={tarif} />
        </Drawer>
      )}
    </>
  );
};

export default NewPricePage;
