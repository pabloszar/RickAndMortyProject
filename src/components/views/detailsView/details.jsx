import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./details.module.css"
import { Link } from "react-router-dom";
import axios from "axios";

const Details = () => {
   const { detailId } = useParams();

   const [character, setCharacter] = useState({});

   // useEffect(() => {
   //    const URL_BASE = "https://be-a-rym.up.railway.app/api";
   //    const KEY = "fb9f03c63ebe.e03f2be4735b9c19d54d";
  
   //    axios(`${URL_BASE}/character/${detailId}?key=${KEY}`).then((response) =>
   //      setCharacter(response.data)
   //    );
   //  }, []);

   useEffect(() => {
      fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
         .then((response) => response.json())
         .then((char) => {
            if (char.name) {
               setCharacter(char);
            } else {
               window.alert("No hay personajes con ese ID");
            }
         })
         .catch((err) => {
            window.alert("ERROOORRNo hay personajes con ese ID");
         });
         return setCharacter({});
      }, []);


   return (
      <div>  
         {character.name ? (  //?------------------ SI EXISTE EJECUTA
         <>
         <div className={style.Container}>
                
            <div className={style.renderImage}>
               <img src={character.image} alt="" />
               <Link to="/home">
               <h3 className={style.buttonReturn}>Return</h3>
               </Link>
            </div>

            <div className={style.details}>
               <h1>{character.name}</h1>
               <h2>{character.status}</h2>
               <h2>{character.specie}</h2>
               <h2>{character.gender}</h2>
               <h2>{character.origin?.name}</h2>
            </div>
         </div>
         </>
         ) : (       //?------------------ MIENTRAS NO EXISTA RESPUESTA DE LA API
            <h1>LOADING...</h1>
         )};
      </div>
   );
}

export default Details;