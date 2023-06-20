import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';

const PopulerProducts = () => {
    const [products,setProducts]=useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data));
    },[])
    return (
        <div>
             <div className='text-center py-5 mt-20'>
                <p className="text-2xl font-bold text-orange-600">
                    Populer Products
                </p>
                <h1 className='text-5xl py-5'>Browser Our Products!</h1>
                <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                 Ipsa consectetur architecto possimus quisquam culpa <br />
                  sequi animi distinctio eveniet doloremque fugiat.</p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-6 justify-items-center '>
               {
                products.map(product=><Product key={product.id}
                product={product}
                ></Product>
              ) }
            </div>
            <div className='text-center py-2'>
            <button className="btn btn-active btn-success"> <Link to='/'> More Products</Link></button>
            </div>
        </div>
    );
};

export default PopulerProducts;