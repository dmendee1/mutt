import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip
} from "reactstrap";

const phone_number = "+976 95759090";
const facebook_url = "";


function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar id="home" className={"fixed-top " + navbarColor} expand="lg" color="info">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              href="https://demos.creative-tim.com/now-ui-kit-react/#/index?ref=nukr-index-navbar"
              target="_blank"
              id="navbar-brand"
            >
              <p>МҮТТ</p>
            </NavbarBrand>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault()
                    document
                      .getElementById("main")
                      .scrollIntoView();
                    document.documentElement.classList.toggle("nav-open");
                    setCollapseOpen(false);
                  }}
                >
                  <i className="now-ui-icons loader_gear"></i>
                  <p>НҮҮР</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    document
                      .getElementById("download-section")
                      .scrollIntoView();
                    document.documentElement.classList.toggle("nav-open");
                    setCollapseOpen(false);
                  }}
                >
                  <i className="now-ui-icons arrows-1_cloud-download-93"></i>
                  <p>БИДНИЙ ТУХАЙ</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    document
                      .getElementById("work-process")
                      .scrollIntoView();
                    document.documentElement.classList.toggle("nav-open");
                    setCollapseOpen(false);
                  }}
                >
                  <i className="now-ui-icons arrows-1_cloud-download-93"></i>
                  <p>Ажлын гүйцэтгэл</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    document.documentElement.classList.toggle("nav-open");
                    setCollapseOpen(false);
                    document
                      .getElementById("processing")
                      .scrollIntoView();
                  }}
                >
                  <i className="now-ui-icons arrows-1_cloud-download-93"></i>
                  <p>Үйл ажиллагаа</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/login-page"
                  tag={Link}
                >
                  <i className="now-ui-icons arrows-1_cloud-download-93"></i>
                  <p>Нэвтрэх  </p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.facebook.com/CreativeTim?ref=creativetim"
                  target="_blank"
                  id="facebook-tooltip"
                >
                  <i class="fab fa-facebook-square"></i>
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
                <UncontrolledTooltip target="#facebook-tooltip">
                  Бидний хуудас
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <Button
                  className="nav-link btn-neutral"
                  color="info"
                  href={"tel: " + phone_number}
                  id="call-phone"
                  onClick={e => e.preventDefault}
                >
                  <i class="fas fa-phone-square-alt"></i>
                  <p>{phone_number}</p>
                </Button>
                <UncontrolledTooltip target="#call-phone">
                  Холбогдох утасны дугаар
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
