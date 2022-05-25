import Styles from './LinkButton.module.css'
import {Link} from "react-router-dom";

export function LinkButton(props) {
  return (
      <div className={`font-face-texturina ${Styles.button}`}>
        <Link to={props.link}>{props.text}</Link>
      </div>
  )
}