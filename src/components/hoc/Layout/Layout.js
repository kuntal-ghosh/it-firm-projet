import React from 'react';
import Navbar from '../../../components/common/navbar/Navbar';

const Layout = ({children}) => {
    return ( 
        <div>
            <Navbar/>
                {children}
        </div>
     );
}
 
export default Layout;