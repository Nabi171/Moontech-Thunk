import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';

const Main = () => {
    return (
        <div className='px-10'>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Main;