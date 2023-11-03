import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Alert } from "@mui/material";
import Content from "./parts/Content/Content";
import Header from "./parts/Header/Header";
import Footer from "./parts/Footer/Footer";
import modal from "../src/store/modal";
import ModalContent from "./parts/Modal/Modal";
import SignUpContent from "./components/ModalContent/SignUpContent/SignUpContent";

const Wrapper = observer(() => {
  const { isOpenModal, setIsOpenModal, alertMsg, setAlertMsg } = modal;

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => setAlertMsg({}), 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [alertMsg.visible, setAlertMsg]);

  return (
    <div style={{ position: "relative" }}>
      <Header />
      <Content />
      <Footer />
      {isOpenModal && (
        <ModalContent onClose={handleCloseModal} isOpen={isOpenModal}>
          <SignUpContent />
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
