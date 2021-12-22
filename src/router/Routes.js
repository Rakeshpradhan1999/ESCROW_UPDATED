import { useState } from "react";
// import Preview from "../views/Preview";
import HomeLight from "../views/all-home-version/HomeLight";
// import LightProfessionalAnimation from "../views/all-home-version/LightProfessionalAnimation";
// import HomeLightProfessional2 from "../views/all-home-version/HomeLightProfessional2";
// import HomeLightAnimation from "../views/all-home-version/HomeLightAnimation";
// import HomeLightRtlAnimation from "../views/all-home-version/HomeLightRtlAnimation";
// import HomeLightSidebarTwo from "../views/all-home-version/HomeLightSidebarTwo";
// import HomeDark from "../views/all-home-version/HomeDark";
// import HomeDarkParticles from "../views/all-home-version/HomeDarkParticles";
// import HomeDarkAnimation from "../views/all-home-version/HomeDarkAnimation";
import NotFound from "../views/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";
import Dashboard from "../views/dashboard";
import Buyescrow from "../views/dashboard/Buyescrow";
import {
  NetworkError,
  AwaitingApproval,
  GasError,
  InformationModal,
} from "../components/modals";
const Routes = () => {
  const [errorNetwork, setErrorNetwork] = useState(false);
  const [approveAwait, setApproveAwait] = useState(false);
  const [gasError, setGasError] = useState(false);
  const [contractMsg, setContractMsg] = useState(false);
  const [payMsg, setPayMsg] = useState(false);
  const [tokenMsg, setTokenMsg] = useState(false);

  return (
    <>
      <Router>
        <ScrollTopBehaviour />
        <Switch>
          <Route exact path="/" component={HomeLight} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route path="/dashboard/buy" component={Buyescrow} />
          {/* <Route path="/home-light" component={HomeLight} />
          <Route path="/home-light-animation" component={HomeLightAnimation} />
          <Route
            path="/home-light-rtl-animation"
            component={HomeLightRtlAnimation}
          /> 
          <Route
            path="/home-light-sidebar-two"
            component={HomeLightSidebarTwo}
          />
          <Route path="/dark-particle-effect" component={HomeDarkParticles} />
          <Route
            path="/home-light-professional"
            component={LightProfessionalAnimation}
          />
          <Route
            path="/home-light-professional-2"
            component={HomeLightProfessional2}
          />
          <Route path="/home-dark" component={HomeDark} />
          <Route path="/home-dark-animation" component={HomeDarkAnimation} /> */}
          <Route component={NotFound} />
        </Switch>
      </Router>
      <NetworkError open={errorNetwork} setOpen={setErrorNetwork} />
      <AwaitingApproval open={approveAwait} setOpen={setApproveAwait} />
      <GasError open={gasError} setOpen={setGasError} />
      <InformationModal
        open={contractMsg}
        setOpen={setContractMsg}
        title="Multi signature contract is created"
        desc="Check the transaction & multisig contract address"
        desc2="( Do not close the tab or refresh the page )"
      />
      <InformationModal
        open={payMsg}
        setOpen={setPayMsg}
        title="Continue to pay 100 EQX"
        desc="This is contract deployment fees & must be paid"
        desc2="( Do not close the tab or refresh the page )"
      />
      <InformationModal
        open={tokenMsg}
        setOpen={setTokenMsg}
        title="G-Token contract is successfully created"
        desc="Check the transaction & contract address"
        desc2=""
      />
    </>
  );
};

export default Routes;
