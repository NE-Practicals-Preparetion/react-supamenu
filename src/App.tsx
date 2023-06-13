import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import Home from "./components/Home";
import Register from "./components/restaurant/Register";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={Home()} />
      <Route path="/signup" element={Signup()} />
      <Route path="/signin" element={Signin()} />
      <Route path="restaurant/register" element={Register()} />
    </Routes>
    </BrowserRouter>
    </>
  );  
}


export default App;
