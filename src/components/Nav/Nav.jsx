import style from "./Nav.module.css";
import SearchBar from "../SearchBar/SearchBar";

const Nav = ({onSearch}) => {
  return (
    <>
      <div className={style.nav}>
        <div className={style.container}>
          <SearchBar onSearch={onSearch}/>
        </div>
      </div>
    </>
  );
}

export default Nav;