import { FunctionComponent } from "react";
import styles from './Layout.module.scss';
import { Outlet } from "react-router-dom";

interface LayoutProps {
    
}


const Layout: FunctionComponent<LayoutProps> = () => {
    return ( 
    <div className={styles.layoutsr}>
        <Outlet/>
    </div> );
}
 
export default Layout;