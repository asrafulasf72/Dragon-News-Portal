import React from 'react';
import { Link, NavLink } from 'react-router';
import user from '../assets/user.png'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div></div>
            <div className='flex gap-4 text-accent items-center'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className='flex gap-2'>
                <img src={user} alt="" />
                <button className='btn btn-primary px-5'><Link to='/auth/login'>Login</Link></button>
            </div>
        </div>
    );
};

export default Navbar;