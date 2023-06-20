import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import img from '../../../assets/images/login/login.svg';
const Singup = () => {
    const {createUser}=useContext(AuthContext);
    const handleSingup=event=>{
        event.preventDefault();

        const form=event.target;
        // console.log(form)
        const email=form.email.value;
        // console.log(email)
        const password=form.password.value;
        // console.log(password)

        createUser(email,password)
        .then(result=>{
            const user=result.user;
            // console.log(user)
        })
        .catch(err=>console.error(err));
    }

    return (
        <div className="hero w-full py-10">
        <div className="hero-content flex-col gap-20 grid md:grid-cols-2 lg:flex-row">
          <div className="text-center lg:text-left rounded">
            <img className='w-3/4' src={img} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSingup} className="card-body">
            <h1 className="text-5xl text-center font-bold">Sing Up Now!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="Name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name='email' placeholder="Email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" name='password' placeholder="password" className="input input-bordered" />
              </div>
              <div className="form-control mt-6">
                  <input className="btn btn-primary" type="submit" value="Sing Up" />
               
              </div>
            </form>
            <p className='text-center pb-5'>Already Have an Account? <Link to='/login' className='text-orange-600 font-bold'> Login</Link> </p>
          </div>
        </div>
      </div>
    );
};

export default Singup;