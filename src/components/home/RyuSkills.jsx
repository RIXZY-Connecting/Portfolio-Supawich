import React from 'react';
import RyuSkillsCard from "./RyuSkillsCard";
import { Jumbotron } from './migration';
import {
  Container,
  Row,
} from "react-bootstrap";

const RyuSkills = ({ ryuskills }) => {
  return (
    <section className="section">
      <Container>
        <Jumbotron className="bg-white ">
          <h2 className="display-4 mb-5 text-center unselectable heading-shadow" id="ryuskills">
           {ryuskills.heading} <i className="fas fa-folder-open"></i>
          </h2>
          <Row>
            {
              ryuskills.data.map((data, index) => {
                return <RyuSkillsCard key={index} data={data} />
              })
            }
          </Row>
        </Jumbotron>
       </Container>
    </section>
  );
}

export default RyuSkills;