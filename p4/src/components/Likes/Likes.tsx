import styles from './Likes.module.css';

type LikesProps = { likes: number; }

const Likes: React.FC<LikesProps> = ({ likes }) => {
    return (
     
            <div className={styles.heartContainer}>
        <svg className={styles.heart} viewBox="0 0 32 32">
  <path d="M16,29C16,29,2.4,19.2,2.4,11.2C2.4,6,6.4,2,11.6,2c3.2,0,6,2,7.4,5.2C18,4,20.8,2,24,2c5.2,0,9.2,4,9.2,9.2c0,8-13.6,18.4-13.6,18.4L16,29z"/>
</svg>
                {likes}
            </div>
     
    );
};


export default Likes;