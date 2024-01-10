import { useState } from "react";
import Button from "./Button";

export default function ConnectionWithBalance({ baudRate }) {
  let baudRateCurrent = baudRate;

  const [statusBalance, setStatusBalance] = useState(false);
  const [device, setDevice] = useState();

  //Function to Connect on Serial
  async function connectSerial() {
    try {
      let device = await navigator.serial.requestPort();
      await device.open({ baudRate: baudRateCurrent });
      if (device) {
        setStatusBalance(true);
        setDevice(device);
        console.log(device.getInfo());
        console.log("Dispositivo conectado!");
        //readToSerial(device);
      }
      return;
    } catch (error) {
      console.log(error);
    }
  }

  //Function to Disconnect on Serial
  async function disconnectSerial(device) {
    let text = 'Tem certeza que deseja desconectar-se da balança?'
    if(confirm(text)) {
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
