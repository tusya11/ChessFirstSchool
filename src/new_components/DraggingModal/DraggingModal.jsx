import React, { useState } from "react";
import { SwipeableDrawer } from "@mui/material";
import "./DraggingModal.scss";

const drawerBleeding = 56;

const DraggingModal = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const container = window !== undefined ? () => document?.body : undefined;

  const toggleDrawer = (newOpen) => () => {
    setIsOpen(newOpen);
  };

  return (
    <SwipeableDrawer
      container={container}
      anchor="bottom"
      open={isOpen}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
      swipeAreaWidth={drawerBleeding}
      disableSwipeToOpen={false}
      ModalProps={{
        keepMounted: true,
      }}
    >
      {/* {children}
       */}

      <div
        style={{
          height: 500,
        }}
      >
        Somebody
      </div>
    </SwipeableDrawer>
  );
};

export default DraggingModal;
