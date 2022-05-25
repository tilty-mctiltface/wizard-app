import {Route, Routes} from "react-router-dom";
import Home from "../Home/Home";
import Vaults from "../vaults/Vaults";
import Header from "../shared/Header/Header";
import VaultView from "../vaults/components/VaultView/VaultView";
import Footer from "../shared/Footer/Footer";

function Wizards(props) {
  return (
      <div className="App">
          <Header/>
          <Routes>
            <Route path="home" element={ <Home/> }/>
            <Route path="all-wizards" element={ <Vaults/> }/>
            <Route path="all-wizards/:id" element={ <VaultView/> }/>
            {/*<Route path="*" element={ <NotFound/> } />*/}
          </Routes>
        <Footer/>
      </div>
  )
}

export default Wizards