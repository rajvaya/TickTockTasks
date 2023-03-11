import "./button.css"
import classNames from "classnames"

function Button({variant} : {variant:string} ) {
  var buttonClass = classNames("button",variant)
  var buttonTextClaass = classNames("button-text",variant)
  return (
    <button className={buttonClass}>
        <span className={buttonTextClaass}>Click me</span>
    </button>
  )
}

export default Button