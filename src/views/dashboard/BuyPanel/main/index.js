/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState, useEffect } from "react";
import "./style.css";
import BNB from "../images/bnb.png";
import logo from "../images/Fnllogo.png";
import {
  getWeb3,
  getAccount,
  getUserBalance,
} from "../../../../walletutils/helpers/currentWalletHelper";
import Abi from "../Helpers/abi.json";
import Banner from "../images/MLM_BANNER.png";
import Alert from "../../../../components/modals/NetworkError";
const isValid = (regex) => (input) => regex.test(input);
const numberRegex = /^\d*\.?\d*$/;
const isValidNumber = isValid(numberRegex);

const MainSection = () => {
  const [show, setShow] = useState(false);
  const [bnbBalance, setBnbBalance] = useState(0);
  const [account, setAccount] = useState("");

  const cAddress = "0xB068Bec53d58496b6CA9DfD429E4c3BC8fCcFc0b";

  const [enable, setEnable] = useState(false);
  let web3;

  const gartVal = 5600;
  const [data, setData] = useState({
    bnb: "",
    gart: "",
    referral: "",
  });

  const processBuy = async () => {
    if (!data.bnb || !data.gart || !data.referral) {
      setShow(true);
      return;
    }
    setEnable(true);
    
    const contract = await new web3.eth.Contract(Abi, cAddress);
    
    // let bnbValue = await web3.utils.toWei(data.bnb, "ether");
    let bnbValue = Number(data.bnb * 10 ** 18)
    await contract.methods
      .buyToken(data.referral)
      .send({ from: account, value: bnbValue })
      .on("error", function (error) {
        setEnable(false);
        alert(error.message);
      })
      .then(function (receipt) {
        setEnable(false);
        alert(`${data.gart} ECW tokens has been sent to your wallet.`);
        setData({ bnb: "", gart: "", referral: data.referral });
      });

    setEnable(false);
  };

  const buyToken = async () => {
    if (account) {
      processBuy();
    }
  };

  const setBalance = async () => {
    web3 = await getWeb3();
    setAccount(await getAccount());
    setBnbBalance(await getUserBalance());
  };

  useEffect(() => {
    setBalance();
  });

  return (
    <div className="main-section">
      <p className="headings">Early access to ESCROW tokens</p>
      <div className="main-section-form">
        <div className="flex justify-between items-center">
          <p>1 ECW = 0.09$ </p>
          <p>{bnbBalance} BNB</p>
        </div>
        <p className="mgtp">Pay with</p>
        <div className="form-group">
          <input
            type="text"
            value={data.bnb}
            className="text-black"
            onChange={(e) => {
              const val = e.target.value
                .split("")
                .filter((el) => isValidNumber(el))
                .join("");
              setData({
                ...data,
                bnb: val,
                gart: val * gartVal,
              });
            }}
          />
          <div>
            <img src={BNB} alt="snk" />
            <p>BNB</p>
          </div>
        </div>
        <p className="mgtp">You will get</p>
        <div className="form-group">
          <input
            type="text"
            value={data.gart}
            className="text-black"
            onChange={(e) => {
              const val = e.target.value
                .split("")
                .filter((el) => isValidNumber(el))
                .join("");
              setData({
                ...data,
                gart: val,
                bnb: val / gartVal,
              });
            }}
          />
          <div>
            <img src={logo} alt="snk" />
            <p>ECW</p>
          </div>
        </div>
        <input
          className="referal text-black"
          type="text"
          placeholder="Enter referrer wallet address here..."
          value={data.referral}
          onChange={(e) => {
            setData({
              ...data,
              referral: e.target.value,
            });
          }}
        />
        <div style={{ textAlign: "center", margin: "0.5em 0" }}>
          <a
            href="www.google.com"
            style={{ color: "#000000" }}
            className="bold"
          ></a>
        </div>
        <div style={{ textAlign: "center", margin: "0.5em 0" }}>
          <button className="buy" onClick={buyToken} disabled={enable}>
            {account ? "Buy" : "Connect"}
          </button>
        </div>

        <div className="smart">
          <i class="fa fa-lock" aria-hidden="true"></i>
          <p>100% Secure smart contract</p>
        </div>
      </div>
      <div className="px-2">
        <img src={Banner} alt="" className=" max-w-3xl my-10 mx-auto w-full" />
      </div>
      <div className="link">
        <a href="www.google.com">Escrow Token contract</a>
      </div>
      <div className="link">
        <a href="www.google.com">Escrow ICO smart contract</a>
      </div>
      <div className="link">
        <a href="www.google.com">How to add Escrow token to your wallet</a>
      </div>
      <Alert
        open={show}
        setOpen={setShow}
        title="Referral address missing..!!"
        desc="Copy & paste your wallet address in referral field if you don't have any referral wallet address"
        desc2=""
      />
    </div>
  );
};

export default MainSection;
