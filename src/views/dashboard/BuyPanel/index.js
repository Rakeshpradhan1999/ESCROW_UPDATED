import { GiHamburgerMenu } from "react-icons/gi";
import Accountmodal from "../../../walletutils/header/Accountmodal";
import MainSection from "./main";
const Panel = ({ show, setShow }) => {
  // const [error, setError] = useState(true);
  return (
    <>
      <div className="flex-1 bg-black">
        <div className="px-4 bg-dark-400 py-4 flex text-white justify-between lg:justify-end">
          <button
            className="lg:hidden"
            onClick={() => setShow((prev) => !prev)}
          >
            <GiHamburgerMenu />
          </button>
          <Accountmodal mobile={true} />
        </div>
        <MainSection />
      </div>
    </>
  );
};

export default Panel;
