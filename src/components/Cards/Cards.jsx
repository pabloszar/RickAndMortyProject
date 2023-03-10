import Card from '../Card/Card.jsx';
import style from './Cards.module.css';

export default function Cards({characters, onClose}) {
          //characters es un array; Ya no hay que usar props

   return (
   <div className={style.container}>
      {characters.map(character => {
         return (
            <Card
               name={character.name}
               species={character.species}
               gender={character.gender}
               image={character.image}
               onClose={onClose}
            />
         );
      })
      }
   </div>
   );
}
