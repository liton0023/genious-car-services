import React from 'react';
import { Link } from 'react-router-dom';
const ServicesCard = ({service}) => {
    const {_id,img,title,price}=service;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl h-full rounded-2xl border-gray-300">
  <figure><img className='w-full' src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p className='text-2xl font-bold text-orange-600'>Price:${price}</p>
    <div className="card-actions justify-end">
     <Link to={`/checkout/${_id}`} > <button className="btn btn-outline btn-warning"> Check Out </button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default ServicesCard;