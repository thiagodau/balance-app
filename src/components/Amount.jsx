import PropTypes from "prop-types";

Amount.propTypes = {
  items: PropTypes.array,
  getTotalAndSumDianteiro: PropTypes.any,
  getTotalAndSumTraseiro: PropTypes.any,
};

export default function Amount({
  items,
  getTotalAndSumDianteiro,
  getTotalAndSumTraseiro,
  extra,
  amountExtra,
}) {
  let totalGeralKg = (
    +getTotalAndSumDianteiro.totalKg + +getTotalAndSumTraseiro.totalKg
  ).toFixed(3);
  return (
    <div className="footer-data">
      <table>
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Quantidade</th>
            <th>Total (Kg)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dianteiro</td>
            <td>{getTotalAndSumDianteiro.amount} unidades</td>
            <td>{getTotalAndSumDianteiro.totalKg}KG</td>
          </tr>

          <tr>
            <td>Traseiro</td>
            <td>{getTotalAndSumTraseiro.amount} unidades</td>
            <td>{getTotalAndSumTraseiro.totalKg}KG</td>
          </tr>

          <tr>
            <td>Ambos</td>
            <td>{items.length} unidades</td>
            <td>{totalGeralKg == "NaN" ? 0 : totalGeralKg}KG </td>
          </tr>
          {extra.length > 0 ? (
            <tr>
              <td>Outros</td>
              <td>{extra}</td>
              <td>{amountExtra}KG </td>
            </tr>
          ) : null}
        </tbody>
      </table>
    </div>
  );
}
