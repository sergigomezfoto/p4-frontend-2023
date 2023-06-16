import { useNavigate } from "react-router-dom";
import styles from './HomePhoto.module.css';
import { PhotoType } from "../../types/Photo";



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


