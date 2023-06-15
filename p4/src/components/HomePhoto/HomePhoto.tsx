import { Link } from "react-router-dom";
import styles from './HomePhoto.module.css';

export type HomePhoto = {
    id: number;
    width: number;
    height: number;
    urls: { large: string; regular: string; raw: string; small: string };
    color: string | null;
    user: {
        username: string;
        name: string;
    };
};

export const HomePhoto: React.FC<{ photo: HomePhoto }> = ({ photo }) => {
    const { id, urls } = photo;
    return (
        <Link to={`/${id}`} >
            <div className={styles.card}
                style={{ backgroundImage: `url(${urls.small})` }}
            >
            </div>
        </Link>
    );
};