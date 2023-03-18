import style from "./Card.module.css"
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFavorite, deleteFavorite } from "../../redux/actions";
import { useState, useEffect } from "react";


const Card = ({id, name, onClose, image, species, gender, addFavorite, deleteFavorite, myFavorites}) => {
   
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false)
         deleteFavorite(id)
      } else {
         setIsFav(true)
         addFavorite(id);
      }
   }

   // useEffect(() => {
   //    myFavorites.forEach((fav) => {
   //       if (fav.id === id) {
   //          setIsFav(true);
   //       }
   //    });
   // }, [myFavorites]);

   return (
      <div className={style.container}>

         <div className={style.header}>
            <div className={style.titles}>
               <div>
                  <div className={style.id}>{id}</div>
                  <div>{
                     isFav ? (
                        <button className={style.favButton} onClick={handleFavorite}>🥒</button>
                     ) : (
                        <button className={style.favButton} onClick={handleFavorite}>🤍</button>
                     )
                  }</div>               
               </div>
               
               <div className={style.nameContainer} >
                  <Link to={`/details/${id}`}>
                     <h2 className={style.name}>{name}</h2> 
                  </Link>
               </div>
               <button className={style.button} onClick={() => onClose(name)}>X</button>

            </div>
         </div>

         <div className={style.middle}>
            <Link to={`/details/${id}`}>
               <img className={style.image} src={image} alt="Imagen de card" />
            </Link>
         </div>


         <div className={style.footer}>

            <div className={style.etiquetas}>
               
               <div className={style.etiqueta}>
                  <div className={style.circle}></div>
                  <h2 className={style.species}>species: {species}</h2>
               </div>
               <div className={style.etiqueta}>
                  <div className={style.circle}></div>
                  <h3 className={style.gender}> gender: {gender}</h3>
               </div>

            </div>

         </div>

      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites      ,
   };
};
const mapDispatchToProps = (dispatch) => {
   return {    //Lo que está dentro de return es un objeto que pasa a las props de Card
      addFavorite: () => {
         dispatch(addFavorite());
       },
       deleteFavorite: () => {
         dispatch(deleteFavorite());
       },
   };
};

export default connect(mapStateToProps, mapDispatchToProps) (Card);