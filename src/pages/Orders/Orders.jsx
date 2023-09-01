import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import BookingRow from './BookingRow';

const Orders = () => {
    const {user}=useContext(AuthContext);
    const[orders,setOrders]=useState([]);
    const navigate=useNavigate();
    
    const url=`http://localhost:5000/orders?email=${user?.email}`;
    useEffect(()=>{
        fetch(url,{
            method:'GET',
            headers:{
                authorization:`Bearer ${localStorage.getItem('car-access-token')}`

            }

        })
        .then(res=>res.json())
        .then(data=>{
            if(!data.error){
                setOrders(data)
            }
            else{  
                // logOut
                navigate('/home')
            }
        })
    },[url,navigate]);

    const handleDelete=(id)=>{
        const proced=confirm('Are you sure want to detete??');
        if(proced){
            fetch(`http://localhost:5000/orders/${id}`,{
                method:'DELETE',
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if (data.deletedCount > 0) {
                    alert('deleted successful');
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining);
                }
            })
        }
    }

    const handleBookingConfirm = id => {
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    // update state
                    const remaining = orders.filter(order => order._id !== id);
                    const updated = orders.find(order => order._id === id);
                    updated.status = 'confirm'
                    const newBookings = [updated, ...remaining];
                    setOrders(newBookings);
                }
            })
        }
    return (
        <div>
             <div>
            <h2 className="text-8xl text-center">Your Orders: {orders.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full  grid grid-cols-1 justify-items-center">
                    {/* head */}
                    <thead className='text-2xl'>
                        <tr> 
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <BookingRow
                                key={order._id}
                                order={order}
                                handleDelete={handleDelete}
                                handleBookingConfirm={handleBookingConfirm}
                            ></BookingRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
        </div>
    );
};

export default Orders;