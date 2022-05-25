import Styles from './VaultCard.module.css'
import {LinkButton} from "../../../shared/Button/LinkButton";
import {useState} from "react";

function getImage(imageName) {
  return require(`../../../../assets/${imageName}`)
      .default;
}


function InfoBox(props) {
  return (
      <div className={`flex flex-row justify-between accent-text`}>
        <p className={`text-opacity-75`}>{props.desc} :</p>
        <p className={``}>{props.value}</p>
      </div>
  )
}
function InfoBoxHeader(props) {
  return (
      <div className={`flex flex-row justify-between yellow-text font-bold`}>
        <p className={`text-opacity-75`}>{props.desc} :</p>
        <p className={``}>{props.value}</p>
      </div>
  )
}
function VaultCardDetails(props) {
  return (
      <div className={`flex flex-col p-6 overflow-hidden ${Styles.details} ${props.show ? Styles.show : Styles.hide}`}>
        <div>
          <div className={`mb-2`}>
            <InfoBoxHeader desc={'Potion #1'} value={'35%'} />
            <InfoBox desc={'Asset'} value={'USDC/FTM'} />
            <InfoBox desc={'Contract'} value={'0x034...825'} />
            <InfoBox desc={'Creator'} value={'Spookyswap'} />
          </div>
          <div className={`mb-2`}>
            <InfoBoxHeader desc={'Potion #2'} value={'27%'} />
            <InfoBox desc={'Asset'} value={'Beefy'} />
            <InfoBox desc={'Contract'} value={'0x034...825'} />
            <InfoBox desc={'Creator'} value={'Beefy'} />
          </div>
          <div className={`mb-2`}>
            <InfoBoxHeader desc={'Potion #2'} value={'38%'} />
            <InfoBox desc={'Asset'} value={'Eth'} />
            <InfoBox desc={'Contract'} value={'Not Staked'} />
            <InfoBox desc={'Creator'} value={'Not staked'} />
          </div>
        </div>
        <button onClick={() => {
          props.setState(!props.show)
        }} className={`button`}>Back</button>
      </div>
  )
}

function VaultCard(props) {
  const [showDetails, setShowDetails] = useState(false);
  const vaultNumber = '11'
  return (
      <div className={`rounded-xl overflow-hidden ${Styles.card}`}>
        <VaultCardDetails show={showDetails} setState={setShowDetails}/>
        <div className={` ${Styles.imageContainer}`}>
          <img className={``} src={getImage(props.image.path)} alt={props.image.altText}/>
        </div>
        <div className={`pr-6 pl-6 pt-6 ${Styles.infoContainer}`}>
          {props.info.map((info, index) => <InfoBox key={index} desc={info.desc} value={info.value} />)}
        </div>
        <div className={`pr-6 pl-6 pt-6 pb-6 flex flex-row justify-between ${Styles.actionsContainer}`}>
          <button onClick={() => {
            setShowDetails(prevState => !prevState)
          }} className={`button`}>Details</button>
          <LinkButton link={vaultNumber} text={'Enter'} />
        </div>
      </div>
  )
}

export default VaultCard