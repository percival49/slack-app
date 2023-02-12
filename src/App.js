import Home from "./Components/Home/Home";
import Signup from "./Components/Signup/Signup";
import Slack from "./Components/Slack/Slack";

import { useState } from "react";

import "./App.css";
import "./Components/Utilities/Styles/style.css";
import { useEffect } from "react";

function App() {
  // Utility
  const utilities = {
    changePage: (event, page) => {
      event.preventDefault();
      setPage(page);
    },
  };

  // Account
  const [account, setAccount] = useState("");

  // const checkIfAlreadyLoggedIn = () => {
  //   if (JSON.parse(localStorage.getItem("loggedAccount")).isLogged) {
  //   }
  // };

  // Page Rendering
  const [page, setPage] = useState("home");
  let renderedPage = null;

  if (page === "home") {
    renderedPage = (
      <Home account={account} setAccount={setAccount} utilities={utilities} />
    );
  } else if (page === "signup") {
    renderedPage = <Signup account={account} utilities={utilities} />;
  } else if (page === "slack") {
    renderedPage = <Slack account={account} />;
  }

  return <div>{renderedPage}</div>;
}

export default App;
