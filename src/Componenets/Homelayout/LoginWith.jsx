import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const LoginWith = () => {
    return (
        <div>
             <h1 className='font-bold mb-3 text-[1rem]'>Log in With</h1>
             <div className='space-y-3'>
                <button className='w-full btn btn-outline px-3 py-1.5 text-[1rem] text-blue-400'><FcGoogle size={24}/> Login With Google</button>
                <button className='w-full btn btn-outline px-3 py-1.5 text-[1rem]'><FaGithub size={24}/> Login With Github</button>
             </div>
        </div>
    );
};

export default LoginWith;