import { useState } from "react";

import Kilograma from "./Kilograma";
import TypeBovine from "./TypeBovine";
import useSaveItem from "../hooks/useSaveItem";

export default function Panel(props) {
  const [partBovine, setPartBovine] = useState("Dianteiro");
  const [kilograma, setKilograma] = useState(99.999);

  const saveItemOnList = useSaveItem(props.setItems, partBovine, kilograma);

  return (
    <>
      <h3>Painel</h3>
      <TypeBovine partBovine={partBovine} setPartBovine={setPartBovine} />
      <Kilograma kilograma={kilograma}/>
      <button onClick={saveItemOnList}>Gravar na lista</button>
    </>
  );
}
