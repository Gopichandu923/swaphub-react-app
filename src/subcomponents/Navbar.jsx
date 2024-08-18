import "../css/navbar.css";
import logo from "../icons/swaphub.jpg";
import { IoOptions } from "react-icons/io5";
import { IoHome } from "react-icons/io5";
import { GrCart } from "react-icons/gr";
import { VscHeart } from "react-icons/vsc";
import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
function Options() {
  return (
    <div className="options">
      <IoOptions size={25} />
    </div>
  );
}

function Icon() {
  return (
    <div className="main-icon">
      <img src={logo} alt=" logo" className="main-icon-logo" />
    </div>
  );
}

function SearchBar() {
  const [Search, setSearch] = useState("");
  return (
    <>
      <div className="searchbar-wrapper">
        <input
          className="searchbar"
          type="text"
          value={Search}
          placeholder="search items"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </>
  );
}

function NavbarItems() {
  return (
    <div className="navbar-icons">
      <ul className="navbar-icons-list">
        <li>
          <Link to={"/"}>
            <IoHome size={25} />
          </Link>
        </li>
        <li>
          <Link to={"/favourites"}>
            <VscHeart size={25} />
          </Link>
        </li>
        <li>
          <Link to={"/cart"}>
            <GrCart size={25} />
          </Link>
        </li>
        <li>
          <Link to={"/user"}>
            <FaUserCircle size={30} />
          </Link>
        </li>
      </ul>
    </div>
  );
}

function Navbar() {
  return (
    <div className="navbar">
      <Options />
      <Icon />
      <SearchBar />
      <NavbarItems />
    </div>
  );
}
export default Navbar;
