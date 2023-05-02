import React from 'react';
import register from '../../assets/registration.png';
import { Link } from 'react-router-dom';


const Registration = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse w-full">

                <div className="text-center lg:text-left w-full">
                    <img src={register} alt="" />
                </div>

                <div className=' w-full'>
                    <h1 className="text-5xl font-bold mb-10 text-center">Please SignUp!</h1>
                    <div className="card flex-shrink-0 w-full  shadow-2xl  bg-base-100">

                        <form className="card-body">
                            <div className="form-control">
                                <label className="label" for='name'>
                                    <span className="label-text text-xl font-medium">Name</span>
                                </label>
                                <input id='name' type="text" placeholder="Your name" className="input input-bordered" name='name' required />
                            </div>
                            <div className="form-control">
                                <label className="label" for='photo'>
                                    <span className="label-text text-xl font-medium">Photo URL</span>
                                </label>
                                <input type="text" id='photo' placeholder="Your Photo URL" className="input input-bordered" name='photoURL' required />
                            </div>
                            <div className="form-control">
                                <label className="label" for='email'>
                                    <span className="label-text text-xl font-medium">Email</span>
                                </label>
                                <input type="email" id='email' placeholder="Your email" className="input input-bordered" name='email' required />
                            </div>
                            <div className="form-control">
                                <label className="label" for='password'>
                                    <span className="label-text text-xl font-medium">Password</span>
                                </label>
                                <input type="password" id='password' placeholder="Your password" className="input input-bordered" name='password' required />

                            </div>
                            <div>
                                <label className="label">
                                    <p className="label-text-alt">Already have an Account? <Link className='link link-hover' to={'/login'}>Login Here</Link></p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;