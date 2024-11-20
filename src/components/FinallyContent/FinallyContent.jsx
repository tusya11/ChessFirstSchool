import React from "react";
import { Button, ConfigProvider, Space, Typography } from "antd";
import finallyImage from "./assets/done_finally.png";

import "./FinallyContent.scss";

const { Title, Text } = Typography;

const FinallyContent = ({ onClose }) => (
  <Space className="finally-content__container">
    <Space className="finally-content__image">
      <img src={finallyImage} alt="finally-img" loading="lazy" />
    </Space>
    <Space className="finally-content__title-container" direction="vertical">
      <Title level={2} className="finally-content__title">
        Спасибо
        <br />
        за обращение
      </Title>
      <Text className="finally-content__text">
        Куратор свяжется с вами в течении рабочего дня
      </Text>
    </Space>
    <Space className="finally-button">
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
          onClick={onClose}
        >
          Хорошо
        </Button>
      </ConfigProvider>
    </Space>
  </Space>
);

export default FinallyContent;
