import { getReadableTextColor } from "../../helpers/complementaryColor";
import { PhotoType } from "../../types/Photo";
import styles from "./AttrImage.module.css";


type AttrImageProps = {
    color: string | null;
    urls: PhotoType['urls'];
    alt_description: string | null;
    description: string | null;
}
const AttrImage: React.FC<AttrImageProps> = ({ color, urls,alt_description,description }) => {
    const readableTextColor = getReadableTextColor(color);
    return (
        <div className={styles.content}>
            {alt_description && <p className={styles.description}><span>Alt description: </span>{alt_description}</p>}
            {description && <p className={styles.description}><span>Description: </span>{description}</p>}
            <div className={styles.attrImage}>
                {color && <div className={styles.color} style={{ backgroundColor: color, color: readableTextColor }}>{color}</div>}
                <div className={styles.images}>
                    <span>Images:</span>
                    <a href={urls.raw} target="_blank">raw</a> ·
                    <a href={urls.full} target="_blank"> full</a> ·
                    <a href={urls.regular} target="_blank"> regular</a> ·
                    <a href={urls.small} target="_blank"> small</a> ·
                    <a href={urls.thumb} target="_blank"> thumb</a>
                </div>
            </div>
        </div>
    )
};

export default AttrImage;