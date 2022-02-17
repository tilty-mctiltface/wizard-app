import Header from "../shared/Header/Header";
import Information from "./Information/Information";
import MintArea from "../shared/MintArea/MintArea";
import Roadmap from "./Roadmap/Roadmap"
import "./Home.css"
import Footer from "../shared/Footer/Footer";

function Home(props) {
    return (
        <div>
          <div className="background-fixed">
          </div>
          <div className="h-screen ">
            <Header/>
            <div className="pl-20 pr-20">
              <Information/>
              <MintArea/>
              <Roadmap/>
              <Footer/>
            </div>
          </div>
        </div>
    )
}

export default Home