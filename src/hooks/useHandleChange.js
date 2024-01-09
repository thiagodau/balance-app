export default function useHandleChange(funcSetHere) {
  const handleChange = (event) => {
    funcSetHere(event.target.value);
  };

  return handleChange;
}
