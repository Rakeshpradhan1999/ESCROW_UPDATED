import React from "react";
import Feature1 from "../../assets/feature1.png";
import Feature2 from "../../assets/feature2.png";
import Feature3 from "../../assets/feature3.png";
const ServiceContent = [
  {
    icon: Feature1,
    title: "Centralized",
    descriptions: `In Centralized, we meant to
    propose that the users
    involved in the transaction
    send their assets and fiat into
    the smart contract and bank
    account of Escrow App
    respectively. The Escrow
    application by validating the
    details of two cross transferit
    between the two users.`,
  },
  {
    icon: Feature2,
    title: "Decentralized",
    descriptions: `Ecosystem will be accessed by
    users by connecting their
    web3 wallet and the locked
    crypto in smart contract will
    be automatically transferred
    to other parties wallet if the
    crypto asset sender confirm
    the receipt of fiat with them.`,
  },
  {
    icon: Feature3,
    title: "Secure & safe",
    descriptions: `The Escrow application by
    validating the details of two
    cross transferit between the
    two users. Locking of crypto
    assets & release will be done
    through smart contract
    which makes this platform
    secure & safe`,
  },
];
export default function Service() {
  return (
    <>
      <div className="row">
        {ServiceContent.map((val, i) => (
          <div className="col-md-6 col-lg-4 my-3" key={i}>
            <div className="feature-box-01">
              <div className="icon">
                <img src={val.icon} alt="" className="w-14" />
              </div>
              <div className="feature-content">
                <h5>{val.title}</h5>
                <p>{val.descriptions}</p>
              </div>
            </div>
            {/* End .feature-box-01 */}
          </div>
        ))}
      </div>
    </>
  );
}
