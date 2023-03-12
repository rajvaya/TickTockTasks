import "./button.css"
import classNames from "classnames"

interface ButtonProps {
  variant?:string,
  label:string,
  onClick:()=>any
}


function Button({variant = "primary",label,onClick} : ButtonProps ) {
  var buttonClass = classNames("button",variant)
  var buttonTextClaass = classNames("button-text",variant)
  return (
    <button className={buttonClass} onClick={onClick}>
        <span className={buttonTextClaass}>{label}</span>
    </button>
  )
}

export default Button