import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Header/Footer/Footer';
import Herader from '../pages/Shared/Header/Herader';

const Main = () => {
    return (
        <div>
            <Herader></Herader>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
    );
};

export default Main;