export default function useGetTotalKg(items, type) {
  if (items.length > 0) {
    let itemsSeparados = items.filter((item) => item.part == type);
    let totalKg = itemsSeparados.reduce((sum, item) => +sum + item.kg, 0).toFixed(3);
    let amount = itemsSeparados.length;
    return {totalKg, amount}
  } else {
    return 0
  }
}
