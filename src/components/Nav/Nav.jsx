import style from "./Nav.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

const Nav = ({onSearch}) => {
  return (
    <>
      <div className={style.nav}>
        <div className={style.container}>
          <Link to="/home">
            <p>Home</p>
          </Link>
          <Link to="/about">
            <p>About</p>
          </Link>
          <Link to="/favorites">
            <p>Favorites 🥒</p>
          </Link>
          <SearchBar onSearch={onSearch}/>
        </div>
      </div>
    </>
  );
}

export default Nav;