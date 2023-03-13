import { Link } from "react-router-dom";


const Landing = () => {
    return (
        <div>
            <Link to="/home">
            <h1 className="button">LET'S PLAY</h1>
            </Link>
        </div>
    );
}


export default Landing;