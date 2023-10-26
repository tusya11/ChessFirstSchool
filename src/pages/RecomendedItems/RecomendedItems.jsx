import PropTypes from "prop-types";
import image from "../../assets/champions.png";
import { recomendedItems } from "./consts";
import "./RecomendedItems.scss";

const RecomendedItems = () => {
  return (
    <div className="recomended-items__container">
      <img
        src={image}
        alt="champions"
        className="recomended-items__champion-image"
      />
      <div className="recomended-items__background">
        <span className="circle_1"></span>
        <span className="circle_2"></span>
        <span className="circle_3"></span>
        <span className="circle_4"></span>
      </div>

      <div className="recomended-items_card-container">
        {recomendedItems.map((v) => (
          <div className="recomended-items__card" key={v.id}>
            <div className="recomended-items__content">
              <div className="recomended-items__icon">
                <img src={v.icon} alt="icon-recomended" />
              </div>
              <div className="recomended-items__text">
                <h2>{v.id}</h2>
                <p>{v.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

RecomendedItems.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  icon: PropTypes.string,
};

export default RecomendedItems;
