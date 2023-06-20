import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/images/login/login.svg';
const Login = () => {

    const handleLogin=e=>{
        e.preventDefault();

    }
    return (
        <div>
            <div className="hero w-full py-10">
  <div className="hero-content flex-col gap-20 grid md:grid-cols-2 lg:flex-row">
    <div className="text-center lg:text-left rounded">
      <img className='w-3/4' src={img} alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
      <h1 className="text-5xl text-center font-bold">Login now!</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" name='password' placeholder="password" className="input input-bordered" />
          <label className="label">
            <Link to='/' className="label-text-alt link link-hover">Forgot password?</Link>
          </label>
        </div>
        <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="Login" />
         
        </div>
      </form>
      <p className='text-center pb-5'>New to Genious Car? <Link to='/singup' className='text-orange-600 font-bold'> Sing Up</Link> </p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;