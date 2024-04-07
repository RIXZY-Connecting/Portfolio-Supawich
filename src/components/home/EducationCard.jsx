import React from 'react';
import { Col } from "react-bootstrap";

const EducationCard = ({ data }) => {
  return (
    <Col lg="6">
 
      <div className="pb-5 text-center unselectable education-card card">
        <div className="logo-container">
          <img className="company-logo" src={data.companylogo} alt="" draggable="false" />
        </div>
        <div className="content">
          <p className="role">{data.role}</p>
          <p className="level">{data.level}</p>
          <p className="department">{data.department}</p>
          <p className="date">{data.date}</p>
          <p className="gpa">GPA: <span>{data.gpa}</span></p>
        </div>
      </div>
      <br/>

    </Col>
  );
}
export default EducationCard;
