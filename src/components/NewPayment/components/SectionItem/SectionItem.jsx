import React from "react";
import { Space, Typography } from "antd";
import "./SectionItem.scss";

const { Title } = Typography;

const SectionItem = ({ title, number, mb }) => (
  <Space className="section-item__container" style={{ marginBottom: mb }}>
    <Space className="section-item__number">{number}</Space>
    <Title level={5} className="section-item__title">
      {title}
    </Title>
  </Space>
);

export default SectionItem;
