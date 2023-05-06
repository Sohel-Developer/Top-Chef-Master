import React from 'react';
import { Outlet } from 'react-router-dom';
import NavMenu from '../Shared/NavMenu/NavMenu';

const MainLayout = () => {
    return (
        <div>
            <NavMenu />
            <Outlet />

        </div>
    );
};

export default MainLayout;