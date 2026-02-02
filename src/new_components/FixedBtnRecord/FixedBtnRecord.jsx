import { Button, ConfigProvider } from "antd";
import modal from "../../store/modal";
import "./FixedBtnRecord.scss";

const FixedBtnRecord = () => {
  const { setIsOpenModal } = modal;

  const handleClickButton = (e) => {
    e.stopPropagation();
    setIsOpenModal(true);
  };

  return (
    <div className="fixed-btn-record">
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
          className="fixed-btn-record__button"
        >
          Записаться
        </Button>
      </ConfigProvider>
    </div>
  );
};

export default FixedBtnRecord;
