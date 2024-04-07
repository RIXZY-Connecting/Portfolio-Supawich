import React from 'react';
import ExperienceCard from "./ExperienceCard";
import { Jumbotron } from './migration';
import {
  Container,
  Row,
} from "react-bootstrap";

const Experience = ({ experiences }) => {
  return (
    <section className="section">
      <Container>
        <Jumbotron className="bg-white ">
        <hr className="my-4" /> {/* เพิ่มเส้นระหว่าง heading กับ cards */}
          <h2 className="display-4 mb-5 text-center unselectable heading-shadow" id="experiences">
            {experiences.heading} <i className="fas fa-briefcase"></i>
          </h2>
          <Row>
            {
              experiences.data.map((data, index) => {
                return <ExperienceCard key={index} data={data} />
              })
            }
          </Row>
        </Jumbotron>
      </Container>
    </section>
  );
}

export default Experience;