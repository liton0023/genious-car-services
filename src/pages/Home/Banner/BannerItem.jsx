import React from 'react';

const BannerItem = ({slide}) => {
    const {image,id,previous,next}=slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
        <div className='carosall-img'>
        <img src={image} className="w-full h-full rounded-xl" />
        </div>
         <div className="absolute flex justify-end transform -translate-y-1/2 left-24  top-1/4">
          <h1 className='text-7xl font-bold text-white'>
             Affordable <br />
             Price for Car <br />
             Servicing
          </h1>
         </div>
         <div className="absolute flex justify-end w-2/5 transform -translate-y-1/2 left-24  top-1/2">
          <p className='text-xl text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit blanditiis ex sint laborum libero deleniti. Labore distinctio velit veritatis cupiditate.</p>
         </div>
         <div className="absolute flex justify-start w-2/5 transform -translate-y-1/2 left-24  top-2/3">
         <button className="btn mr-8 btn-outline btn-secondary">Secondary</button>
         <button className="btn btn-outline btn-secondary">Secondary</button>
         </div>
         <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
           <a href={`#slide${previous}`} className="btn mr-5 btn-circle">❮</a> 
           <a href={`#slide${next}`} className="btn btn-circle">❯</a>
         </div>
       </div> 
    );
};

export default BannerItem;