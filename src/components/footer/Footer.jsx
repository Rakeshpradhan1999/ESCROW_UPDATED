import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  // FaInstagram,
  // FaLinkedinIn,
  // FaPinterestP,
  FaTelegramPlane,
} from "react-icons/fa";

const SocialShare = [
  {
    Social: <FaFacebookF />,
    link: "https://www.facebook.com/Escrow-Dapp-103283945535675",
  },
  { Social: <FaTwitter />, link: "https://twitter.com/escrowp2p" },
  { Social: <FaTelegramPlane />, link: "https://t.me/ecwcommunity" },
];

const Footer = () => {
  return (
    <>
      <div className="row align-items-center">
        <div className="col-md-6 my-2">
          <div className="nav justify-content-center justify-content-md-start">
            {SocialShare.map((val, i) => (
              <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
                {val.Social}
              </a>
            ))}
          </div>
          {/* End .nav */}
        </div>
        {/* End .col */}

        <div className="col-md-6 my-2 text-center text-md-end">
          <p>
            © {new Date().getFullYear()} copyright{" "}
            <a href="http://escrowapp.tech/" target="_blank" rel="noreferrer">
              escrow.com
            </a>{" "}
            all right reserved
          </p>
        </div>
        {/* End .col */}
      </div>
      {/* End .row */}
    </>
  );
};

export default Footer;
