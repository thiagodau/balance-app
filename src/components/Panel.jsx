import { useState } from "react";

import TypeBovine from "./TypeBovine";
import Button from "./Button";
import Kilograma from "./Kilograma";

import useSaveItem from "../hooks/useSaveItem";

import PropTypes from "prop-types";

Panel.propTypes = {
  kilograma: PropTypes.number,
};

export default function Panel({ kilograma, setItems }) {
  const [partBovine, setPartBovine] = useState("Dianteiro");

  const saveItemOnList = useSaveItem(setItems, partBovine, kilograma);

  return (
    <div className="panel">
      <TypeBovine partBovine={partBovine} setPartBovine={setPartBovine} />
      <Kilograma kilograma={kilograma} />
      <Button titleOfButton={"Gravar na lista"} func={saveItemOnList} />
    </div>
  );
}
