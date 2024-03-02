import React from 'react';

import {
  Col,
} from "react-bootstrap";

const EducationCard = ({ data }) => {
  return (
    <Col lg="6">
      <div className="pb-5 text-center unselectable">
        <img className=" mb-3" src={data.companylogo} alt="" draggable="false"/>
        <p className="lead">
          {data.role}
          <br />
          {data.date}
        </p>

      </div>
    </Col>
  );
}

export default EducationCard;