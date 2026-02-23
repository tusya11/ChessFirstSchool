import { useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import { approachToLearning } from "./consts";
import "./AboutUsPage.scss";
import MainTitleWithContent from "../../new_components/MainTitleWithContent/MainTitleWithContent";

const AboutUsPage = () => {
  const isXS = useMediaQuery("(max-width:700px)");

  return (
    <div className="about-us-page__container" id="about">
      <MainTitleWithContent
        title="Наш подход к&nbsp;обучению"
        padding={isXS ? "0 0 60px 15px" : ""}
      >
        <div className="about-us-page__block-scroll">
          {approachToLearning.map((item, index) => (
            <motion.div
              key={item.id}
              className="about-us-page__block"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="about-us-page__content-image">
                <img
                  src={item.image}
                  alt="content-about-us-page"
                  loading="lazy"
                />
              </div>
              <div className="about-us-page__content-block">
                <p>{item.title}</p>
                <span>{item.description}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </MainTitleWithContent>
    </div>
  );
};

export default AboutUsPage;
