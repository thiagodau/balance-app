import { useState } from "react";
import PropTypes, { bool } from "prop-types";

import Button from "./Button";

Connection.propTypes = {
  baudRate: PropTypes.number,
  setKilograma: PropTypes.func,
};

export default function Connection({ baudRate, setKilograma }) {
  let baudRateCurrent = baudRate;

  const [statusBalance, setStatusBalance] = useState(false);
  const [device, setDevice] = useState();

  async function onSerialDisconnected(e) {
    setStatusBalance(false);
    console.log(e, "Disconnected!");
    console.log("Dispositivo desconectado!");
  }

  //Function to Connect on Serial
  async function connectSerial() {
    try {
      let port = await navigator.serial.requestPort();
      await port.open({ baudRate: baudRateCurrent });
      port.addEventListener("disconnect", onSerialDisconnected);
      if (port) {
        setStatusBalance(true);
        setDevice(port);
        console.log(port.getInfo());
        console.log("Dispositivo conectado!");
        //le dados da balança...
        readToSerial(port);
      }
      return;
    } catch (error) {
      console.log(error);
    }
  }

  //Function to Disconnect on Serial
  async function disconnectSerial() {
    let text = "Tem certeza que deseja desconectar-se da balança?";
    if (confirm(text)) {
      setStatusBalance(false);
      location.reload();
      console.log("Dispositivo desconectado!");
    }
  }

  async function readToSerial(port) {
    const reader = port.readable.getReader();
    try {
      while (reader) {
        const { value, done } = await reader.read();
        let unit8Array = value;
        //console.log('Dados: ' + unit8Array)
        let result = new TextDecoder().decode(unit8Array);
        if (result.length > 5) {
          let kg = +result / 1000;
          setKilograma(kg);
          console.log(kg);
        }
        if (done) {
          console.log("parou.");
          break;
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      //reader.releaseLock();
      console.log("chamou finally...");
    }

  }

  return (
    <>
      <h3>
        Conexão com a Balança - Status:{" "}
        {statusBalance ? "Conectada!" : "Desconectada!"}
      </h3>

      {!statusBalance ? (
        <Button titleOfButton={"Conectar a Balança"} func={connectSerial} />
      ) : (
        <button onClick={() => disconnectSerial(device)}>Desconectar</button>
      )}
    </>
  );
}
