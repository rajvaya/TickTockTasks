import "./button.css"
import classNames from "classnames"

interface ButtonProps {
  variant?:string,
  label:string,
  onClick:()=>any
  activeState?:boolean
}

function Button({variant = "primary",label,onClick,activeState} : ButtonProps ) {
  var buttonClass = classNames("button",variant,{"active":activeState})
  var buttonTextClaass = classNames("button-text",variant)
  return (
    <button className={buttonClass} onClick={onClick}>
        <span className={buttonTextClaass}>{label}</span>
    </button>
  )
}

export default Button