/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";
import "./style.css";
import { Link, useRouteMatch } from "react-router-dom";
// import { RiDashboard2Line } from "react-icons/ri";
import Logo from "../../../assets/logo.png";
import Dashboard from "../../../assets/dashboard.png";
import Buyescrow from "../../../assets/buy-escrow.png";
const Sidebar = ({ show, setShow }) => {
  // const menuHandler = () => {
  //   setShow((prev) => !prev);
  // };

  const menuRef = useRef(null);
  useEffect(() => {
    const handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setShow(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <div
      className={`sidebar ${show && "active"} bg-dark-400 text-white`}
      ref={menuRef}
    >
      <Link to="/" className="px-4 py-2  mb-4 flex items-center">
        <div className="w-6  flex-shrink-0">
          <img src={Logo} alt="" />
        </div>
        <p className="font-bold ml-2 text-xl  tracking-widest">Escrow</p>
      </Link>
      <div className="">
        <CustomLink
          activeOnlyWhenExact={true}
          to="/dashboard"
          icon={Dashboard}
          text={"Dashboard"}
        />
        <CustomLink
          activeOnlyWhenExact={true}
          to="/dashboard/buy"
          icon={Buyescrow}
          text={"Buy escrow"}
        />
      </div>
    </div>
  );
};

export default Sidebar;

function CustomLink({
  children,
  icon,
  text,
  to,
  activeOnlyWhenExact,
  ...props
}) {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });
  return (
    <div className="w-full pr-5">
      <Link
        className={`${
          match && "bg-dark-500"
        } hover:bg-dark-500 text-left text-base  py-2 px-4 rounded-r-full flex items-center mb-3 transition-all`}
        to={to}
        {...props}
      >
        <span className="bg-dark-300 mr-3 w-8 h-8 flex justify-center items-center rounded-full  text-indigo flex-shrink-0">
          <img src={icon} alt="" className="w-5" />
        </span>
        <span>{text}</span>
      </Link>
    </div>
  );
}
