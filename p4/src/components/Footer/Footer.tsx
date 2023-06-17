import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.left}>
          <p>Powered by: <a href="https://code.sergigomez.com/" target="_blank">Sergi Gómez</a> 2023 ©</p>
        </div>
        <div className={styles.right}>
          <p>
            <a href="https://unsplash.com/" target="_blank">Unsplash</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;