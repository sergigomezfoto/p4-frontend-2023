import { FC, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useApi } from "../context/ApiContext";
import Loading from "../components/Loading/Loading";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import { PhotoType } from '../components/HomePhoto/HomePhoto';

import styles from './Detail.module.css';


const Detail: FC = () => {

    const [data, setPhotoResponse] = useState<any | null>(null);
    const { id } = useParams();
    const location = useLocation();
    const photo: PhotoType = location.state?.photo;
    const api = useApi();

    useEffect(() => {
        if (!photo) {
            if (id) {
                console.log('no photo');
                api.photos.get({ photoId: id })
                    .then(result => {
                        setPhotoResponse(result.response)
                    })
                    .catch(() => {
                        console.log("error!");
                    });
            }
        } else {
            setPhotoResponse(photo)
        }
    }, [id, photo]);

    if (data === null) {
        return <Loading />;
    } else if (data.errors) {
        return (
            <ErrorPage error={data.errors[0]} />
        );
    } else {
        return (
            <div className={styles.wrapper}>
                <img src={data.urls.regular} alt="hola" />
            </div>
        );
    }
}




export default Detail;