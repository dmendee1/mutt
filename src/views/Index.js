import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

// sections for this page
import Tabs from "./index-sections/Tabs.js";
import Gallery from "./index-sections/Gallery.js";
import Examples from "./index-sections/Examples.js";
import AboutUs from "./index-sections/AboutUs.js";

function Index() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <IndexNavbar />
      <div id="main" className="wrapper">
        <IndexHeader />
        <div className="main">
          <AboutUs />
          <Gallery />
          <Tabs />
          <Examples />
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Index;
