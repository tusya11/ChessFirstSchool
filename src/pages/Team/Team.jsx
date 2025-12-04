import { team } from "./utils";
import SwiperComponent from "../../components/SwiperComponent/SwiperComponent";
import "./Team.scss";

const Team = () => {
  return (
    <div id="team" className="team__container">
      <div className="team__main-text">
        <h2>Наша команда</h2>
      </div>
      <div className="team__content-coach swiper-container">
        <SwiperComponent data={team} />
      </div>
    </div>
  );
};

export default Team;
