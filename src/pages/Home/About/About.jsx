import React from 'react';
import parts from '../../../assets/images/about_us/parts.jpg';
import person from '../../../assets/images/about_us/person.jpg';

const About = () => {
    return (
        <div className="hero my-30">
        <div className="hero-content flex-col lg:flex-row">
         <div className='relative w-1/2'>
         <img src={person} className=" rounded-lg w-4/5 h-full shadow-2xl" />
         <img src={parts} className="absolute w-3/5 right-5 top-1/2 border-8 rounded-lg shadow-2xl" />
         </div>
          <div className='w-1/2'>
            <p className='text-2xl font-bold text-orange-600'>About Us</p>
            <h1 className="text-5xl my-5 font-bold">
                We Are Qualified <br />
                & Of Expericenc <br />
                In This Filed
            </h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, pariatur?</p>
            <p className='py-6'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat repellendus, veniam officiis qui eos, sapiente velit deleniti ipsum dolorum voluptas amet doloribus delectus? Autem eaque esse nam consectetur rem dignissimos ullam adipisci optio dolor, quis aliquam harum. Corrupti nulla fugiat totam repellendus, tempore provident molestiae quis vel? Expedita, eum voluptatum! </p>
            <button className="btn btn-error">Get More Info</button>
          </div>
        </div>
      </div>
    );
};

export default About;