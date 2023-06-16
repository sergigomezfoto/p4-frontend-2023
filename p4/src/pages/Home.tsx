import { FC, useEffect, useRef, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
import { SmallPhoto } from "../components/SmallPhoto/SmallPhoto";
import Loading from "../components/Loading/Loading";
import ErrorPage from '../components/ErrorPage/ErrorPage';
import styles from './Home.module.css';
import { useApi } from "../context/ApiContext";
import { PhotoType } from "../types/Photo";
import HomeTitle from '../components/HomeTitle/HomeTitle';
// import '../common_css/common_css.css'

interface HomeProps {

}

const Home: FC<HomeProps> = () => {
    const api = useApi();
    const [data, setPhotosResponse] = useState<any | null>(null);


    useEffect(() => {       
        const cachedData = sessionStorage.getItem("apiData");
        if (cachedData) {
            setPhotosResponse(JSON.parse(cachedData));
        } else {
            console.log(data);
            api.search
                .getPhotos({ query: "barcelona", orientation: "landscape", perPage: 30 })
                .then(result => {
                    setPhotosResponse(result);
                    sessionStorage.setItem("apiData", JSON.stringify(result));
                    console.log(result);
                })
                .catch(() => {
                    console.log("error!");
                });
        }
    }, []);

    const handleBeforeUnload = () => {
        sessionStorage.removeItem("apiData");
        localStorage.removeItem("apiData");
    };

    useEffect(() => {
        window.addEventListener("beforeunload", handleBeforeUnload);
        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, []);

    if (data === null) {
        return <Loading />;
    } else if (data.errors) {
        return (
            <ErrorPage error={data.errors[0]} />
        );
    } else {
        return (<>
            <HomeTitle />
            <div className={`${styles.wrapper} ${styles['custom-cursor']}`} >
                {data.response.results.map((photo: PhotoType) => (
                    // <div key={photo.id} className={styles.card}>
                    <SmallPhoto photo={photo} key={photo.id} />
                    // </div>
                ))}
            </div>
        </>
        );
    }
}

export default Home;