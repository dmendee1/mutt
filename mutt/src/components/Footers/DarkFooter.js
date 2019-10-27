/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

const coded_by = "Tetn Tim";
const company = "OneEnd";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <nav>
          <ul>
            <li>
              <a
                href="https://www.creative-tim.com?ref=nukr-dark-footer"
                target="_blank"
              >
                {company}
              </a>
            </li>
            <li>
              <a
                href="http://presentation.creative-tim.com?ref=nukr-dark-footer"
                target="_blank"
              >
                Бидний тухай
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, {" "}
          <a
            href="https://www.invisionapp.com?ref=nukr-dark-footer"
            target="_blank"
          >
            {company}
          </a>
          . {" "}
          <a
            href="https://www.creative-tim.com?ref=nukr-dark-footer"
            target="_blank"
          >
            {coded_by}
          </a>
          .
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
