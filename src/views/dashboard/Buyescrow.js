import { useState } from "react";
import Sidebar from "./sidebar";
import Panel from "./BuyPanel";
const BuyEscrow = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="flex relative bg-black">
      <Sidebar show={show} setShow={setShow} />
      <Panel show={show} setShow={setShow} />
    </div>
  );
};

export default BuyEscrow;
