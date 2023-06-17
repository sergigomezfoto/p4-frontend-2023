import { FC, useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useApi } from "../context/ApiContext";
import Loading from "../components/Loading/Loading";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import { PhotoType } from "../types/Photo";
import styles from './Detail.module.css';

import AttrImage from '../components/AttrImage/AttrImage';
import ImageWithSocial from "../components/ImageWithSocial/ImageWithSocial";
import UserProfile from "../components/UserProfile/UserProfile";


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
       const { urls, color, alt_description, description,user,likes} = data;
        return (<>
            <Link to="/" className={styles.back}>
                Back
            </Link>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <UserProfile user={user}/>
                    <ImageWithSocial urls={urls} alt_description={alt_description} likes={likes}/>
                    <AttrImage color={color} urls={urls} alt_description={alt_description} description={description} />
                </div>
            </div>

        </>
        );
    }
}




export default Detail;