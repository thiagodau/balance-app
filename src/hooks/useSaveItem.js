export default function useSaveItem(funcSetHere, partBovine, kilograma) {
  const saveOnList = () => {
    let item = {
      id: Math.floor(Math.random() * 1000000),
      part: partBovine,
      kg: kilograma,
    };
    funcSetHere((currentState) => {
      const newState = [...currentState, item];
      localStorage.setItem("bapp-items", JSON.stringify(newState));
      return newState;
    });
  };

  return saveOnList;
}
