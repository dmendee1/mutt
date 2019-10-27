import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Button, Container, Row } from "reactstrap";

// core components

function Examples() {
  return (
    <>
      <div className="section section-examples" data-background-color="black">
        <div className="space-50"></div>
        <Container className="text-center">
          <Row>
            <div className="col">
              <iframe width="100%" height="400px" src="https://www.youtube.com/embed/88g0hoa4_Zg?start=2" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Examples;
