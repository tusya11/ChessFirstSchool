import PropTypes from "prop-types";
import { useMediaQuery } from "@mui/material";
import CardRecommend from "./CardRecommend/CardRecommend";

import "./RecomendedItems.scss";

const RecomendedItems = ({ items = [], padding, isSwiperScroll = false }) => {
  const isXS = useMediaQuery("(max-width:700px)");

  const getContent = (item) => {
    if (item.id === "bordered") {
      if (isXS) {
        return null;
      }

      return <div className="recomended-items__bordered" key={item.id}></div>;
    }
    return (
      <CardRecommend item={item} key={item.id} isHorizontal={isSwiperScroll} />
    );
  };
  return (
    <div
      className={`recomended-items__container ${
        isSwiperScroll ? "scroll" : ""
      }`}
    >
      <div
        className={`recomended-items__content ${
          isSwiperScroll ? "scroll" : ""
        }`}
        style={{ padding: padding }}
      >
        {items.map((v) => getContent(v))}
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
