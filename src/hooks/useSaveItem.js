export default function useSaveItem(funcSetHere, partBovine, kilograma) {
  const saveOnList = () => {
    let item = {
      id: Math.floor(Math.random() * 1000000),
      part: partBovine,
      kg: kilograma,
    };
    funcSetHere((currentState) => [...currentState, item]);
  };

  return saveOnList
}
