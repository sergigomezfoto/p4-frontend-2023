import { FC, useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
import { HomePhoto } from "../components/HomePhoto/HomePhoto";
import Loading from "../components/Loading/Loading";
import ErrorPage from '../components/ErrorPage/ErrorPage';
import styles from './Home.module.css';
import { useApi } from "../context/ApiContext";

interface HomeProps {

}

const Home: FC<HomeProps> = () => {
    const api = useApi();
    const [data, setPhotosResponse] = useState<any | null>(null);
    
    useEffect(() => {
        api.search
            .getPhotos({ query: "barcelona", orientation: "landscape", perPage: 30 })
            .then(result => {
                setPhotosResponse(result);
                console.log(result);
            })
            .catch(() => {
                console.log("error!");
            });
    }, []);

    if (data === null) {
        return <Loading/>;
    } else if (data.errors) {
        return ( 
                <ErrorPage error={data.errors[0]}/>
        );
    } else {
        return (
            <div className={styles.wrapper}>          
                    {data.response.results.map((photo: HomePhoto) => (
                        <div key={photo.id} >
                            <HomePhoto photo={photo} />
                        </div>
                    ))}
            </div>
        );
    }
}

export default Home;