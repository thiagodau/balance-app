import Button from "./Button";

export default function Header({ enterpriseName }) {
  return (
    <>
      <h1>{ enterpriseName }</h1>
      <Button titleOfButton={'Conectar na Balança'}/>
    </>
  );
}
