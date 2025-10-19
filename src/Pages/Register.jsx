import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
         <div className='flex justify-center items-center h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <h1 className='text-center text-[2rem] font-[600px] my-5'>Register your account</h1>
                <form>
                    <fieldset className="fieldset">
                         
                        <label className="label">Name</label>
                       <input type="text" className="input bg-base-200" placeholder="Enter Your Name" />

                       {/* Photo URL */}
                        <label className="label">Photo URL</label>
                       <input type="text" className="input bg-base-200" placeholder="Enter Your Photo URL" />

                        {/* Email */}
                       <label className="label">Email</label>
                       <input type="email" className="input bg-base-200" placeholder="Enter Your Email" />
                        
                        {/* Password */}
                       <label className="label">Password</label>
                       <input  type="password" className="input bg-base-200" placeholder="Enter your Password" />

                       <button className="btn btn-neutral mt-4">Register</button>
                   </fieldset>
                </form>
                <p>Already Have An Account ? <Link className='text-secondary' to='/auth/login'>Login</Link></p>
              </div>
            </div>
        </div>
    );
};

export default Register;