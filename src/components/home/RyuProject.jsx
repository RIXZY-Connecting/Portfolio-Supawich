import React from 'react';
import RyuProjectCard from "./RyuProjectCard";
import { Jumbotron } from './migration';
import {
  Container,
  Row,
} from "react-bootstrap";

const RyuProject = ({ ryuprojects }) => {
  return (
    <section className="section">
      <Container>
        <Jumbotron className="bg-white ">
        <hr className="my-4" /> 
          <h2 className="display-4 mb-5 text-center unselectable heading-shadow" id="ryuprojects">
           {ryuprojects.heading} <i className="fas fa-folder-open"></i>
          </h2>
          <h2 className="categories__title">Total {ryuprojects.data.length} Project</h2>
          <Row>
            {
              ryuprojects.data.map((data, index) => {
                return <RyuProjectCard key={index} data={data} />
              })
            }
          </Row>
        </Jumbotron>
       </Container>
    </section>
  );
}

export default RyuProject;
