import Styles from './Landing.module.css'
import WizardHat from './../../assets/wizard-hat.png'
import WitchBowl from './../../assets/witch-bowl.png'
import {Link} from "react-router-dom";

function RealmButton(props) {
  return (
      <div className={Styles.realmButton + ' flex flex-row justify-between'}>
        <img className="h-12 tablet:h-32" src={props.src} alt={props.alt}/>
        <div className="flex flex-col justify-center">
          <p className={'light-text text-2xl tablet:text-5xl font-bold'}>{props.name}</p>
        </div>
      </div>
  )
}

function Landing(props) {
  return (
      <div className="dark-bg min-h-screen">
        <div>
          <h1 className="font-face-TreesRegular light-text text-6xl tablet:text-9xl text-center pt-20 pb-40">The Enchanted Forest</h1>
        </div>
        <div className="flex flex-row flex-wrap justify-around">
          <Link to="/home">
            <RealmButton src={WizardHat} alt={'WizardHat'} name={'The Wizards Tower'}/>
          </Link>
          <Link to="/v2">
            <RealmButton src={WitchBowl} alt={'WitchBowl'} name={'The Witche\'s Coven'}/>
          </Link>
        </div>
      </div>
  )
}

export default Landing