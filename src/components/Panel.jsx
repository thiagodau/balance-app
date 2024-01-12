import { useContext, useState } from "react";

import TypeBovine from "./TypeBovine";
import Button from "./Button";
import Kilograma from "./Kilograma";

import useSaveItem from "../hooks/useSaveItem";

import ItemsContext from "../contexts/ItemsContext";

import PropTypes from "prop-types";

Panel.propTypes = {
  kilograma: PropTypes.number,
}

export default function Panel({ kilograma }) {
  const [setItems] = useContext(ItemsContext);
  const [partBovine, setPartBovine] = useState("Dianteiro");

  const saveItemOnList = useSaveItem(setItems, partBovine, kilograma);

  return (
    <>
      <h3>Painel</h3>
      <TypeBovine partBovine={partBovine} setPartBovine={setPartBovine} />
      <Kilograma kilograma={kilograma} />
      <Button titleOfButton={"Gravar na lista"} func={saveItemOnList} />
    </>
  );
}
