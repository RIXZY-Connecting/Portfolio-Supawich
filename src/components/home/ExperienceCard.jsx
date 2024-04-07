import React from 'react';
import { Col } from "react-bootstrap";

const ExperienceCard = ({ data }) => {
  return (
    <Col lg="6">
  
      <div className="pb-5 text-center unselectable">
        <img className=".experience-company-logo mb-3" src={data.companylogo} alt="" draggable="false"/>
        <p className="experience-lead">
          <strong>[ Internship ]</strong> <br />
          <span className="role">{data.role}</span> <br />
          <span className="location">{data.location}</span> <br />
          <span className="date">{data.date}</span>
        </p>
      </div>
    </Col>
  );
}

export default ExperienceCard;