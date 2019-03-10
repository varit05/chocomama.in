import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";
import Content from "./components/Common/Content";
import "bootstrap/dist/css/bootstrap.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./icomoon.css";
import "./styles.css";

function App() {
  AOS.init({
    duration: 800,
    easing: "slide",
    once: true
  });

  return (
    <div className="App">
      <Header />
      <Content className="main" />
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  rootElement
);
