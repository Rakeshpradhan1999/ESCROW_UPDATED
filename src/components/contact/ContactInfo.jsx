import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-info">
        <h4>Get in touch</h4>

        <ul>
          {/* <li className="media">
            <i className="icon icon-map"></i>
            <span className="media-body">
              123 Stree New York City , United States Of America 750065.
            </span>
          </li> */}
          {/* End li */}

          <li className="media">
            <i className="icon icon-envelope"></i>
            <span className="media-body">info@escrowapp.tech</span>
          </li>
          {/* End li */}

          <li className="media">
            <i className="icon icon-phone"></i>
            <span className="media-body">https://t.me/ecwcommunity</span>
          </li>
          {/* End li */}
        </ul>
      </div>
      {/* End .contact-info */}
    </>
  );
};

export default ContactInfo;
