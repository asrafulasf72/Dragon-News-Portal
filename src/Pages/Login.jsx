import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
  const{signIn}=use(AuthContext)
  const handellogin=(e)=>{
    e.preventDefault();
    const form=e.target
    const email=form.email.value
    const password=form.password.value
    signIn(email,password)
    .then((res)=>{
      const user=res.user
      console.log(user)
    }).catch((error)=>{
      const errormessage=error.errormessage
      alert(errormessage)
    })
  }
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <h1 className='text-center text-[2rem] font-[600px] my-5'>Login Your Account</h1>
                <form onSubmit={handellogin}>
                    <fieldset className="fieldset">
                       <label className="label">Email</label>
                       <input type="email" name='email' className="input bg-base-200" placeholder="Enter Your Email" />
                       <label className="label">Password</label>
                       <input  type="password" name='password' className="input bg-base-200" placeholder="Enter your Password" />
                       <div><a className="link link-hover">Forgot password?</a></div>
                       <button type='submit' className="btn btn-neutral mt-4">Login</button>
                   </fieldset>
                </form>
                <p>Dont’t Have An Account ? <Link className='text-secondary' to='/auth/register'>Register</Link></p>
              </div>
            </div>
        </div>
    );
};

export default Login;