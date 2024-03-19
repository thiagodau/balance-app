export default function AnotherWeight({extra, setExtra, amountExtra, setAmountExtra}) {
  return (
    <>
      <label htmlFor="extra">Pesagem de: </label>
      <input
        type="text"
        name="extra"
        value={extra}
        onChange={(e) => setExtra(e.target.value)}
      />
      &nbsp;
      <label htmlFor="amountExtra">Total em KG: </label>
      <input
        type="number"
        name="amountExtra"
        value={amountExtra}
        onChange={(e) => setAmountExtra(e.target.value)}
      />
    </>
  );
}
