import React from 'react';
import Footer from '../components/Footer/Footer';
import styles from './Layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <main className={styles.main}>
        {children}
        </main>
      <Footer />
    </div>
  );
};

export default Layout;