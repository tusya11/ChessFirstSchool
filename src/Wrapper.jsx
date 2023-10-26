import Content from "./parts/Content/Content";
import Header from "./parts/Header/Header";
import Footer from "./parts/Footer/Footer";
// import Modal from "./parts/Modal/Modal";
// import SignUpContent from "./components/ModalContent/SignUpContent/SignUpContent";

const Wrapper = () => {
  return (
    <div style={{ position: "relative" }}>
      <Header />
      <Content />
      <Footer />
      {/* <Modal>
        <SignUpContent />
      </Modal> */}
    </div>
  );
};

export default Wrapper;
