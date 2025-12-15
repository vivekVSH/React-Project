import Nav2 from "./Nav2";
import { useContext } from "react";
import { ThemeDataContext } from "../context/ThemeContext";

const [data] = useContext(ThemeDataContext)
console.log(data);

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">{data}</div>
      <Nav2 theme={props.theme}/>
    </nav>
  );
};

export default Navbar;
