import React from 'react';
import NavigationBar from './NavigationBar';

const Header = () => {
    return (
        <div className='bg-dark'>
            <NavigationBar></NavigationBar>
            <div className="carousel w-full text-white">

                {/* slide-1 */}

                <div id="item1" className="carousel-item w-full">
                    <div className="hero min-h-screen bg-base-200 banner-1">
                        <div className="hero-content text-center">
                            <div className='max-w-3xl'>
                                <h1 className="text-5xl font-bold bg-black bg-opacity-5">Welcome to The Chef Point</h1>
                                <p className="py-6 text-bold text-white bg-black bg-opacity-5">The BBQ Bacon Burger is a mouth-watering burger that combines smoky, savory flavors with crispy bacon and tangy BBQ sauce. It's the perfect choice for anyone looking for a delicious and satisfying burger experience.</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* slide-2 */}

                <div id="item2" className="carousel-item w-full">
                    <div className="hero min-h-screen bg-base-200 banner-2">
                        <div className="hero-content text-center">
                            <div className="max-w-3xl">
                                <h1 className="text-5xl font-bold bg-black bg-opacity-5">Welcome to The Chef Point</h1>
                                <p className="py-6 text-white bg-black bg-opacity-5">The Chef Point is a popular restaurant known for its delicious food,worlds class chef's, friendly staff, and cozy atmosphere.</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>

                </div>
                {/* slide-3 */}

                <div id="item3" className="carousel-item w-full">
                    <div className="hero min-h-screen bg-base-200 banner-3">
                        <div className="hero-content text-center">
                            <div className="max-w-3xl">
                                <h1 className="text-5xl font-bold bg-black bg-opacity-5">Welcome to The Chef Point</h1>
                                <p className="py-6 text-white bg-black bg-opacity-5">The Chef Point Located in USA, it offers a wide range of dishes to satisfy every palate, from classic American cuisine to international flavors.</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
            </div>
        </div>
    );
};

export default Header;