import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
    fetch('service.json')
    .then(res=>res.json())
    .then(data=>setServices(data))
    },[])
    return (
        <div>
            <div className='text-center'>
                <p className="text-2xl font-bold text-orange-600">
                    Service
                </p>
                <h1 className='text-5xl py-5'>Our Services Area</h1>
                <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                 Ipsa consectetur architecto possimus quisquam culpa <br />
                  sequi animi distinctio eveniet doloremque fugiat.</p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-6 justify-items-center '>
               {
                services.map(service=> <ServicesCard
                key={service._id} service={service}
                ></ServicesCard>)
               }
            </div>
            <div className='text-center py-2'>
            <button className="btn btn-active btn-secondary"> <Link to='/'> More Services</Link></button>
            </div>

        </div>
    );
};

export default Services;