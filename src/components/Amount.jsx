import PropTypes from "prop-types";

Amount.propTypes = {
  items: PropTypes.array,
  getTotalAndSumDianteiro: PropTypes.object,
  getTotalAndSumTraseiro: PropTypes.object,
};

export default function Amount({
  items,
  getTotalAndSumDianteiro,
  getTotalAndSumTraseiro,
}) {
  let totalGeralKg = (
    +getTotalAndSumDianteiro.totalKg + +getTotalAndSumTraseiro.totalKg
  ).toFixed(3);
  return (
    <>
      Total de Dianteiro: {getTotalAndSumDianteiro.totalKg}KG e sua quantidade é{" "}
      {getTotalAndSumDianteiro.amount}
      <br />
      Total de Traseiro: {getTotalAndSumTraseiro.totalKg}KG e sua quantidade é{" "}
      {getTotalAndSumTraseiro.amount}
      <br />
      Soma total: {totalGeralKg == "NaN" ? 0 : totalGeralKg}KG
      <br />
      Total de Items: {items.length}
    </>
  );
}
