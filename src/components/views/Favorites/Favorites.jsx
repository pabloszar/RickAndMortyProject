import { connect } from "react-redux";
import style from "./Favorites.module.css";



const Favorites = (props) => {
  
  const myFavorites = props.myFavorites;
  
  return (
    <div className={style.container}>
     
      {
      myFavorites.map(t => {
        
        return (
          <div className="character">
            <p className="id">{t.name}</p>
            <img src="" alt="Image" />
            <h1 className="name"></h1>
          </div>
        )
      })
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
     myFavorites: state.myFavorites
  };
};

export default connect(mapStateToProps, null)(Favorites);