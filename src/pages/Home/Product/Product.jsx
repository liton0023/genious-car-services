import React from 'react';

const Product = ({product}) => {
    const{img,name,price}=product;
    console.log(product)
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl py-5 h-full rounded-2xl border-gray-300">
  <figure><img className='w-1/3' src={img} alt="Shoes" /></figure>
  <div className="card-body w-full items-center">
 <div className="rating">
  <input type="" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
    <h2 className="card-title">{name}</h2>
    <p className='text-2xl font-bold text-orange-600'>Price:${price}</p>
  </div>
</div>
        </div>
    );
};

export default Product;