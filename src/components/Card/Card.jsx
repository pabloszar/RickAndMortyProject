import style from "./Card.module.css"

export default function Card({name, onClose, image, species, gender}) {



   return (
      <div className={style.container}>

         <div className={style.header}>
            <div className={style.titles}>
               <div className={style.nameContainer}>
                  <h2 className={style.name}>{name}</h2> 
               </div>
               <button className={style.button} onClick={() => onClose(name)}>X</button>
            </div>
         </div>

         <div className={style.middle}>
            <img className={style.image} src={image} alt="Imagen de card" />
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
