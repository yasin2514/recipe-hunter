import React from 'react';

const Subscribe = () => {
    return (
        <div className='text-center'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4 text-black'>Special Offers For New Subscribers </h2>
            <p className=' text-gray-700'>Subscribe to our newsletters now and stay up to date with new <br /> collections.</p>
            <div className='mt-5 flex items-center justify-center'>
                <input type="email" placeholder="Your Email" className="input input-bordered input-primary w-full rounded-r-none max-w-2xl" />
                <button className='btn  btn-primary rounded-l-none'>Submit</button>
            </div>
        </div>
    );
};

export default Subscribe;