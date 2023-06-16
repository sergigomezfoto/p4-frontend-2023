import { FC, useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useApi } from "../context/ApiContext";
import Loading from "../components/Loading/Loading";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import { PhotoType } from "../types/Photo";


import styles from './Detail.module.css';
import { getReadableTextColor } from "../helpers/complementaryColor";


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
        const readableTextColor = getReadableTextColor(data.color);
        return (<>
            <Link to="/" className={styles.back}>
                Back
            </Link>
            <div className={styles.wrapper}>
                <div className={styles.imageContainer}>
                    <img src={data.urls.regular} alt={data.alt_description ? data.alt_description : 'image'} className={styles.image} />
                    <div className={styles.content}>
                        {data.alt_description && <p className={styles.description}><span>Alt description: </span>{data.alt_description}</p>}
                        {data.description && <p className={styles.description}><span>Description: </span>{data.description}</p>}
                        <div className={styles.stufContainer}>
                            {data.color && <div className={styles.color} style={{ backgroundColor: data.color, color: readableTextColor }}>{data.color}</div>}
                            {data.color && <div className={styles.color} style={{ backgroundColor: data.color, color: readableTextColor }}>{data.color}</div>}
                        </div>
                    </div>
                </div>
            </div>
        </>
        );
    }
}




export default Detail;