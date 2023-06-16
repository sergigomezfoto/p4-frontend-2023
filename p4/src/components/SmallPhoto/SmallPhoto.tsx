import { useNavigate } from "react-router-dom";
import styles from './SmallPhoto.module.css';
import { PhotoType } from "../../types/Photo";
import { getReadableTextColor } from "../../helpers/complementaryColor";



export const SmallPhoto: React.FC<{ photo: PhotoType }> = ({ photo }) => {
    const { urls,id,color,user } = photo;

    const navigate = useNavigate();
    const handleClick = (id:string) => {
        navigate(`/${id}`, { state: { photo } });
    }
    const readableTextColor = getReadableTextColor(color);
    return (
        <>
            <div className={`${styles.card} ${styles["grayscale-effect"]}`} onClick={() => handleClick(id)} style={{ backgroundImage: `url(${urls.small})` }}>
                <div className={styles.user} style={color ? { backgroundColor: color, color: readableTextColor } : undefined}>{`@${user.username}`}</div>
            </div>
        </>
    );
};


