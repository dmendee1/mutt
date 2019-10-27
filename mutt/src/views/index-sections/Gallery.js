import React from "react";

// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";
import Carousel from "./Carousel";

// core components

function Gallery() {
  const [pills, setPills] = React.useState("3");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <div className="wrapper" id="processing">
        <div className="section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="12">
                <h4 className="title text-center">Үйл ажиллагаа</h4>
                <div className="nav-align-center">
                  <Nav
                    className="nav-pills-info nav-pills-just-icons"
                    pills
                    role="tablist"
                  >
                    <NavItem>
                      <NavLink
                        className={pills === "1" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setPills("1");
                        }}
                      >
                        <span><i className="now-ui-icons design_image"></i><p>Зөөврийн станц</p></span>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setPills("2");
                        }}
                      >
                        <span><i className="now-ui-icons location_world"></i><p>Суурин шатахуун</p></span>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "3" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setPills("3");
                        }}
                      >
                        <span><i className="now-ui-icons sport_user-run"></i><p>Ил ашиглах</p></span>
                      </NavLink>
                    </NavItem>
                    
                    <NavItem>
                      <NavLink
                        className={pills === "4" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setPills("4");
                        }}
                      >
                        <span><i className="now-ui-icons sport_user-run"></i><p>Усны сав</p></span>
                      </NavLink>
                    </NavItem>
                    
                    <NavItem>
                      <NavLink
                        className={pills === "5" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setPills("5");
                        }}
                      >
                        <span><i className="now-ui-icons sport_user-run"></i><p>Бохирын далд</p></span>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "6" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setPills("6");
                        }}
                      >
                        <span><i className="now-ui-icons sport_user-run"></i><p>Шатахуун түгээгүүр</p></span>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
              </Col>
              <TabContent className="gallery" activeTab={"pills" + pills}>
                <TabPane tabId="pills1">
                    <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="4">
                        <div className="section" id="carousel">
                            <h4>Зөөврийн шатахуун түгээх станц</h4>
                            Манай компаний үйлдвэрлэж буй зөөврийн шатахуун түгээх станц нь нэгээс гурван төрлийн бүтээгдхүүн хйиж хадгадах ба түгээх зориулалттай. Энэхүү зөөврийн шатахуун түгээх станцыг уул уурхай, газар тариалан, зам гүүрийн бүтээн байгуулалтад ашиглахад нэн тохиромжтой. Мөн шатахуун түгээгүүрийн шахуургын төхөөрөмжийг суурьлуулж өгсөнөөрөө давуу талтай цогц шийдэл болдог. Бид хэмээний хувьд 10м3-100м3 багтаамжтайгаар хэрэглэгчиддээ нийлүүлж байна.
                        </div>
                      </Col>
                      <Col md="8">
                        <Carousel />
                      </Col>
                    </Row>
                  </Col>
                </TabPane>
                <TabPane tabId="pills2">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="4">
                        <div className="section" id="carousel">
                            <h4>Суурин шатахуун түгээх станцын далд сав</h4>
                            Энэхүү ган савыг суурин ШТС-д газар доор булж ашиглана. Бид хэмээний хувьд 5м3-100м3 багтаамжтайгаар үйлдвэрлэж байна.
                        </div>
                      </Col>
                      <Col md="8">
                        <Carousel />
                      </Col>
                    </Row>
                    </Col>
                </TabPane>
                <TabPane tabId="pills3">
                    <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="4">
                        <div className="section" id="carousel">
                            <h4>Ил ашиглагдах түлшний сав</h4>
                            Энэхүү сав нь түлш хадгалах, нөөцлөх зориулалтаар газар дээр ил ашиглах сав юм. Энэхүү түлшний нөөцийн савыг уул уурхай, газар тариалан, зам гүүрийн бүтээн байгуулалтад ашиглахад нэн тохиромжтой. Бид хэмээний хувьд 10м3-100м3 багтаамжтайгаар хэрэглэгчиддээ нийлүүлж байна.
                        </div>
                      </Col>
                      <Col md="8">
                        <Carousel />
                      </Col>
                    </Row>
                    </Col>
                </TabPane>
                <TabPane tabId="pills4">
                    <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="4">
                        <div className="section" id="carousel">
                            <h4>Ил ашиглагдах усны сав</h4>
                            Газар дээр ил ашиглагдах усны зориулалттай сав нь зэвэрдэггүй хамгаалтын давхрагатайгаараа онцлогтой. Зөвхөн ахуйн хэрэглээнд буюу газар тариалан, замын усалгаа, барилагын бетон зуурмаг, хүлэмжний усалгааны зориулалтаар ашиглахад нэн тохиромжтой. Бид хэмээний хувьд 5м3-100м3 багтаамжтайгаар үйлдвэрлэж байна.
                        </div>
                      </Col>
                      <Col md="8">
                        <Carousel />
                      </Col>
                    </Row>
                    </Col>
                </TabPane>
                <TabPane tabId="pills5">
                    <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="4">
                        <div className="section" id="carousel">
                            <h4>Бохирын далд ашиглагдах ган сав</h4>
                            Энэхүү төмөр сав нь бохирдлыг байгалд ээлтэй талаараа бусад төрлийн савнуудаас онцлогтой бөгөөд хүний биед үзүүлэх сөрөг нөлөөгүй нь тогтоогдсоноор бид өдөр тутмын хэрэгцээндээ буюу зуслангийн газар болон үйлдвэрүүдэд ашиглах зориулалттайгаар үйлдвэрлэж байна.
                        </div>
                      </Col>
                      <Col md="8">
                        <Carousel />
                      </Col>
                    </Row>
                    </Col>
                </TabPane>
                <TabPane tabId="pills6">
                    <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="4">
                        <div className="section" id="carousel">
                            <h4>Шатахуун түгээгүүр</h4>
                            1. Энгийн нэг хошуутай түгээгүүр, 1мин 40-50л шатахуун шахах хүчин чадалтай.<br/>
2. Энгийн хоёр хошуутай түгээгүүр, хошуу тус бүр 1мин 40-50л шатахуун шахах хүчин чадалтай.<br/>
3. Хагас хурдны нэг хошуутай түгээгүүр, 1мин 80-90л шатахуун шахах хүчин чадалтай.<br/>
4. Бүрэн хурдны нэг хошуутай түгээгүүр, 1мин 140-1500л шатахуун шахах хүчин чадалтай.
                        </div>
                      </Col>
                      <Col md="8">
                        <Carousel />
                      </Col>
                    </Row>
                    </Col>
                </TabPane>
              </TabContent>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Gallery;
