import Button from './Button'

export default function ConnectionWithBalance({ baudRate }) {
  let baudRateCurrent = baudRate;
  
  //função para conectar uma serial
  async function connectSerial() {
    try {
      console.log("Selecione uma serial...");
      let device = await navigator.serial.requestPort();
      await device.open({ baudRate: baudRateCurrent });
      console.log(device);
      console.log("Dispositivo conectado!");
      //readToSerial(device);
      return;
    } catch (error) {
      console.log(
        "Nenhuma serial selecionada ou algum erro aconteceu. Erro: " + error
      );
    }
  }

  async function readToSerial(device) {
    //read data of serial port
    const reader = device.readable.getReader();
    
    while(true) {
      const { value, done } = await reader.read();
      console.log(value);
    }
  }

  return (
    <>
      <h3>Conexão com a Balança</h3>
      <Button titleOfButton={'Conectar a Balança'} func={connectSerial}/>
    </>
  );
}
