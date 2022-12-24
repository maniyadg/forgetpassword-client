import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Forget from './Forget'
import Resetpass from './Resetpass'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/change-password" element={<Resetpass/>} />
      <Route path="/forget" element={<Forget />} />   
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
