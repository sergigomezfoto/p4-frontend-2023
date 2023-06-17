
import styles from "./Loading.module.css";

const Loading: React.FC = () => {
  return (
    <div className={styles["loader-wrapper"]}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default Loading;