import style from "./Card.module.css"
import { Link } from "react-router-dom";

export default function Card({id, name, onClose, image, species, gender}) {
   


   return (
      <div className={style.container}>

         <div className={style.header}>
            <div className={style.titles}>
               <div className={style.id}>{id}</div>
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
