import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProviders';
import login from '../../assets/login.png';

const Login = () => {
    const { loginUser, googleLogin, gitHubLogin } = useContext(AuthContext);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();


    const from = location.state?.from?.pathname || '/home';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        setError(null);
        setSuccess(null);
        loginUser(email, password)
            .then(result => {
                setSuccess('User Login  Successfully');
                navigate(from, { relative: true });
                form.reset();
            })
            .catch(error => {
                setError(error.message);
            })
    };

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                navigate(from, { relative: true });
                setSuccess("Google Login Successfully");
            })
            .catch(error => {
                setError(error.message);
            })
    };

    const handleGithubLogin = () => {
        gitHubLogin()
            .then(result => {
                navigate(from, { relative: true });
                setSuccess("Github Login Successfully");
            })
            .catch(error => {
                setError(error.message);
            })
    }
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse w-full">

                <div className="text-center lg:text-left w-full">
                    <img src={login} alt="" />
                </div>

                <div className=' w-full'>
                    <h1 className="text-5xl font-bold mb-10 text-center">Login!</h1>
                    <div className="card flex-shrink-0 w-full  shadow-2xl  bg-base-100">

                        <form className="card-body" onSubmit={handleLogin}>
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
                                    <p className="label-text-alt">New User? <Link className='link link-hover text-red-600' to={'/register'}>Register Here</Link></p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div className='w-full px-8 mb-5'>
                            <button className='btn w-full' onClick={handleGoogleLogin}>Login With Google</button>
                            <button className='btn btn-success w-full my-5' onClick={handleGithubLogin}>Login With Github</button>
                        </div>
                        <div className='px-8 mb-10'>
                            <p className='text-green-600'>{success}</p>
                            <p className='text-red-600'>{error}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;