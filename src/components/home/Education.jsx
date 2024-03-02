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
          <h2 className="display-4 mb-5 text-center unselectable">
            {education.heading}
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