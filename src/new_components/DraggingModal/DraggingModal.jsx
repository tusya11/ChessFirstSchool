import { useRef } from 'react';
import { SwipeableDrawer } from '@mui/material';
import './DraggingModal.scss';

const drawerBleeding = 56;

const DraggingModal = ({ isOpen, onOpen, onClose, children }) => {
  const drawerRef = useRef(null);
  const container = window !== undefined ? () => document?.body : undefined;

  return (
    <>
      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={isOpen}
        onClose={() => onClose(false)}
        onOpen={() => onOpen(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        allowSwipeInChildren={true}
        PaperProps={{
          className: 'dragging-modal__paper',
        }}
        SlideProps={{
          ref: drawerRef,
        }}
        ModalProps={{
          keepMounted: true,
          className: 'dragging-modal__content',
        }}
      >
        {children}
      </SwipeableDrawer>
    </>
  );
};

export default DraggingModal;
