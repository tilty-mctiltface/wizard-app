import './Header.css'
import Discord from "../../../assets/socials/discord.svg"
import Twitter from "../../../assets/socials/twitter.svg"
import Telegram from "../../../assets/socials/telegram.svg"
import Medium from "../../../assets/socials/medium.svg"
import Github from "../../../assets/socials/github.svg"
import {Link} from "react-router-dom";

function SocialsIcon(props) {
  return (
      <img alt={props.alt} src={props.src} className="h-8 m-1"/>
  )
}

function Header(props) {
  return (
      <div className="w-full pl-20 pr-20 pb-32 background light-text mb-12">
        <div className="flex flex-row flex-no-wrap justify-between pt-10 pb-10">
          <div className="flex flex-row">
            <SocialsIcon alt={'Discord'} src={Discord}/>
            <SocialsIcon alt={'Twitter'} src={Twitter}/>
            <SocialsIcon alt={'Telegram'} src={Telegram}/>
            <SocialsIcon alt={'Medium'} src={Medium}/>
            <SocialsIcon alt={'Github'} src={Github}/>
          </div>
          <nav className="flex flex-row font-face-dalek light-text">
            <Link to="/" className="pl-5 pr-5 menu-point">Enchanted Forest</Link>
            <Link to="/home" className="pl-5 pr-5 menu-point">Home</Link>
            <Link to="/proposals" className="pl-5 pr-5 menu-point">Proposals</Link>
            <Link to="/all-wizards" className="pl-5 pr-5 menu-point">All Wizards</Link>
            <Link to="/dao-info" className="pl-5 pr-5 menu-point">DAO Information</Link>
          </nav>
          <div>
            <button className="connectBtn">Connect Wallet</button>
          </div>
        </div>
        <h1 className="text-center font-face-dalek text-8xl">The Wizard's Tower</h1>
      </div>
  )
}

export default Header