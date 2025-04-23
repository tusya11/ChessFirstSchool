import "./BlurredPhoto.scss";

const BlurredPhoto = ({ v }) => {
  return (
    <div
      className="blurred-photo__image-container"
      style={{
        backgroundImage: `url(${v.image})`,
      }}
    >
      <img
        src={v.image}
        alt="team_image"
        loading="lazy"
        className="blurred-photo__image"
      />
    </div>
  );
};

export default BlurredPhoto;
