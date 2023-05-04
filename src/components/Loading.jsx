import React from 'react';
import Lottie from "lottie-react";
import loading from '/public/97443-loading-gray.json';
const Loading = () => {
    return (
        <div className='w-52 mx-auto'>
            <Lottie animationData={loading} />
        </div>
    );
};

export default Loading;