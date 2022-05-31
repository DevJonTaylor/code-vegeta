import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
// // to implement authentication functionality 
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';

const Signup = () => {
	const [formState, setFormState] = useState({ username: '', email: '', password: '' });

	// the useMutation() Hooks creates and prepares a JavaScript function that wraps around our mutation code and returns it to us. In our case, it returns in the form of the addUser function that's returned. We also get the ability to check for errors.
	const [addUser, { error }] = useMutation(ADD_USER);

	// update state based on form input changes
	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormState({
			...formState,
			[name]: value,
		});
	};
	// functionality for capturing form field data from a user and storing it in state using the useState() Hooks from React

	// submit form (notice the async!)
	const handleFormSubmit = async event => {
		event.preventDefault();

        console.log('this is working');

		// use try/catch instead of promises to handle errors
		try {
			// execute addUser mutation and pass in variable data from form
			const { data } = await addUser({
				variables: { ...formState }
			});

			console.log(data);


			// take the token and set it to localStorage
			// to use it to check if user is logged in when other component are going to be used
			Auth.login(data.addUser.token);

		} catch (e) {
			console.error(e);
		}
	};


    return (
        <div className='relative'>
            <div className="background-image-sign">
            </div>

            <div className="signup-container app-text">
                <div className='card'>
                    <div className='card-body-sign'>
                        {error && <p className='failed text-color'>Sign in failed, please try again.</p>}
                        <div className='form-container form-bg'>
                                <form className='form-left' onSubmit={handleFormSubmit}>
                                        <p className='greeting'>Hello, friend!</p>
                                        <input
                                            className='form-input rounded-full'
                                            placeholder='Username'
                                            name='username'
                                            type='username'
                                            id='username'
                                            value={formState.username}
                                            onChange={handleChange}
                                        />
                                        <input
                                            className='form-input rounded-full'
                                            placeholder='Email'
                                            name='email'
                                            type='email'
                                            id='email'
                                            value={formState.email}
                                            onChange={handleChange}
                                        />
                                        <input
                                            className='form-input rounded-full'
                                            placeholder='******'
                                            name='password'
                                            type='password'
                                            id='password'
                                            value={formState.password}
                                            onChange={handleChange}
                                        />
                                        <button className='btn-sign d-block rounded-full btn-main' type='submit'>
                                            Create Account
                                        </button>
                                        <p className='end font-bold'>Already have an account? <Link to="/login" className='text-black font-bold'>Sign In</Link></p>
                                </form>
                            <div className='form-right'>
                                {/* <h1>Welcome</h1> */}
                                {/* <h1>Welcome to <span className='gradient-text'>VEGETA</span></h1> */}
                                <p>Let's build together</p>
                            </div>
                        </div>
                        {/* if there's an error, we'll see a <div> element with a message saying so */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;