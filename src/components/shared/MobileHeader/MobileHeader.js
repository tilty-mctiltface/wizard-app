import {Link} from "react-router-dom";
import Styles from "./MobileHeader.module.css"

// import VelasLogo from '../../../assets/velas-logo.svg'

function MobileHeader(props) {
  return (
      <div className={`absolute w-full ${Styles.container}`}>
        <div className={`${Styles.menu} ${Styles.burger}`}><span></span></div>
        <LinkEl to={'/'} name={'Enchanted Forest'} />
        <LinkEl to={'/home'} name={'Home'} />
        <LinkEl to={'/proposals'} name={'Proposals'} />
        <LinkEl to={'/all-wizards'} name={'All Wizards'} />
        <LinkEl to={'/dao-info'} name={'DAO Information'} />
      </div>
  )
}

function LinkEl(props) {
  return (
          <Link to={props.to} className={`block pl-5 pr-5 pt-2 pb-2 mb-2 w-3/4 font-face-dalek text-xl ${Styles.menuPoint}`}>{props.name}</Link>
      )
}
export default MobileHeader