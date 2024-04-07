import React from 'react';
import EducationCard from "./EducationCard";
import { Jumbotron } from './migration';
import {
  Container,
  Row,
} from "react-bootstrap";

const Education = ({ education }) => {
  return (
    <section className="section">
      <Container>
        <Jumbotron className="bg-white ">
        <hr className="my-4" /> {/* เพิ่มเส้นระหว่าง heading กับ cards */}
          <h2 className="display-4 mb-5 text-center unselectable heading-shadow" id="education">
            {education.heading} <i className="fas fa-graduation-cap"></i>
          </h2>
          <Row>
            {
              education.data.map((data, index) => {
                return <EducationCard key={index} data={data} />
              })
            }
          </Row>
        </Jumbotron>
       </Container>
    </section>
  );
}

export default Education;