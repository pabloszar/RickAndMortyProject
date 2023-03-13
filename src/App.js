import './App.css'
import Home from './components/views/home/home';
import About from './components/views/aboutView/about';
import Landing from './components/views/Landing/start';
import Details from './components/views/detailsView/details';

import Nav from './components/Nav/Nav';

import {useState} from "react";
import {Routes, Route} from "react-router-dom";


function App () {

  const [characters, setCharacters] = useState([]);

  function onSearch (character) {        
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
            if (characters.findIndex(character => character.name === data.name) == -1) {
              setCharacters(characters => [...characters, data]);
            }else{
              window.alert('This character is already selected'); 
            }
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
 }

  function onClose (characterName) {
    //Encontrar el index del objeto (character), teniendo una propiedad del objeto
    const index = characters.findIndex(character => character.name === characterName);
    const firstArr = characters.splice(0, index);
    const secondArr = characters.splice(index + 1);
    const newArr = firstArr.concat(secondArr);
    setCharacters( () => [...newArr]);
  }


  return (
    <div className='App' style={{ padding: '25px' }}>
      <Nav onSearch={onSearch}/>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/home' element={<Home characters={characters} onClose={onClose} />}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/details/:detailId' element={<Details/>} />
      </Routes>
    </div>
  )
}

export default App;
