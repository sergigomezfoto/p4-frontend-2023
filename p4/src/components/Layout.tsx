import { FunctionComponent } from "react";
import "./style.css"
import { Outlet } from "react-router-dom";

interface LayoutProps {
    
}


const Layout: FunctionComponent<LayoutProps> = () => {
    return ( 
    <div className="layoutsr">
        <Outlet/>
    </div> );
}
 
export default Layout;