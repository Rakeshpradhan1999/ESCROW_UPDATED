/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Scrollspy from "react-scrollspy";
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import Logo from "../../assets/logo.png";
import {
  FiUser,
  FiBriefcase,
  FiFileText,
  FiPhoneOutgoing,
} from "react-icons/fi";
import { RiSecurePaymentFill } from "react-icons/ri";
import { GrPlan } from "react-icons/gr";
import { FaHome, FaBlog } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      {/* Header */}
      <div className="mob-header">
        <button className="toggler-menu" onClick={handleClick}>
          <div className={click ? "active" : ""}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
      {/* End Header */}

      {/* nav bar */}
      <header className={click ? "header-left menu-open" : "header-left "}>
        <div className="scroll-bar">
          <div className="hl-top">
            <div className="hl-logo">
              <Link to="/">
                <img src={Logo} alt="" />
              </Link>
            </div>
          </div>
          {/* End htl-top */}

          <Scrollspy
            className="nav nav-menu"
            items={["home", "about", "resume", "work", "blog", "contactus"]}
            currentClassName="active"
            offset={-30}
          >
            <li>
              <a
                className="nav-link"
                href="#home"
                data-tip
                data-for="HOME"
                onClick={handleClick}
              >
                <FaHome />
                <ReactTooltip id="HOME" place="top" type="dark" effect="float">
                  <span>Home</span>
                </ReactTooltip>
              </a>
            </li>
            <li>
              <Link
                to="/dashboard"
                className="nav-link"
                data-tip
                data-for="Dashboard"
                // onClick={handleClick}
              >
                <MdDashboard />
                <ReactTooltip
                  id="Dashboard"
                  place="top"
                  type="dark"
                  effect="float"
                >
                  <span>Dashboard</span>
                </ReactTooltip>
              </Link>
            </li>
            <li>
              <a
                className="nav-link"
                href="#about"
                data-tip
                data-for="ABOUT"
                onClick={handleClick}
              >
                <RiSecurePaymentFill />
                <ReactTooltip id="ABOUT" place="top" type="dark" effect="float">
                  <span>Escrow</span>
                </ReactTooltip>
              </a>
            </li>
            <li>
              <a
                className="nav-link"
                href="#resume"
                data-tip
                data-for="RESUME"
                onClick={handleClick}
              >
                <GrPlan />
                <ReactTooltip
                  id="RESUME"
                  place="top"
                  type="dark"
                  effect="float"
                >
                  <span>architecture</span>
                </ReactTooltip>
              </a>
            </li>
            {/* <li>
              <a
                className="nav-link"
                href="#work"
                data-tip
                data-for="WORK"
                onClick={handleClick}
              >
                <FiBriefcase />
                <ReactTooltip id="WORK" place="top" type="dark" effect="float">
                  <span>Work</span>
                </ReactTooltip>
              </a>
            </li> */}
            {/* <li>
              <a
                className="nav-link"
                href="#blog"
                data-tip
                data-for="BLOG"
                onClick={handleClick}
              >
                <FaBlog />
                <ReactTooltip id="BLOG" place="top" type="dark" effect="float">
                  <span>Blog</span>
                </ReactTooltip>
              </a>
            </li> */}
            <li>
              <a
                className="nav-link"
                href="#contactus"
                data-tip
                data-for="CONTACT"
                onClick={handleClick}
              >
                <FiPhoneOutgoing />
                <ReactTooltip
                  id="CONTACT"
                  place="top"
                  type="dark"
                  effect="float"
                >
                  <span>Contact</span>
                </ReactTooltip>
              </a>
            </li>
          </Scrollspy>
        </div>
      </header>
      {/* End Header */}
    </>
  );
};

export default Header;
