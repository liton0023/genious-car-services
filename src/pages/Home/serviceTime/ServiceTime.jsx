import React from 'react';
import { HiOutlineHome, HiPhone } from "react-icons/hi2";

const ServiceTime = () => {
    return (
   <div className=" grid md:grid-cols-3 rounded-3xl lg:grid-cols-3 gap-20 justify-between w-2/3 mx-auto mb-5 p-10 bg-neutral text-neutral-content">
    <div>
    <div className='flex   gap-1'>
        <div className=' text-5xl'>
      <HiOutlineHome></HiOutlineHome>
        </div>
       <div className='text-sm text-center'>
        <span>We Are Open Monday To Friday</span> <br />
       <span>7:00 AM - 9:00 PM</span>
       </div>
  </div> 
    </div>
    <div>
    <div className='flex  gap-1'>
        <div className=' text-5xl'>
     <HiPhone></HiPhone>
        </div>
       <div className='text-sm text-center'>
        <span>Have a question?</span> <br />
       <span>+88017xxxxxxxx</span>
       </div>
  </div> 
    </div>
    <div>
    <div className='flex gap-1'>
        <div className=' text-5xl'>
 <HiOutlineHome></HiOutlineHome>
        </div>
       <div className='text-sm text-center'>
        <span>Need a Repair? <br /> Our Address</span> <br />
       <span>New town,Dhaka <br /> Bangladesh</span>
       </div>
  </div> 
    </div>
   </div>
    );
};

export default ServiceTime;