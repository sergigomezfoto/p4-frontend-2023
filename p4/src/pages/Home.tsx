import { FunctionComponent } from "react";
import { Link, useNavigate } from "react-router-dom";

interface HomeProps {

}

const Home: FunctionComponent<HomeProps> = () => {
    const navigate = useNavigate();


    return (
        <div>
            <h1>Home</h1>
            <Link to="/about"> a l'about</Link>
            <button onClick={()=>navigate('/layout/55') }>Ves a layout amb nombre</button>
        </div>
    );
}

export default Home;