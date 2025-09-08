import { useMediaQuery } from "@mui/material";
import { Drawer } from "antd";
// import { SignUpModalContent } from "../../../new_components/SignUpModalContent/SignUpModalContent";

import "./NewSignUpContentModal.scss";

const NewSignUpContentModal = ({ isOpen, onClose }) => {
  const isXS = useMediaQuery("(max-width:700px)");

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
      // className={`new-sign-up-content-modal__container ${
      //   isFinallyStep && "finallyStep"
      // }`}
      className="new-sign-up-content-modal__container"
    >
      <iframe
        src="https://coolchess.s20.online/common/1/form/draw?id=1&amp;baseColor=205EDC&amp;borderRadius=8&amp;css=%2F%2Fcdn.alfacrm.pro%2Flead-form%2Fform.css"
        width="100%"
        height="100%"
        frameborder="0"
        sandbox="allow-scripts allow-forms allow-same-origin"
        loading="lazy"
        title="Форма записи на урок"
      ></iframe>
      {/* <SignUpModalContent onClose={onClose} /> */}
    </Drawer>
  );
};

export default NewSignUpContentModal;
