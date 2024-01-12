import './Button.module.css'

export default function Button(props) {
    return (
        <button onClick={props.func}>{ props.titleOfButton }</button>
    )
}