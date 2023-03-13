import Cards from "../../Cards/Cards.jsx";

const Home = ({characters, onClose}) => {

    return (
        <div>
        <Cards
          characters={characters}
          onClose={onClose}
        />
      </div>
    );
}

export default Home;