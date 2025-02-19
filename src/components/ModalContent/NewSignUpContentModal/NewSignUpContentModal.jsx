import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { useMediaQuery } from "@mui/material";
import {
  Button,
  Checkbox,
  ConfigProvider,
  Drawer,
  Space,
  Spin,
  Typography,
} from "antd";
import InputCustom from "../../InputCustom/InputCustom";
import SelectedElement from "../../SelectedElement/SelectedElement";
import { messengersData } from "./consts";
import modal from "../../../store/modal";
import { scriptURL } from "../SignUpContent/consts";
import privacyPolicy from "../../../docs/privacy_policy.pdf";
import FinallyContent from "../../FinallyContent/FinallyContent";

import "./NewSignUpContentModal.scss";

const { Title, Text } = Typography;

const NewSignUpContentModal = ({ isOpen, onClose }) => {
  const isXS = useMediaQuery("(max-width:700px)");
  const [isCheckedPrivacy, setIsCheckedPrivacy] = useState(false);

  const { setAlertMsg } = modal;
  const [objValue, setObjValue] = useState({
    telephone: "",
    city: "",
    name: "",
    age: "",
  });

  const [messengers, setMessengers] = useState(messengersData);
  const [disabled, setDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isFinallyStep, setIsFinallyStep] = useState(false);

  const handleChange = (des, event) => {
    setObjValue({ ...objValue, [des]: event.target.value });
  };

  const handleClickSelectedElement = (id, type) => {
    const changedMessengerArray = messengers.map((v) => {
      if (v.id === id) {
        return {
          ...v,
          selected: !type,
        };
      }

      return { ...v, selected: false };
    });

    setMessengers(changedMessengerArray);
  };

  const onChangeCheckBox = () => {
    setIsCheckedPrivacy((prev) => !prev);
  };

  const handleClickSend = (e) => {
    e.preventDefault();
    setIsLoading(true);

    let formData = new FormData();
    const selectedLink = messengers.find((v) => v.selected);

    formData.append("Messenger", selectedLink.title);
    formData.append("Telephone", objValue.telephone);
    formData.append("City", objValue.city);
    formData.append("Date", dayjs().format("DD-MM-YYYY HH:mm:ss"));
    formData.append("Name", objValue.name);
    formData.append("Age", objValue.age);

    fetch(scriptURL, { method: "POST", body: formData })
      .then((response) => {
        setAlertMsg({
          status: "success",
          message: "Данные успешно добавлены!",
          visible: true,
        });
        setIsFinallyStep(true);
      })
      .catch((error) => {
        setAlertMsg({
          status: "error",
          message: "Что-то пошло не так...",
          visible: true,
        });
        console.error("Error!", error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });

    //отправка статистики Facebook Pixel при отправке формы
    if (window.fbq) {
      window.fbq("track", "Lead");
    }
  };

  useEffect(() => {
    const selectedLink = messengers.find((v) => v.selected);

    if (
      isCheckedPrivacy &&
      selectedLink?.id &&
      Object.values(objValue).every((v) => v)
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [objValue, messengers, isCheckedPrivacy]);

  return (
    <Drawer
      placement={"right"}
      width={isXS ? "100%" : "60%"}
      onClose={onClose}
      open={isOpen}
      styles={{
        header: {
          display: "flex",
          marginLeft: "auto",
          border: "none",
        },
      }}
      className={`new-sign-up-content-modal__container ${
        isFinallyStep && "finallyStep"
      }`}
    >
      {isFinallyStep && <FinallyContent onClose={onClose} />}
      {!isFinallyStep && (
        <Spin spinning={isLoading}>
          <Space direction="vertical" size="large" style={{ display: "flex" }}>
            <Title level={2} className="new-sign-up-content-modal__title">
              Записаться
              <br />
              на обучение
            </Title>
            <Space
              direction="vertical"
              size="small"
              style={{ display: "flex" }}
            >
              <Text className="new-sign-up-content-modal__additional-text-1">
                Подберем тренера и подходящую программу обучения под ваши навыки
                и задачи
              </Text>
              <Text className="new-sign-up-content-modal__additional-text-2">
                Куратор школы свяжется с вами, чтобы подобрать удобное время для
                проведения пробного занятия
              </Text>
            </Space>
            <Space
              direction="vertical"
              className="new-sign-up-content-modal__paper-form"
            >
              <Space
                direction="vertical"
                className="new-sign-up-content-modal__paper-form-space"
              >
                <InputCustom
                  value={objValue.telephone}
                  onChange={(event) => handleChange("telephone", event)}
                  label="Телефон"
                  type={"telephone"}
                  name="Telephone"
                  autoFocus
                />
                <InputCustom
                  value={objValue.city}
                  onChange={(event) => handleChange("city", event)}
                  label="Ваш город"
                  name="City"
                  autoComplete="off"
                  autoFocus
                />
                <InputCustom
                  value={objValue.name}
                  onChange={(event) => handleChange("name", event)}
                  label="Имя ребенка"
                  name="Name"
                  autoComplete="off"
                  autoFocus
                />
                <InputCustom
                  value={objValue.age}
                  onChange={(event) => handleChange("age", event)}
                  label="Возраст ребенка"
                  name="Age"
                  type="number"
                  autoComplete="off"
                  autoFocus
                />
              </Space>
              <Space
                direction="vertical"
                size="medium"
                className="new-sign-up-content-modal__additional-container"
              >
                <Text className="new-sign-up-content-modal__additional-text-1">
                  {isXS
                    ? "Выберите мессенджер"
                    : "Выберите мессенджер для обратной связи"}
                </Text>
                <Space
                  className="new-sign-up-content-modal__checkboxes"
                  direction="horizontal"
                  size="small"
                >
                  {messengers.map((v) => {
                    const Component = (
                      <div className="new-sign-up-content-modal__messanger">
                        <img src={v.icon} alt="messanger-icon" loading="lazy" />
                        <Text className="new-sign-up-content-modal__text">
                          {v.title}
                        </Text>
                      </div>
                    );
                    return (
                      <SelectedElement
                        key={v.id}
                        content={Component}
                        selected={v.selected}
                        id={v.id}
                        onClick={handleClickSelectedElement}
                      />
                    );
                  })}
                </Space>
                <Space className="new-sign-up-content-modal__privacy-policy">
                  <Checkbox
                    onChange={onChangeCheckBox}
                    className={`new-sign-up-content-modal__policy__checkbox`}
                    checked={isCheckedPrivacy}
                  >
                    <span className="new-sign-up-content-modal__policy__title">
                      Я согласен с{" "}
                      <a href={privacyPolicy} target="_blank" rel="noreferrer">
                        политикой конфиденциальности
                      </a>
                    </span>
                  </Checkbox>
                </Space>
              </Space>
              <Space className="new-sign-up-content-modal__button">
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
                    size="large"
                    className="button"
                    onClick={handleClickSend}
                    disabled={disabled}
                  >
                    Отправить
                  </Button>
                </ConfigProvider>
              </Space>
            </Space>
          </Space>
        </Spin>
      )}
    </Drawer>
  );
};

export default NewSignUpContentModal;
