import Tilt from "react-parallax-tilt";

const TiltComponent = ({ children }) => (
  <Tilt
    glareEnable={true}
    tiltMaxAngleX={10}
    tiltMaxAngleY={10}
    perspective={1000}
    glareColor={"rgb(255, 255, 255, 0.2)"}
  >
    <div className="tiltComponent">{children}</div>
  </Tilt>
);

export default TiltComponent;
