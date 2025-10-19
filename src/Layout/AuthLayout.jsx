import React from 'react';
import Navbar from '../Componenets/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='bg-base-200 '>
            <header className='py-5 px-10 w-11/12 mx-auto '>
                <Navbar></Navbar>
            </header>

            <main className='py-5 px-10 w-11/12 mx-auto'>
                 <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;