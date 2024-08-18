import Navbar from "./subcomponents/Navbar";
import Home from "./components/Home.jsx";
import Favourites from "./components/Favourites.jsx";
import Cart from "./components/Cart";
import User from "./components/User.jsx";
import "./css/home.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

function App() {
  const {currentUser}=useSelector((state)=>state.user);
  const {open,message,severity}=useSelector((state)=>state.user)
  const [openAuth,setOPenAuth]=useState(false);
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar setOPenAuth={setOPenAuth}/>
        <Routes>
          <Route path={"/"} element={<Home />}></Route>
          <Route path={"/cart"} element={<Cart />}></Route>
          <Route path={"/favourites"} element={<Favourites />}></Route>
          <Route path={"/user"} element={<User />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
