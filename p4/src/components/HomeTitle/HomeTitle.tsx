import { FC } from "react";
import styles from './HomeTitle.module.css';
interface HomeTitleProps {
    
}
 
const HomeTitle: FC<HomeTitleProps> = () => {
    return ( 
        <>
        
        <h1 className={styles.h1}>BCN</h1>
        
        </>
     );
}
 
export default HomeTitle;



