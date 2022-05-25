import Styles from './VaultView.module.css'
import {useParams} from "react-router-dom";

const data = {
    owner: '0x029...392',
    status: 'Farming',
    strategy: 'Automatic',
    tvl: 8365354,
    unlockDate: `${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}`,
    investors: 12,
    investments: [
      {
        vaultPercentage: '37%',
        asset: 'Eth-USDC',
        contract: '0x029...392',
        platform: 'Beefy.finance',
        pl: '9%',
      },
      {
        vaultPercentage: '37%',
        asset: 'Eth-USDC',
        contract: '0x029...392',
        platform: 'Beefy.finance',
        pl: '9%',
      },
    ]
  }

// TODO no lol
// const bgImage = require(`../../../../assets/2.png`).default

function InfoBox(props) {
  return (
      <div className={`flex flex-row justify-between accent-text`}>
        <p className={`text-opacity-75`}>{props.desc}:</p>
        <p className={``}>{props.value}</p>
      </div>
  )
}

function VaultView(props) {
  let { id } = useParams()
  return (
      <div className={`dark-bg p-6 flex content-center`}>
        <div className={`${Styles.vaultContainer} rounded-xl p-10`}>
          <h1 className={`yellow-text text-3xl font-face-texturina pb-6`}>Vault #{id}</h1>
          <InfoBox desc={'Owner'} value={data.owner}/>
          <InfoBox desc={'Status'} value={data.status}/>
          <InfoBox desc={'Strategy'} value={data.strategy}/>
          <InfoBox desc={'TVL'} value={`$ ${data.tvl}`}/>
          <InfoBox desc={'Unlock Date'} value={data.unlockDate}/>
          <InfoBox desc={'Investors'} value={data.investors}/>
          <h1 className={`yellow-text text-xl font-face-texturina pt-6`}>Investments</h1>
          <h2 className={`yellow-text text-sm font-face-texturina pb-6`}>Potion #1</h2>
          <div>
            <InfoBox desc={'Vault Percentage'} value={data.investments[0].vaultPercentage}/>
            <InfoBox desc={'Asset'} value={data.investments[0].asset}/>
            <InfoBox desc={'Contract'} value={data.investments[0].contract}/>
            <InfoBox desc={'Platform'} value={data.investments[0].platform}/>
            <InfoBox desc={'P/L'} value={data.investments[0].pl}/>
          </div>
          <h2 className={`yellow-text text-sm font-face-texturina pb-6`}>Potion #2</h2>
          <div>
            <InfoBox desc={'Vault Percentage'} value={data.investments[1].vaultPercentage}/>
            <InfoBox desc={'Asset'} value={data.investments[1].asset}/>
            <InfoBox desc={'Contract'} value={data.investments[1].contract}/>
            <InfoBox desc={'Platform'} value={data.investments[1].platform}/>
            <InfoBox desc={'P/L'} value={data.investments[1].pl}/>
          </div>
        </div>
      </div>
  )
}

export default VaultView