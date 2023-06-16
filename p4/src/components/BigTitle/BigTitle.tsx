import { FC } from "react";
import styles from './BigTitle.module.css';
interface BigTitleProps {
    title: string
}

const BigTitle: FC<BigTitleProps> = ({ title }) => {
    return (
        <>

            <h1 className={styles.h1}>{title}</h1>

        </>
    );
}

export default BigTitle;



