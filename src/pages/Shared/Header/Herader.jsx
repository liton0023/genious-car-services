import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import logo from '../../../assets/logo.svg';

const Herader = () => {

  const {user,logOut}=useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then(() =>{
      
    })
    .catch( error => console.log(error))
}


    const meniAitem= <>
    <li>  <Link className='font-semibold' to='/Home'>Home</Link> </li>
    <li>  <Link className='font-semibold' to='/about'>About</Link> </li>
    { user?.email ?  <>
            <li><Link className='font-semibold' to="/orders">My Bookings</Link></li>
            <li><button className='font-semibold ' onClick={handleLogOut}>Log out</button></li>
        </> 
        : <li> <Link to="/login">Login</Link> </li>}
    </>
    return (
        <div>
           <div className="navbar pt-12 h-20 mb-12 bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
       {meniAitem}
      </ul>
    </div>
    <Link to='/home' className=" normal-case text-xl">
        <img src={logo} alt="" />
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {meniAitem}
    </ul>
  </div>
  <div className="navbar-end">
    <Link to='/checkout'><button className="btn btn-warning">Apponiment</button></Link>
  </div>
</div>
        </div>
    );
};

export default Herader;