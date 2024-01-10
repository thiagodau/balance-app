import { useState } from "react";
import Button from "./Button";

export default function ConnectionWithBalance({ baudRate }) {
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
        //readToSerial(port);
      }
      return;
    } catch (error) {
      console.log(error);
    }
  }

  //Function to Disconnect on Serial
  async function disconnectSerial(device) {
    let text = "Tem certeza que deseja desconectar-se da balança?";
    if (confirm(text)) {
      await device.close();
      setStatusBalance(false);
      console.log("Dispositivo desconectado!");
    }
  }

  async function readToSerial(device) {
    const reader = device.readable.getReader();
    while (true) {
      const { value, done } = await reader.read();
      console.log(value);
      if (done) {
        //aqui para de ler
        break;
      }
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
