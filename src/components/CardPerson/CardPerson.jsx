import TiltComponent from "../TiltComponent/TiltComponent";
import "./CardPerson.scss";

const CardPerson = ({ card }) => {
  console.log("---card", card);
  return (
    <div className="card-person__container">
      <div className="card-person__element bg"></div>
      <div className="card-person__element name">{/* <h2>Name</h2> */}</div>

      <TiltComponent>
        <div className="card-person__element imgBox">
          <img src={card.image} alt="person" />
        </div>
      </TiltComponent>

      <div className="card-person__name">
        <div>{card.name}</div>
        <div className="card-person__dignity">{card.dignity}</div>
        {/* <div className="card-person__description">{card.description}</div> */}
      </div>
    </div>
  );
};

export default CardPerson;
