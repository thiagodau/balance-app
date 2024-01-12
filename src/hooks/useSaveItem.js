export default function useSaveItem(funcSet, partBovine, kilograma) {
  const saveOnList = () => {
    let item = {
      id: Math.floor(Math.random() * 1000000),
      part: partBovine,
      kg: kilograma,
    };
    console.log(item)

    funcSet((currentState) => {
      const newState = [...currentState, item];
      localStorage.setItem("bapp-items", JSON.stringify(newState));
      return newState;
    });

    //const element = document.getElementById("positionBottom");
    //element.scrollIntoView({ behavior: "smooth", block: "end", inline: "end" });
    var heightPage = document.body.scrollHeight;
    window.scrollTo(0 , heightPage);
  };

  return saveOnList;
}
