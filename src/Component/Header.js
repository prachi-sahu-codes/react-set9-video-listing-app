import { NavLink } from "react-router-dom";
import { useData } from "../App";

export const Header = () => {
  const { liked, watchLater } = useData();
  const getActiveStyle = ({ isActive }) => ({
    color: isActive ? "#240046" : "#7b2cbf",
    textDecoration: isActive ? "underline" : "",
  });
  return (
    <nav className="navigation">
      <NavLink to="/" style={getActiveStyle} className="navLink">
        Home
      </NavLink>
      <NavLink to="/videos" style={getActiveStyle} className="navLink">
        Videos
      </NavLink>
      <NavLink to="/liked" style={getActiveStyle} className="navLink">
        Liked Videos{liked.length === 0 ? "" : `(${liked.length})`}
      </NavLink>
      <NavLink to="/later" style={getActiveStyle} className="navLink">
        Watch Later{watchLater.length === 0 ? "" : `(${watchLater.length})`}
      </NavLink>
    </nav>
  );
};
