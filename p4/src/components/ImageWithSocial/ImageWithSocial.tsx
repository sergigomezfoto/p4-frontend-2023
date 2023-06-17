// 


import { PhotoType } from '../../types/Photo';
import Likes from '../Likes/Likes';
import styles from './ImageWithSocial.module.css';

type ImageWithSocialProps = { 
    urls:PhotoType['urls'] ;
    alt_description: string | null;
    likes:number;

  }
const ImageWithSocial: React.FC<ImageWithSocialProps> = ({urls,alt_description,likes }) => {
    
    return (
       <div style={{position:'relative'}}>
       <Likes likes={likes} />
       <img src={urls.regular} alt={alt_description ? alt_description : 'image'} className={styles.image} />

       </div> 
    )
};

export default ImageWithSocial;