export default function Kilograma({ kilograma, stability }) {
  const cor = stability ? 'green' : 'orange';
  return (
    <>
      <h3 style={{ color: cor}} className="kilogramaToString">{kilograma.toFixed(3)} KG</h3>
    </>
  );
}
