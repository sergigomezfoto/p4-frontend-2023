import { useNavigate } from "react-router-dom";
import styles from './SmallPhoto.module.css';
import { PhotoType } from "../../types/Photo";
import { getReadableTextColor } from "../../helpers/complementaryColor";



export const SmallPhoto: React.FC<{ photo: PhotoType }> = ({ photo }) => {
    const { urls } = photo;
    const navigate = useNavigate();
    

    const handleClick = (photo: PhotoType) => {
        navigate(`/${photo.id}`, { state: { photo } });
    }
    const readableTextColor = getReadableTextColor(photo.color);

    return (
        <>
        
            <div className={`${styles.card} ${styles["grayscale-effect"]}`} onClick={() => handleClick(photo)} style={{ backgroundImage: `url(${urls.small})` }}>
                <div className={styles.user} style={photo.color ? { backgroundColor: photo.color, color: readableTextColor } : undefined}>{`@${photo.user.username}`}</div>
            </div>

        </>
    );
};


