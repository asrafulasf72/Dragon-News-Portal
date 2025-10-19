import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Componenets/Header';
import Latestnews from '../Componenets/Latestnews';
import Navbar from '../Componenets/Navbar';
import LeftAside from '../Componenets/Homelayout/LeftAside';
import RightAside from '../Componenets/Homelayout/RightAside';

const Homelayout = () => {
    return (
        <div>
            <header>
                <Header></Header>

                <section className='w-11/12 mx-auto my-3'>
                    <Latestnews></Latestnews>
                </section>
                <nav className='w-11/12 mx-auto my-3'>
                   <Navbar></Navbar>
                </nav>
            </header>
            <main className='w-11/12 mx-auto my-3 grid grid-cols-12 gap-3'>
                <aside className='col-span-3 sticky top-2 h-fit'>
                    <LeftAside></LeftAside>
                </aside>
                <section className='col-span-6'>
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default Homelayout;