import React from 'react';
import { Col } from "react-bootstrap";

const RyuSkillsCard = ({ data }) => {
  return (
    <Col lg="2">
        <div className="skill-container unselectable heading-shadow">
          <img className="skill-logo" src={data.img} alt="" draggable="false" />
          <p className="skill-name">{data.text}</p>
        </div>
      <br/>
    </Col>
  );
}
export default RyuSkillsCard;
