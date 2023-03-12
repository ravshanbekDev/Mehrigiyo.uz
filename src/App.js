import React from "react";
import Authentication from "./Authentication";
import UnAuthentication from "./UnAuthentication";

function App() {
  const token = JSON.parse(window.localStorage.getItem("token"));
  if (token) {
    return <Authentication />;
  } else {
    return <UnAuthentication />;
  }
}

export default App;
