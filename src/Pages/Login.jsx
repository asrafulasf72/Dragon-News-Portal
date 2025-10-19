import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <h1 className='text-center text-[2rem] font-[600px] my-5'>Login Your Account</h1>
                <form>
                    <fieldset className="fieldset">
                       <label className="label">Email</label>
                       <input type="email" className="input bg-base-200" placeholder="Enter Your Email" />
                       <label className="label">Password</label>
                       <input  type="password" className="input bg-base-200" placeholder="Enter your Password" />
                       <div><a className="link link-hover">Forgot password?</a></div>
                       <button className="btn btn-neutral mt-4">Login</button>
                   </fieldset>
                </form>
                <p>Dont’t Have An Account ? <Link className='text-secondary' to='/auth/register'>Register</Link></p>
              </div>
            </div>
        </div>
    );
};

export default Login;