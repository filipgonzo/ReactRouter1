import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./component/Home";
import Navbarra from "./component/Navbarra";
import Contacto from "./component/Contacto";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbarra></Navbarra>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contacto" element={<Contacto/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
