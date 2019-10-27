/*eslint-disable*/
import React from "react";
import Notifications from "../../views/index-sections/Notifications.js";

// reactstrap components
import { Container } from "reactstrap";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/indexcover.png") + ")"
          }}
          ref={pageHeader}
        >
        </div>
        <Container>
          <div className="content-center brand">
            <img
              alt="..."
              className="n-logo"
              src={require("assets/img/newlog.png")}
            ></img>
            <h2 className="h1-seo">Бидний зорилго</h2>
            <h3>Бид таны бизнесийн өсөлтийг дэмжинэ</h3>
          </div>



        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
