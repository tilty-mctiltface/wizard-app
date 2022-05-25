import './App.css';
import Landing from "./components/Landing/Landing";
import NotFound from "./components/404/NotFound";

import {Routes, Route, BrowserRouter} from "react-router-dom";
import Wizards from "./components/Wizards/Wizards";

function App() {
  return (
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/wizards/*" element={ <Wizards/> }/>
              <Route path="/" element={ <Landing/> }/>
              <Route path="*" element={ <NotFound/> } />
            </Routes>
          </BrowserRouter>
        </div>
  );
}

export default App;
