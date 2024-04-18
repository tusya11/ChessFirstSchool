import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Alert } from "@mui/material";
import Content from "./parts/Content/Content";
import Header from "./parts/Header/Header";
import Footer from "./parts/Footer/Footer";
import modal from "../src/store/modal";
import ModalContent from "./parts/Modal/Modal";
import SignUpContent from "./components/ModalContent/SignUpContent/SignUpContent";
import Payment from "./components/ModalContent/Payment/Payment";

const Wrapper = observer(() => {
  const {
    isOpenModal,
    setIsOpenModal,
    isOpenModalTransaction,
    setIsOpenModalTransaction,
    alertMsg,
    setAlertMsg,
    modalInfo,
  } = modal;

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => setAlertMsg({}), 4000);

    return () => {
      clearTimeout(timer);
    };
  }, [alertMsg.visible, setAlertMsg]);

  const handleCloseModalTransaction = () => setIsOpenModalTransaction(false);

  return (
    <div style={{ position: "relative", boxSizing: "border-box" }}>
      <Header />
      <Content />
      <Footer />
      {isOpenModal && (
        <ModalContent
          titleHeader="Записаться"
          onClose={handleCloseModal}
          isOpen={isOpenModal}
        >
          <SignUpContent />
        </ModalContent>
      )}
      {isOpenModalTransaction && (
        <ModalContent
          titleHeader="Оплата занятий"
          onClose={handleCloseModalTransaction}
          isOpen={isOpenModalTransaction}
        >
          <Payment data={modalInfo} />
        </ModalContent>
      )}
      {alertMsg.visible && (
        <Alert
          severity={alertMsg.status}
          style={{
            position: "fixed",
            bottom: 20,
            zIndex: 200,
            right: 20,
          }}
        >
          <strong>{alertMsg.message}</strong>
        </Alert>
      )}
    </div>
  );
});

export default Wrapper;
