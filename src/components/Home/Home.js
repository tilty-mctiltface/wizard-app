import Styles from './Home.module.css'
import MintArea from "../shared/MintArea/MintArea";
import Footer from "../shared/Footer/Footer";
// import Header from "../shared/Header/Header";

import Wizard1 from "../../assets/1.png"
import Wizard2 from "../../assets/2.png"
import Wizard3 from "../../assets/3.png"
import Wizard4 from "../../assets/4.png"
import Wizard5 from "../../assets/5.png"
import Wizard6 from "../../assets/6.png"
import Wizard7 from "../../assets/7.png"
import Wizard8 from "../../assets/8.png"
import Wizard9 from "../../assets/9.png"
import Discord from "../../assets/socials/discord.svg";
import Twitter from "../../assets/socials/twitter.svg";
import Telegram from "../../assets/socials/telegram.svg";
import Medium from "../../assets/socials/medium.svg";
import Github from "../../assets/socials/github.svg";
import MobileHeader from "../shared/MobileHeader/MobileHeader";

function Home(props) {
  return (
      <div>
        <MobileHeader/>
        <div className="h-full dark-bg pr-8 pl-8">
          {/*<Header/>*/}
          <Images/>
          <Description/>
          <StickySocials/>
          <MintArea/>
          <Footer/>
        </div>
      </div>
  )
}

function Description(props) {
  return (
      <div className="flex flex-col tablet:flex-row justify-center align-center items-center pt-20 pb-16">
        <div className={"rounded-xl relative rounded-xl overflow-hidden tablet:mr-8 mr-0 mb-4 " + Styles.borderAccent}>
          <div className="bg-gray-900 bg-opacity-70 absolute h-64 w-64 flex justify-center align-center items-center">
            <p className={`text-9xl pb-3 font-bold font-face-texturina ${Styles.accentText}`}>?</p>
          </div>
          <img alt={'Wizard.jpg'} src={Wizard1} className="h-64 w-64"/>
        </div>
        <div className={`w-auto tablet:w-5/12 font-face-texturina ${Styles.accentText}`}>
          <h3 className="text-4xl font-bold mb-4">The Wizard's Tower</h3>
          <p className="text-xl mb-2 yellow-text">Our Vision is to be the biggest community asset vault project on Velas.</p>
          <p className="text-l mb-2">
            The Wizard NFTs, aside from being incredibly awesome artworks, represent asset vaults that could run automated or discretionary strategies.
            The vaults get created when a user decides to mint an NFT within the platform.
            Afterwards, the minter proposes and describes the strategy and is looking to subscribe funds to it. The NFT vaults could intake any ERC-20 token.
          </p>
          <p className="text-xl yellow-text">Create your own vault with your friends or run an investment portfolio for your clients - the choice is yours!</p>
        </div>
      </div>
  )
}

function Images(props) {
  return (
      <div className="grid tablet:grid-cols-2 tablet:grid-rows-4 laptop:grid-cols-5 laptop:grid-rows-2 gap-10 place-items-center pt-16 laptop:pt-16 mr-12 ml-12">
        <img alt="Wizard" src={Wizard9} className={`h-64 w-64 rounded-xl wizard-shadow cards-hover ${Styles.borderAccent} ${Styles.cardsHover}`}/>
        <img alt="Wizard" src={Wizard2} className={`h-64 w-64 rounded-xl wizard-shadow cards-hover ${Styles.borderAccent} ${Styles.cardsHover}`}/>
        <img alt="Wizard" src={Wizard3} className={`hidden tablet:block h-64 w-64 rounded-xl ${Styles.borderAccent} ${Styles.cardsHover}`}/>
        <img alt="Wizard" src={Wizard4} className={`hidden tablet:block h-64 w-64 rounded-xl ${Styles.borderAccent} ${Styles.cardsHover}`}/>
        <img alt="Wizard" src={Wizard5} className={`hidden tablet:block h-64 w-64 rounded-xl ${Styles.borderAccent} ${Styles.cardsHover}`}/>
        <img alt="Wizard" src={Wizard6} className={`hidden tablet:block h-64 w-64 rounded-xl ${Styles.borderAccent} ${Styles.cardsHover}`}/>
        <img alt="Wizard" src={Wizard7} className={`hidden tablet:block h-64 w-64 rounded-xl ${Styles.borderAccent} ${Styles.cardsHover}`}/>
        <img alt="Wizard" src={Wizard8} className={`hidden tablet:block h-64 w-64 rounded-xl ${Styles.borderAccent} ${Styles.cardsHover}`}/>
        <img alt="Wizard" src={Wizard1} className={`hidden tablet:block h-64 w-64 rounded-xl ${Styles.borderAccent} ${Styles.cardsHover}`}/>
        <img alt="Wizard" src={Wizard2} className={`hidden tablet:block h-64 w-64 rounded-xl ${Styles.borderAccent} ${Styles.cardsHover}`}/>
      </div>
  )
}

function SocialsIcon(props) {
  return (
      <a className={Styles.socialLink} href={props.link} target="_blank" rel="noreferrer">
        <img alt={props.alt} src={props.src} className="h-8 m-1"/>
      </a>
  )
}

function StickySocials(props) {
  return (
      <div className="flex flex-row justify-end mt-5 mb-5">
        <SocialsIcon link={'https://discord.gg/nM5KTwdqJB'} alt={'Discord'} src={Discord}/>
        <SocialsIcon link={'https://twitter.com/wizard_dao'} alt={'Twitter'} src={Twitter}/>
        <SocialsIcon link={'https://t.me/thewizardstowerofficial'} alt={'Telegram'} src={Telegram}/>
        <SocialsIcon link={'https://www.google.com'} alt={'Medium'} src={Medium}/>
        <SocialsIcon link={'https://www.google.com'} alt={'Github'} src={Github}/>
      </div>
  )
}


export default Home