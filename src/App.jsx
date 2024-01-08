import { useState } from "react";
import "./App.css";
import Settings from "./components/Settings";

function App() {

  return (
    <>
      <h1>Sistema de Pesagem com Webserial</h1>
      <hr />
      <Settings />
    </>
  );
}

export default App;
