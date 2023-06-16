// 


import { PhotoType } from '../../types/Photo';
import styles from './ImageWithSocial.module.css';

type ImageWithSocialProps = { 
    urls:PhotoType['urls'] ;
    alt_description: string | null;

  }
const ImageWithSocial: React.FC<ImageWithSocialProps> = ({urls,alt_description }) => {
    
    return (
       <>
       <img src={urls.regular} alt={alt_description ? alt_description : 'image'} className={styles.image} />
       </> 
    )
};

export default ImageWithSocial;