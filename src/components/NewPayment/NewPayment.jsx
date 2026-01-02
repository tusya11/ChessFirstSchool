import { useEffect, useState } from "react";
// import axios from "axios";
import { Button, Checkbox, ConfigProvider, Space, Typography } from "antd";
import SectionItem from "./components/SectionItem/SectionItem";
import SelectedElement from "../SelectedElement/SelectedElement";
import { PaymentLogos } from "./components/PaymentLogos/PaymentLogos";
import InputCustom from "../InputCustom/InputCustom";
import { URL } from "./consts";
// import { formatPhoneNumber } from "./utils";
import privacyPolicy from "../../docs/privacy_policy.pdf";
import videoPrivacyPolicy from "../../docs/videoPrivacyPolicy.pdf";
import { useResponsive } from "../../hooks/useResponsive";
// import dolyameLogo from "./assets/dolyame_logo.png";
// import modal from "../../store/modal";

import "./NewPayment.scss";

const { Title, Text } = Typography;

// const domain = process.env.REACT_APP_API_URL;
// const urlRequest = process.env.REACT_APP_NEST_URL;

const initialErrors = {
  fio: false,
  email: false,
  telephone: false,
  rate: false,
  privacyPolicy: false,
  videoPrivacyPolicy: false,
};

const NewPayment = ({ payment = {}, tarif = {} }) => {
  const { isXS } = useResponsive();
  const [stateRate, setStateRate] = useState([]);

  useEffect(() => {
    setStateRate(
      payment.itemPrices?.map((v) => ({
        ...v,
        selected: v.id === tarif?.id,
      })) || []
    );
  }, [payment, tarif]);

  const [objValue, setObjValue] = useState({
    fio: "",
    email: "",
    telephone: "",
  });

  const [errors, setErrors] = useState(initialErrors);
  const [isCheckedPrivacy, setIsCheckedPrivacy] = useState(false);
  const [isCheckedVideoPolicy, setIsCheckedVideoPolicy] = useState(false);

  const handleClickSelectedElement = (id, type) => {
    const changedStateRate = stateRate.map((v) => ({
      ...v,
      selected: v.id === id ? !type : false,
    }));
    setStateRate(changedStateRate);
    if (errors.rate) setErrors((prev) => ({ ...prev, rate: false }));
  };

  const handleChange = (field, event) => {
    setObjValue({ ...objValue, [field]: event.target.value });
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: false }));
  };

  const handleCheckboxChange = (type) => {
    if (type === "privacy") {
      setIsCheckedPrivacy(!isCheckedPrivacy);
      if (errors.privacyPolicy)
        setErrors((prev) => ({ ...prev, privacyPolicy: false }));
    } else {
      setIsCheckedVideoPolicy(!isCheckedVideoPolicy);
      if (errors.videoPrivacyPolicy)
        setErrors((prev) => ({ ...prev, videoPrivacyPolicy: false }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const hasErrors =
      Object.values(objValue).some((v) => v.trim() === "") ||
      !stateRate.some((v) => v.selected) ||
      !isCheckedPrivacy ||
      !isCheckedVideoPolicy;

    if (hasErrors) {
      setErrors({
        fio: !objValue.fio,
        email: !objValue.email,
        telephone: !objValue.telephone,
        rate: !stateRate.some((v) => v.selected),
        privacyPolicy: !isCheckedPrivacy,
        videoPrivacyPolicy: !isCheckedVideoPolicy,
      });
      return;
    }

    if (window.ym) {
      window.ym(96915259, "reachGoal", "BUTTON_CLICK");
    }
    event.target.submit();
  };

  // const handleClickSplittingPay = async () => {
  //   const { fio, telephone, email } = objValue;
  //   const transformedPhone = formatPhoneNumber(telephone);

  //   const getViaPerson = () => fio && fio.split(" ");
  //   const personDetails = getViaPerson();
  //   const selectedTarif = stateRate.find((v) => v.selected);

  //   const requestBody = {
  //     order: {
  //       id: "cool-chess-" + new Date().getTime(),
  //       status: "approved",
  //       amount: selectedTarif.price_rub,
  //       items: [
  //         {
  //           name: "Оплата услуги по шахматам",
  //           quantity: selectedTarif.descriptionNumber,
  //           price: selectedTarif.price_rub / selectedTarif.descriptionNumber,
  //         },
  //       ],
  //     },
  //     client_info: {
  //       email: email,
  //       phone: transformedPhone,
  //       first_name: personDetails?.[1] || undefined,
  //       last_name: personDetails?.[0] || undefined,
  //       middle_name: personDetails?.[2] || undefined,
  //     },
  //     success_url: `${domain}/success`,
  //     fail_url: `${domain}/fail`,
  //     notification_url: "https://cool-chess.ru/dolyami/email",
  //   };

  //   const urlDolyame = `${urlRequest}dolyami/create`;

  //   try {
  //     const response = await axios.post(urlDolyame, requestBody);

  //     const orderDetails = {
  //       orderId: response.data.orderId,
  //       uuid: response.data.uuid,
  //     };

  //     localStorage.setItem("order", JSON.stringify(orderDetails));
  //     //отправка статистики в Яндекс Метрику
  //     if (window.ym) {
  //       window.ym(96915259, "reachGoal", "BUTTON_CLICK");
  //     }

  //     // window.open(response.data.link, "_blank");
  //     window.location.href = response.data.link;
  //   } catch (e) {
  //     console.error("---e", e);
  //     setAlertMsg({
  //       status: "error",
  //       message: e.response.data.message,
  //       visible: true,
  //     });
  //   }
  // };

  return (
    <Space
      direction="vertical"
      size="large"
      style={{ display: "flex" }}
      className="new-payment__container"
    >
      <Title level={2} className="new-payment__title">
        Оплата занятий
      </Title>
      <Space className="new-payment__main-content">
        <form
          className="new-payment__form"
          method="POST"
          action={URL + "/create/"}
          onSubmit={handleSubmit}
        >
          <input
            className="new-payment__display-none"
            type="text"
            name="service_name"
            value="Оплата занятий"
          />
          <Space className="new-payment__section-item-1">
            <SectionItem
              title="Выберите количество занятий"
              number={1}
              mb={20}
            />
            <Space
              className="new-payment__selected-elements"
              direction="vertical"
            >
              {stateRate.map((v) => {
                const Component = (
                  <div className="new-payment__tarif">
                    <div className="new-payment__description">
                      {v.description}
                    </div>
                    <div className="new-payment__price">{v.price} ₽</div>
                  </div>
                );
                return (
                  <SelectedElement
                    key={v.id}
                    content={Component}
                    id={v.id}
                    selected={v.selected}
                    onClick={handleClickSelectedElement}
                    styles={isXS ? {} : { height: 50 }}
                  />
                );
              })}
            </Space>
            <input
              className="new-payment__display-none"
              type="text"
              name="sum"
              value={stateRate?.find((v) => v.selected)?.price_rub || ""}
            />
            {errors.rate && (
              <Space className="new-payment__error-text">
                <Text type="danger">Выберите количество занятий</Text>
              </Space>
            )}
          </Space>
          <Space className="new-payment__section-item-2">
            <SectionItem title="Укажите ваши данные" number={2} mb={20} />
            <Space className="new-payment__user-data" direction="vertical">
              <InputCustom
                value={objValue.fio}
                onChange={(event) => handleChange("fio", event)}
                label="ФИО"
                name="Telephone"
                autoFocus
                error={errors.fio}
              />
              <input
                className="new-payment__display-none"
                type="text"
                name="clientid"
                value={objValue.fio}
              />
              {errors.fio && (
                <Space className="new-payment__error-text">
                  <Text type="danger">Укажите ФИО</Text>
                </Space>
              )}
              <Space
                className="new-payment__two-inputs"
                style={{ marginBottom: 16, width: "100%" }}
              >
                <Space
                  direction="vertical"
                  style={isXS ? { width: "100%" } : {}}
                >
                  <InputCustom
                    value={objValue.email}
                    onChange={(event) => handleChange("email", event)}
                    label="Email"
                    name="Telephone"
                    autoFocus
                    error={errors.email}
                    type="email"
                  />
                  <input
                    className="new-payment__display-none"
                    type="text"
                    name="client_email"
                    value={objValue.email}
                  />
                  {errors.email && (
                    <Space className="new-payment__error-text">
                      <Text type="danger">Укажите Email</Text>
                    </Space>
                  )}
                </Space>
                <Space
                  direction="vertical"
                  style={isXS ? { width: "100%" } : {}}
                >
                  <InputCustom
                    value={objValue.telephone}
                    onChange={(event) => handleChange("telephone", event)}
                    label="Телефон"
                    type={"telephone"}
                    name="Telephone"
                    autoFocus
                    error={errors.telephone}
                  />
                  <input
                    className="new-payment__display-none"
                    type="text"
                    name="client_phone"
                    value={objValue.telephone}
                  />
                  {errors.telephone && (
                    <Space className="new-payment__error-text">
                      <Text type="danger">Укажите номер телефона</Text>
                    </Space>
                  )}
                </Space>
              </Space>
              <Space className="new-payment__privacy-policy">
                <Checkbox
                  onChange={() => handleCheckboxChange("privacy")}
                  className={`new-payment__policy__checkbox ${errors.privacyPolicy && "error"}`}
                  checked={isCheckedPrivacy}
                >
                  <span className="new-payment__policy__title">
                    Я согласен с{" "}
                    <a href={privacyPolicy} target="_blank" rel="noreferrer">
                      политикой конфиденциальности
                    </a>
                  </span>
                </Checkbox>
                {errors.privacyPolicy && (
                  <Space className="new-payment__error-text">
                    <Text type="danger">Обязательно для заполнения</Text>
                  </Space>
                )}
              </Space>
              <Space className="new-payment__privacy-policy">
                <Checkbox
                  onChange={() => handleCheckboxChange("video")}
                  className={`new-payment__policy__checkbox ${errors.videoPrivacyPolicy && "error"}`}
                  checked={isCheckedVideoPolicy}
                >
                  <span className="new-payment__policy__title">
                    Я согласен с{" "}
                    <a
                      href={videoPrivacyPolicy}
                      target="_blank"
                      rel="noreferrer"
                    >
                      политикой использования видеоматериалов
                    </a>
                  </span>
                </Checkbox>
                {errors.videoPrivacyPolicy && (
                  <Space className="new-payment__error-text">
                    <Text type="danger">Обязательно для заполнения</Text>
                  </Space>
                )}
              </Space>
            </Space>
          </Space>
          <div className="new-payment__payment-methods">
            <PaymentLogos />
          </div>
          <Space className="new-payment__buttons">
            {/* /TODO: закомментировано, так как истекли сертификаты и на данный момент не используется сервис */}
            {/* <ConfigProvider
              theme={{
                components: {
                  Button: {
                    colorPrimary: `black`,
                    colorPrimaryHover: `#464BFF`,
                    colorPrimaryActive: `#464BFF`,
                    lineWidth: 0,
                    fontWeight: "600",
                    paddingBlock: 18,
                    paddingInline: 20,
                  },
                },
              }}
            >
              <Button
                onClick={handleClickSplittingPay}
                type="primary"
                className="new-payment__button"
              >
                Оплатить{" "}
                <div className="new-payment__dolyame-logo">
                  <img src={dolyameLogo} alt="dolyame-logo" loading="lazy" />
                </div>
              </Button>
            </ConfigProvider> */}
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
                htmlType="submit"
                type="primary"
                className="new-payment__button"
              >
                Банковской картой
              </Button>
            </ConfigProvider>
          </Space>
        </form>
      </Space>
    </Space>
  );
};

export default NewPayment;
