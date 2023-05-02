import React from 'react';
import login from '../../assets/login.png';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse w-full">

                <div className="text-center lg:text-left w-full">
                    <img src={login} alt="" />
                </div>

                <div className=' w-full'>
                    <h1 className="text-5xl font-bold mb-10 text-center">Please Login!</h1>
                    <div className="card flex-shrink-0 w-full  shadow-2xl  bg-base-100">

                        <form className="card-body">
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
                                <label className="label">
                                    <a href="" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div>
                                <label className="label">
                                    <p className="label-text-alt">New User? <Link className='link link-hover' to={'/register'}>Register Here</Link></p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div className='w-full px-8 mb-5'>
                            <button className='btn w-full'>Login With Google</button>
                            <button className='btn btn-success w-full my-5'>Login With Github</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;