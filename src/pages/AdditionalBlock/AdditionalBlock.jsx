import { additionalItems } from "./consts";
import MainTitleWithContent from "../../new_components/MainTitleWithContent/MainTitleWithContent";
import "./AdditionalBlock.scss";

const AdditionalBlock = () => {
  return (
    <div className="additional-block__container">
      <MainTitleWithContent
        title="Как проходит пробный урок"
        paddingUnderTitle="10px"
      >
        <div className="additional-block__content">
          <div className="additional-block__main-text">
            <p className="additional-block__title">
              На пробном занятии вам&nbsp;помогут настроить техническое
              оборудование для&nbsp;обучения
            </p>
          </div>
          <div className="additional-block__block-content">
            {additionalItems.map((item) => (
              <div key={item.id} className="additional-block__item-content">
                <div className="additional-block__image-container">
                  <img src={item.image} alt="block-with-img" loading="lazy" />
                </div>
                <div className="additional-block__with-main-content">
                  <p className="additional-block__primary">{item.title}</p>
                  <p className="additional-block__secondary">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MainTitleWithContent>
    </div>
  );
};

export default AdditionalBlock;
