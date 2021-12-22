/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import TextLoop from "react-text-loop";

const conctInfo = {
  phone: "+04 6545-9535-6515",
  email: "info@escrowapp.tech",
};

const sliderContent = {
  name: "Secure..Safe",
  description: `peer to peer payments can
  be used for exchanging crypto assets
  with that of fiat and vice versa.`,
  btnText: " Buy escrow",
};

const Slider = () => {
  return (
    <>
      {/*  Home Banner */}
      <section id="home" className="home-banner">
        <div className="hb-top-fixed d-flex">
          <div className="hb-info">
            <a href="mailto:mail%20to:ibthemes21@gmail.com,com">
              {conctInfo.email}
            </a>
          </div>
          <div className="hb-lang">
            <ul className="nav">
              <li className="active">
                <a href="#">EN</a>
              </li>
              <li>
                <a href="#">RS</a>
              </li>
              <li>
                <a href="#">FR</a>
              </li>
              <li>
                <a href="#">CH</a>
              </li>
            </ul>
          </div>
        </div>
        {/* End hp-top-fixed */}

        <div className="container">
          <div className="row full-screen align-items-center">
            <div className="col-lg-7">
              <div className="type-box">
                <h6>Decentralized Escrow platform</h6>
                <h1 className="font-alt">{sliderContent.name}</h1>
                <TextLoop>
                  <p className="loop-text lead">
                    Decentralized & centralized P2P
                  </p>
                  <p className="loop-text lead">
                    Assisted & non-assisted feature
                  </p>
                  <p className="loop-text lead">100% secure transactions</p>
                </TextLoop>{" "}
                <p className="desc">{sliderContent.description}</p>
                <div className="mt-4">
                  <Link className="px-btn px-btn-white" to="/dashboard/buy">
                    {sliderContent.btnText}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Container*/}
        <div
          className="hb-me"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "img/slider/headerbannerr.png"
            })`,
          }}
        ></div>
      </section>

      {/* End Home Banner  */}
    </>
  );
};

export default Slider;
