import ReactDOM from "react-dom";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import "./assets/scss/main.scss";
import "./index.css";
// import "./App.css";
import store from "./walletutils/redux/store/index";
import { Provider } from "react-redux";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";

const getLibrary = (provider) => {
  return new Web3(provider);
};
ReactDOM.render(
  <Web3ReactProvider getLibrary={getLibrary}>
    <Provider store={store}>
      <>
        <App />
      </>
    </Provider>
  </Web3ReactProvider>,
  document.getElementById("root")
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
