import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Citas from "./pages/Citas";


function App() {

  return (

    <BrowserRouter>


      <Routes>

        <Route
          path="/"
          element={<Inicio />}
        />


        <Route
          path="/citas"
          element={<Citas />}
        />


      </Routes>


    </BrowserRouter>

  );

}


export default App;