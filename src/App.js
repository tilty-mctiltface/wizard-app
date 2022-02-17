import './App.css';
import Landing from "./components/Landing/Landing";
import Home from "./components/Home/Home";
import {Routes, Route, BrowserRouter,} from "react-router-dom";

function App() {
  return (
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/home" element={ <Home/> }/>
              <Route path="/" element={ <Landing/> }/>
            </Routes>
          </BrowserRouter>
        </div>
  );
}

export default App;
