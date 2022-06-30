import "./App.css";
import Main from "./Componentes/Main/Main.jsx";
import Tarjeta from "./Componentes/Tarjeta/Tarjeta.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pokemones from "./Componentes/Pokemones/Pokemones";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route
            path="tarjeta/:nombre"
            element={<Tarjeta pokemones={Pokemones} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
