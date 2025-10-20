import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { AlertTriangle } from 'lucide-react';

const Register = () => {
  const {creatUser, setUser}=use(AuthContext)
  const handelRegister=(e)=>{
    e.preventDefault();
    const form=e.target
    // const name=form.name.value;
    // const photo=form.photo.value;
    const email=form.email.value;
    const password=form.password.value;
    // console.log("The Form Value Is: ",{name,photo,email,password})

    creatUser(email,password)
    .then((res)=>{
       const user=res.user;
       setUser(user)
    })
    .catch((error)=>{
        const errormessage=error.message
        alert(`${errormessage}`)
    })
  }
    return (
         <div className='flex justify-center items-center h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <h1 className='text-center text-[2rem] font-[600px] my-5'>Register your account</h1>
                <form onSubmit={handelRegister}>
                    <fieldset className="fieldset">
                         
                        <label className="label">Name</label>
                       <input type="text" name='name' className="input bg-base-200" placeholder="Enter Your Name" required />

                       {/* Photo URL */}
                        <label className="label">Photo URL</label>
                       <input type="text" name='photo' className="input bg-base-200" placeholder="Enter Your Photo URL" required />

                        {/* Email */}
                       <label className="label">Email</label>
                       <input type="email" name='email' className="input bg-base-200" placeholder="Enter Your Email" required />
                        
                        {/* Password */}
                       <label className="label">Password</label>
                       <input  type="password" name='password' className="input bg-base-200" placeholder="Enter your Password" required />

                       <button type='submit' className="btn btn-neutral mt-4">Register</button>
                   </fieldset>
                </form>
                <p>Already Have An Account ? <Link className='text-secondary' to='/auth/login'>Login</Link></p>
              </div>
            </div>
        </div>
    );
};

export default Register;