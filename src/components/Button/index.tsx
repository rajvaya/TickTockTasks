import "./button.css"
import classNames from "classnames"

function Button({variant,label} : {variant:string,label:string} ) {
  var buttonClass = classNames("button",variant)
  var buttonTextClaass = classNames("button-text",variant)
  return (
    <button className={buttonClass}>
        <span className={buttonTextClaass}>{label}</span>
    </button>
  )
}

export default Button