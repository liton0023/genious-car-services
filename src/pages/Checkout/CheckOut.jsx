import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const CheckOut = () => {

    const {_id,title,price,img}=useLoaderData()
    const {user}=useContext(AuthContext);

    const handleOrder=event=>{

        event.preventDefault()
     const from=event.target;
     const name=`${from.fristName.value} ${from.lastName.value}`;
     const email=user?.email || 'unregestier';
     const phone=from.phone.value;
     const date = from.date.value;

     const order={
        service:_id,
        serviceName: title,
        customerName:name,
        image:img,
        price:price,
        email,
        phone,
        date
    }

       
    fetch('http://localhost:5000/orders', {
     method: 'POST',
      headers: {
      'content-type': 'application/json'
      },
     body: JSON.stringify(order)
})
  .then(res => res.json())
  .then(data => {
    console.log(data)
    if(data.acknowledged ==true){
        alert('Order Placed Succesfulley')
        from.reset();
    }
  })
   
  .catch(err=>console.log(err))


    }
   

    return (
        <div>
          <form onSubmit={handleOrder}>
        <div className="card w-96 bg-base-100 shadow-xl w-full text-center image-full">
        <figure><img src={img} alt="Shoes" /></figure>
       <div className="card-body">
        <p>{title}</p>
      </div>
       </div>     
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-5  py-10 justify-items-center'>
            <input name='fristName' type="text" placeholder="Your Name" required className="input input-bordered w-2/3" />
            <input name='lastName' type="text" placeholder="Last Name" required className="input input-bordered w-2/3" />
            <input name='phone' type="text" placeholder="Your Phone" required className="input input-bordered w-2/3" />
            <input name='email' type="text" placeholder="Your Email" defaultValue={user?.email} readOnly className="input input-bordered w-2/3" />
            <input name='email' type="text" placeholder="Price" defaultValue={'$' + price} readOnly className="input input-bordered w-2/3" />
            <div className="form-control w-2/3">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label> 
                        <input type="date" name="date" className="input input-bordered" />
                    </div>
            </div>
            <button className='btn btn-primary mx-20 m-8'>Submit</button>
          </form>
        </div>
    );
};

export default CheckOut;