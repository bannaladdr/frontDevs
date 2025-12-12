import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div>
      <div>
        <img src="" alt="" />
        <h1>FrontDevs</h1>
      </div>
      <div>
        <ul>
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="resume"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Resume
            </Link>
          </li>
          <li>
            <Link
              to="portfolio"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="blog"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;
