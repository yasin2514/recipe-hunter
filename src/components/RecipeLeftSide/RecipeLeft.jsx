import React from 'react';
import { HiChevronRight } from "react-icons/hi";
import img2 from '../../assets/2.jpg';
import img3 from '../../assets/3.jpg';
import img4 from '../../assets/4.jpg';
import img5 from '../../assets/5.jpg';

const RecipeLeft = () => {
    return (
        <>
            <div className='mb-8'>
                <h2 className='font-bold text-2xl text-blue-600'>SEARCH</h2>
                <input type="search" placeholder="search" className="input my-2 h-10 input-bordered input-primary w-full" />
            </div>

            <div className='mb-8'>
                <h2 className='font-bold text-2xl text-blue-600'>CATEGORIES</h2>
                <span className='flex flex-col gap-1 text-black my-3'>
                    <span><HiChevronRight className='text-blue-600 inline-block'></HiChevronRight> Burger</span>
                    <span><HiChevronRight className='text-blue-600 inline-block'></HiChevronRight> Recipes</span>
                    <span><HiChevronRight className='text-blue-600 inline-block'></HiChevronRight> Dessert</span>
                    <span><HiChevronRight className='text-blue-600 inline-block'></HiChevronRight> Food</span>
                    <span><HiChevronRight className='text-blue-600 inline-block'></HiChevronRight> Drinks</span>
                    <span><HiChevronRight className='text-blue-600 inline-block'></HiChevronRight> Cafe</span>
                </span>
            </div>
            <div>
                <h2 className='font-bold text-2xl text-blue-600'>RECENT RECIPES</h2>

                {/* recipe 1 */}

                <div className='flex flex-wrap items-center my-5 gap-4'>
                    <img src={img5} alt="" />
                    <span>
                        <h5 className='text-xl font-medium'>Tater tots</h5>
                        <p>May 3,2023</p>
                    </span>
                </div>

                {/* recipe 2 */}

                <div className='flex flex-wrap items-center my-5 gap-4'>
                    <img src={img2} alt="" />
                    <span>
                        <h5 className='text-xl font-medium'>Cobb salad</h5>
                        <p>May 3,2023</p>
                    </span>
                </div>

                {/* recipe 3 */}

                <div className='flex flex-wrap items-center my-5 gap-4'>
                    <img src={img3} alt="" />
                    <span>
                        <h5 className='text-xl font-medium'>Clam chowder</h5>
                        <p>May 3,2023</p>
                    </span>
                </div>

                {/* recipe 4 */}

                <div className='flex flex-wrap items-center my-5 gap-4'>
                    <img src={img4} alt="" />
                    <span>
                        <h5 className='text-xl font-medium'>Smithfield ham</h5>
                        <p>May 3,2023</p>
                    </span>
                </div>


            </div>
        </>
    );
};

export default RecipeLeft;