import { useContext, useState } from "react";

import Kilograma from "./Kilograma";
import TypeBovine from "./TypeBovine";
import useSaveItem from "../hooks/useSaveItem";
import ItemsContext from "../contexts/ItemsContext";
import Button from "./Button";

export default function Panel() {

  const [items, setItems] = useContext(ItemsContext)
  const [partBovine, setPartBovine] = useState("Dianteiro");
  const [kilograma, setKilograma] = useState(99.999);

  const saveItemOnList = useSaveItem(setItems, partBovine, kilograma);

  return (
    <>
      <h3>Painel</h3>
      <TypeBovine partBovine={partBovine} setPartBovine={setPartBovine} />
      <Kilograma kilograma={kilograma}/>
      <Button titleOfButton={'Gravar na lista'} func={saveItemOnList} />
    </>
  );
}
