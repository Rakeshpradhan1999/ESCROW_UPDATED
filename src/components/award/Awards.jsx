import React from "react";

const AwardContnet = [
  {
    img: "a1",
    awardName: "Connect wallet & select either centralized & decentralized",
    awardFor: "",
  },
  {
    img: "a2",
    awardName: "Send a crypto or fiat request ",
    awardFor: "",
  },
  {
    img: "a3",
    awardName: "Receive your funds easily & safely",
    awardFor: "",
  },
];

const Awards = () => {
  return (
    <>
      <div className="row">
        {AwardContnet.map((val, i) => (
          <div className="col-lg-4 m-15px-tb" key={i}>
            <div className="feature-box-02 d-flex align-items-center">
              <div className="icon">
                <img src={`img/award/${val.img}.png`} alt="award" />
              </div>
              <div className="media-body">
                <h6>{val.awardName}</h6>
                <p>{val.awardFor}</p>
              </div>
            </div>
          </div>
          // End .col
        ))}
      </div>
      {/* End .row */}
    </>
  );
};

export default Awards;
