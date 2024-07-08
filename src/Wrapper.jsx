import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Alert, debounce, useMediaQuery } from "@mui/material";
import Content from "./parts/Content/Content";
import Header from "./parts/Header/Header";
import Footer from "./parts/Footer/Footer";
import modal from "../src/store/modal";
import ModalContent from "./parts/Modal/Modal";
import SignUpContent from "./components/ModalContent/SignUpContent/SignUpContent";
import Payment from "./components/ModalContent/Payment/Payment";
import FixedBtnRecord from "./new_components/FixedBtnRecord/FixedBtnRecord";
import DraggingModal from "./new_components/DraggingModal/DraggingModal";

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

  const isXS = useMediaQuery("(max-width:700px)");
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset ?? document?.body?.scrollTop;
    const visible = prevScrollPos > currentScrollPos;

    setPrevScrollPos(currentScrollPos);
    setVisible(visible);
  }, 0);

  useEffect(() => {
    if (isXS) {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [prevScrollPos, visible, handleScroll, isXS]);

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
      <Header className={visible ? "active" : "hidden"} />
      <Content />
      <Footer />
      <DraggingModal />
      {isXS && <FixedBtnRecord />}
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
