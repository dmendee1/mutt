import React from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

// core components

function Download() {
  return (
    <>
      <div
        className="section section-download"
        data-background-color="black"
        id="download-section"
      >
        <Container>
          <Row className="justify-content-md-center">
            <Col className="text-center mt-20 mb-20" lg="6" md="12">
              <h3 className="title">Бидний танилцуулга</h3>
              <h5 className="description">
              МҮТТ-ХХКомпани нь 2014 онд байгуулагдаж металл хийцийн чиглэлээр инженерчлэлийн зургийн дагуу үйл ажиллагаа явуулж эхэлсэн. Манай үйлдвэр нь шатахуун, газ, бохир ус, цэвэр усны зориулалттай (1-100м3) танкуудыг (0,1mm-20mm) зузааны зузаантай төмөр, ган нерж, хөнгөн цагаан металлуудаар дэлхийд тэргүүлэх техник, технологи стандартаар өндөр зэрэглэлийн туршлагатай гагнуурчдын баг хамт олон богино хугацаанд захиалагчийн хүссэн хэлбэр, хэмжээ, хийцээр чанарын баталгаатай үйлдвэрлэж байна.
              </h5>
            </Col>
            <Col className="text-center" lg="12" md="12">
              <Button
                className="btn-round mr-1"
                color="info"
                href="https://www.creative-tim.com/product/now-ui-kit-react?ref=nukr-index-page"
                role="button"
                size="lg"
              >
                Download React
              </Button>
              <Button
                className="btn-round"
                color="primary"
                href="https://www.invisionapp.com/now?ref=creativetim"
                outline
                role="button"
                size="lg"
                target="_blank"
              >
                Download PSD/Sketch
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Download;
