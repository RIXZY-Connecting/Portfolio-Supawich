import React from 'react';
import { Col } from "react-bootstrap";

const RyuProjectCard = ({ data }) => {
  return (
    <Col lg="6">
      <div className="ryu-project-card card">
        
          <div className="ryu-project-card__item">
            <img
              className="ryu-project-card__img"
              src={data.img}
              alt={data.name}
              draggable="false"
            />
            <div className="ryu-project-card__details">
              <h5 className="ryu-project-card__details--title">{data.name}</h5>
              <h6 className="text-muted">{data.info}</h6>
            </div>
          </div>
        </div>
     
    </Col>
  );
}

export default RyuProjectCard;
