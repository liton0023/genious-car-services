import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const SocialSingIn = () => {
    const{ googleSingin}=useContext(AuthContext);
    const handleGoogleSingin=()=>{
        googleSingin()
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>console.log(error));
    }
    return (
        <div>
            <div className='text-center'>OR</div>
           <div className=" text-center">
  <button onClick={handleGoogleSingin} className="btn  border-x-yellow-800 rounded-3xl">GooGle</button>
  <button className="btn border-x-yellow-400 rounded-3xl">Facebook</button>
  <button className="btn border-x-yellow-400 rounded-3xl">Github</button>
</div>
        </div>
    );
};

export default SocialSingIn;