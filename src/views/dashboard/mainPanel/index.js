import { GiHamburgerMenu } from "react-icons/gi";
import Accountmodal from "../../../walletutils/header/Accountmodal";
import EscrowToken from "../../../assets/escrowtoken.png";
import Refferl from "../../../assets/organization.png";
import Medal from "../../../assets/medal.png";
import Web3 from "web3";
import reward_abi from "../../../walletutils/Config/abis/rewardAbi.json";
import { rewardcontractAddress } from "../../../walletutils/Config/contracts";
import { useEffect, useState } from "react";


const web3 = new Web3(window.ethereum);
const contract = new web3.eth.Contract(reward_abi, rewardcontractAddress);
let chainId = 0;
let account = [];
let escrow_balance = 0;
let referal_bonus = 0;
let downline_count = [];
let cardData = [
  {
    isProfit: true,
    price: escrow_balance / (10 ** 18),
    percentage: 3.5,
    name: "Escrow balance",
    img: EscrowToken,
  },
  {
    isProfit: true,
    price: referal_bonus / (10 ** 18),
    percentage: 11,
    name: "Rewards collected",
    img: Medal,
  },
  {
    isProfit: false,
    price: 30,
    percentage: 2.4,
    name: "Referral level",
    img: Refferl,
  },
  {
    isProfit: true,
    price: 0,
    percentage: 3.5,
    name: "Expense current",
  },
];
const Panel = ({ show, setShow }) => {
  const [cardPrice, setCardPrice] = useState([]);

  async function init() {
    chainId = await window.ethereum.request({ method: "eth_chainId" });
    account = await web3.eth.getAccounts();
    if (account && (chainId === "0x61" || chainId === 97)) {
      escrow_balance = await contract.methods.getUserTokenBalance(account[0]).call()
      referal_bonus = await contract.methods.getUserReferralBonus(account[0]).call()
      downline_count = await contract.methods.getUserDownlineCount(account[0]).call()
      console.log(Number(downline_count[0]))
      setCardPrice(prev => [escrow_balance / (10 ** 18), referal_bonus / (10 ** 18), Number(downline_count[0])])
    }
    else {
      alert("Please connect BSC Testnet!")
    }
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <div className="flex-1 bg-black mb-10">
        <div className="px-4 bg-dark-400 py-4 flex text-white justify-between lg:justify-end">
          <button
            className="lg:hidden"
            onClick={() => setShow((prev) => !prev)}
          >
            <GiHamburgerMenu />
          </button>
          <Accountmodal mobile={true} />
        </div>
        <div className="grid grid-cols-1  sm:grid-cols-2 xl:grid-cols-4 gap-8 mx-10 mt-10 ">
          {cardData.map((val, i) => (
            <div className="bg-dark-400 px-7 py-6 rounded-sm" key={i}>
              <div className="flex justify-between">
                <div className="flex items-center self-start">
                  <h3 className="text-white text-2xl font-bold">
                    {i !== 1 ? (cardPrice?.[i]?.toFixed(2) ?? "0.00") : (cardPrice?.[i]?.toFixed(5) ?? "0.00000") }
                  </h3>
                </div>
                <div
                  className={` bg-opacity-20 rounded-md  h-9 w-10 flex justify-center items-center`}
                >
                  <span
                    className={` rotate-12 block text-2xl ${val.isProfit ? " text-success" : "text-danger"
                      }`}
                  >
                    <img src={val.img} alt="" />
                  </span>
                </div>
              </div>
              <h3 className="text-muted text-base mb-2">{val.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Panel;
