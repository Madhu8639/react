import {MdMessage} from "react-icons/md";
import styles from "./Button.module.css"
const Button = ({text,icon,iswhite}) => {
  return (
    <button className={iswhite? styles.secondary_btn:styles.primary_btn} >
    {icon} {text} 
    </button>
  )
}

export default Button