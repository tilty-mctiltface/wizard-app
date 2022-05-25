import Styles from './Vaults.module.css'
import VaultCard from "./components/VaultCard/VaultCard";

import {vaultsData} from "./vaultsData";


function Vaults(props) {
  return (
      <div className={`pl-8 pr-8 pt-10 pb-10 min-h-screen dark-bg`}>
        <div className={`${Styles.vaultsBox}`}>
          {vaultsData.map((vault, index) => <VaultCard key={index} image={vault.image} info={vault.info} />)}
        </div>
      </div>
  )
}

export default Vaults