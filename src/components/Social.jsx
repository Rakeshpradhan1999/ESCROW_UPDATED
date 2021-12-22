import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaGlobe,
  FaMediumM,
  FaTelegramPlane,
} from "react-icons/fa";

const SocialShare = [
  {
    Social: <FaFacebookF />,
    link: "https://www.facebook.com/Escrow-Dapp-103283945535675",
  },
  { Social: <FaTwitter />, link: "https://twitter.com/escrowp2p" },
  { Social: <FaGlobe />, link: "http://escrowapp.tech/" },
  { Social: <FaMediumM />, link: "https://medium.com/@escrowp2p" },
  { Social: <FaTelegramPlane />, link: "http://t.me/ecwcommunity" },
];

const Social = () => {
  return (
    <div className="nav social-icons justify-content-center">
      {SocialShare.map((val, i) => (
        <a
          key={i}
          href={`${val.link}`}
          rel="noreferrer"
          target="_blank"
          className="flex justify-center items-center"
        >
          {val.Social}
        </a>
      ))}
    </div>
  );
};

export default Social;
