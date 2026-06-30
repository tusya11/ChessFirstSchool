import React, { useState, useEffect } from "react";
import { Typography } from "antd";
import { MailOutlined, ClockCircleOutlined } from "@ant-design/icons";
import "./InfoMessage.scss";

const { Text } = Typography;

const InfoMessage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`info-message ${isVisible ? "fade-in" : ""}`}>
      <div className="info-message__icon-wrapper">
        <div className="info-message__icon-pulse">
          <MailOutlined className="info-message__icon" />
        </div>
        <div className="info-message__icon-ring"></div>
      </div>

      <div className="info-message__content">
        <Text className="info-message__title">
          <ClockCircleOutlined className="info-message__clock-icon" />
          Важная информация
        </Text>
        <Text className="info-message__text">
          Ссылку на мероприятие мы пришлём вам за{" "}
          <strong>день до начала</strong>
          <span className="info-message__emoji">🎯</span>
        </Text>
        <div className="info-message__badge">
          <span className="info-message__badge-text">Проверьте почту</span>
        </div>
      </div>
    </div>
  );
};

export default InfoMessage;
