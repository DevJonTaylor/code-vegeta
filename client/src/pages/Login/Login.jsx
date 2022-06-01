import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
// // to implement authentication functionality 
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';

// styles
import '../Login/Login.css';

// SAMPLE LOGIN
// jolivares@utexas.edu 123456jo

const Login = () => {
    const [formState, setFormState] = useState({ email: '', password: '' });

	//  initialize our LOGIN_USER mutation with the useMutation() Hook first
	const [login, { error }] = useMutation(LOGIN_USER);

	// update state based on form input changes
	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormState({
			...formState,
			[name]: value,
		});
	};

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // the ... in this context is being used as the spread operator
        // This means that we are setting the variables field in our mutation to be an object with key/value pairs that match directly to what our formState object looks like
        try {
            const { data } = await login({
                variables: { ...formState }
            });
            
            // this will now set our token to localStorage and bring us back to the homepage of the application upon a successful login
            Auth.login(data.login.token);
            // console.log(data);
        } catch (e) {
            console.error(e);
        }

        // clear form values
        setFormState({
            email: '',
            password: '',
        });
    };

    return (
        <div className='relative'>
            <div className="background-image-sign">
            </div>

            <div className="signup-container app-text">
                <div className='card'>
                    <div className='card-body-sign'>
                        {error && <p className='failed text-color'>Sign in failed, please try again.</p>}
                        <div className='login-container form-bg'>
                            <div className='login-left'>
                                <p>Welcome Back</p>
                            </div>
                            <form className='login-right' onSubmit={handleFormSubmit}>
                                <p className='greeting'>Start Creating</p>
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
                                {/* <button className='btn-login d-block rounded-full btn-main shadow-lg' type='submit'>
                                    Sign In
                                </button> */}
                                <button className='btn-login d-block rounded-full btn-main shadow-lg' type='submit'>
                                    SIGN IN
                                </button>
                                <p className='end font-bold'>Don't have an account? <Link to="/signup" className='text-black font-bold'>Sign Up</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;