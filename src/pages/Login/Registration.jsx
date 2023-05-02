import React, { useContext, useState } from 'react';
import register from '../../assets/registration.png';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProviders';
import { updateProfile } from 'firebase/auth';


const Registration = () => {
    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);
        setError(null);
        setSuccess(null);
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                userProfileUpdate(loggedUser, name, photoURL);
                form.reset();
                setSuccess('User Created Successfully');

            })
            .catch(error => {
                setError(error.message);
            })
    };

    const userProfileUpdate = (currentUser, displayName, photoURL) => {
        updateProfile(currentUser, {
            displayName,
            photoURL,
        })

    }
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse w-full">

                <div className="text-center lg:text-left w-full">
                    <img src={register} alt="" />
                </div>

                <div className=' w-full'>
                    <h1 className="text-5xl font-bold mb-10 text-center">Please SignUp!</h1>
                    <div className="card flex-shrink-0 w-full  shadow-2xl  bg-base-100">

                        <form className="card-body" onSubmit={handleSignUp}>
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
                                    <p className="label-text-alt">Already have an Account? <Link className='link link-hover text-red-500' to={'/login'}>Login Here</Link></p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                        </form>
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

export default Registration;