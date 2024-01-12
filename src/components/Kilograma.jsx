export default function Kilograma({ kilograma }) {
  return (
    <h3 className="kilogramaToString">{ kilograma.toFixed(3) } KG</h3>
  );
}
