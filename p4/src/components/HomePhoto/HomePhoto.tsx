import {  useNavigate } from "react-router-dom";
import styles from './HomePhoto.module.css';

export type PhotoType = {
    id: string;
    width: number;
    height: number;
    urls: { large: string; regular: string; raw: string; small: string };
    color: string | null;
    user: {
        username: string;
        name: string;
    };
};

export const HomePhoto: React.FC<{ photo: PhotoType }> = ({ photo }) => {
    const { urls } = photo;
    const navigate = useNavigate();

    const handleClick = (photo: PhotoType) => {
        navigate(`/${photo.id}`, { state: { photo } });
    }
    return (

            <div className={styles.card}
                onClick={() => handleClick(photo)}
                style={{ backgroundImage: `url(${urls.small})` }}
            >
            </div>
    
    );
};