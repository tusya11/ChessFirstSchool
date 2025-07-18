import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";
import image4 from "./images/image4.jpg";
import image5 from "./images/image5.jpg";
import image6 from "./images/image6.jpg";
import image7 from "./images/image7.jpg";
import image8 from "./images/image8.jpg";
import image9 from "./images/image9.jpg";
import image10 from "./images/image10.jpg";
import image11 from "./images/image11.jpg";
import image12 from "./images/image12.jpg";
import image13 from "./images/image13.jpg";
import image14 from "./images/image14.jpg";
import image15 from "./images/image15.jpg";
import image16 from "./images/image16.jpg";
import image17 from "./images/image17.jpg";
import image18 from "./images/image18.jpg";
import image19 from "./images/image19.jpg";
import image20 from "./images/image20.jpg";
import image21 from "./images/image21.jpg";
import image22 from "./images/image22.jpg";
import image23 from "./images/image23.jpg";
import image24 from "./images/image24.jpg";
import image25 from "./images/image25.jpg";

import "./ProudStudentsPage.scss";

const ProudStudentsPage = () => {
  const photos = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
    image20,
    image21,
    image22,
    image23,
    image24,
    image25,
  ];
  const [selectedId, setSelectedId] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 20,
      },
    },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
      },
    },
    exit: { opacity: 0, scale: 0.9 },
  };

  const handleNext = () => {
    setSelectedId((prev) => (prev + 1) % photos.length);
  };

  const handlePrev = () => {
    setSelectedId((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const handleSwipe = (info) => {
    if (info.offset.x > 50) handlePrev();
    if (info.offset.x < -50) handleNext();
  };

  return (
    <section className="children-gallery">
      <motion.div
        className="gallery-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Наши Дети</h2>
        <p>Яркие моменты счастливого детства</p>
      </motion.div>

      <motion.div
        className="photo-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {photos.map((photo, index) => (
          <motion.div
            key={`thumb-${index}`}
            className={`photo-card card-${index % 4}`}
            variants={itemVariants}
            onClick={() => setSelectedId(index)}
            whileHover={{
              scale: !isMobile ? 1.05 : 1,
              zIndex: 1,
              boxShadow: !isMobile
                ? "0 10px 25px -5px rgba(0, 0, 0, 0.2)"
                : "none",
            }}
            whileTap={isMobile ? { scale: 0.98 } : {}}
          >
            <div className="image-wrapper">
              <img src={photo} alt={`Ребенок ${index + 1}`} loading="lazy" />
            </div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedId !== null && (
          <motion.div
            className="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              className="modal-content"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              drag={isMobile ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, info) => handleSwipe(info)}
            >
              {!isMobile && (
                <button
                  className="nav-btn prev"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  &larr;
                </button>
              )}

              <div className="modal-image">
                <img
                  src={photos[selectedId]}
                  alt={`Ребенок ${selectedId + 1}`}
                  draggable="false"
                />
                <div className="photo-counter">
                  {selectedId + 1} / {photos.length}
                </div>
              </div>

              {!isMobile && (
                <button
                  className="nav-btn next"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  &rarr;
                </button>
              )}

              <button
                className="close-btn"
                onClick={() => setSelectedId(null)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProudStudentsPage;
