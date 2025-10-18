import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Componenets/Header';

const Homelayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main>
                <section className='section-left'></section>
                <Outlet></Outlet>
                <section className='section-right'></section>
            </main>
        </div>
    );
};

export default Homelayout;