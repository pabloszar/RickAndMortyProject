import './App.css'
import Home from './components/views/home/home';
import About from './components/views/aboutView/about';
import Landing from './components/views/Landing/start';
import Details from './components/views/detailsView/details';
import Favorites from './components/views/Favorites/Favorites';

import Nav from './components/Nav/Nav';
import Form from './components/Form/Form';

import {useState, useEffect} from "react";
import {Routes, Route, useNavigate} from "react-router-dom";


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

  //--------------Form access to app----------------------
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = 'pabloCorreo@gmail.com';
  const password = 'pablo123';

  function login(userData) {
    if (userData.password === password && userData.username === username) {
        setAccess(true);
        navigate('/home');
    }
  }
  useEffect(() => {
    !access && navigate('/');
 }, [access]);
//-----------------------------------------------------------------

  return (
    <div className='App' style={{ padding: '25px' }}>
      <Nav onSearch={onSearch}/>
      <Routes>
        {/* <Route path='/' element={<Landing/>} /> */}
        <Route path='/' element={<Form login={login} />} />
        <Route path='/home' element={<Home characters={characters} onClose={onClose} />}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/details/:detailId' element={<Details/>} />
        <Route path='/favorites' element={<Favorites/>}></Route>
      </Routes>
    </div>
  )
}

export default App;
