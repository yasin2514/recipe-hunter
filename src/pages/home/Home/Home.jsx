import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefCard from '../Chef/ChefCard';
import ClientReviews from '../Reviews/ClientReviews';
import Dishes from '../Dishes/Dishes';


const Home = () => {
    const chefs = useLoaderData();

    return (
        <>
            <section className='mb-24'>
                <div>
                    <h2 className='text-4xl font-bold text-center text-black'>OUR <span className='text-sky-500'>WORLD</span> CLASS TOP <span className='text-sky-500'>CHEF'S</span></h2>
                    <p className='text-green-600 font-medium text-center mt-3'>Expert and Professional</p>
                </div>
                <div className='grid lg:grid-cols-2 gap-10 mt-14'>
                    {
                        chefs.map(person => <ChefCard
                            key={person.id}
                            chef={person}
                        ></ChefCard>)
                    }
                </div>
            </section>
            <section className='my-28'>
                <ClientReviews></ClientReviews>
            </section>
            <section className='my-28'>
                <Dishes></Dishes>
            </section>

        </>
    );
};

export default Home;