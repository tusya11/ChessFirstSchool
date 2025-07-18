import { Space } from 'antd';
import './SelectedElement.scss';

const SelectedElement = ({ content, id, selected, onClick, styles = {} }) => (
  <Space
    className={`selected-element__container ${selected && 'active'}`}
    style={styles}
    onClick={() => onClick(id, selected)}
  >
    {content}
  </Space>
);

export default SelectedElement;
