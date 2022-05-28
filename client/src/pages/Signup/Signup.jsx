import React from 'react';
import './Signup.css';

// import { useMutation } from '@apollo/client';
// import { ADD_USER } from '../utils/mutations';
// // to implement authentication functionality 
// import Auth from '../utils/auth';

const Signup = () => {
	// const [formState, setFormState] = useState({ username: '', email: '', password: '' });

	// the useMutation() Hook creates and prepares a JavaScript function that wraps around our mutation code and returns it to us. In our case, it returns in the form of the addUser function that's returned. We also get the ability to check for errors.
	// const [addUser, { error }] = useMutation(ADD_USER);

	// update state based on form input changes
	// const handleChange = (event) => {
	// 	const { name, value } = event.target;

	// 	setFormState({
	// 		...formState,1
	// 		[name]: value,
	// 	});
	// };
	// functionality for capturing form field data from a user and storing it in state using the useState() Hook from React

	// submit form (notice the async!)
	// const handleFormSubmit = async event => {
	// 	event.preventDefault();

	// 	// use try/catch instead of promises to handle errors
	// 	try {
	// 		// execute addUser mutation and pass in variable data from form
	// 		const { data } = await addUser({
	// 			variables: { ...formState }
	// 		});

	// 		// take the token and set it to localStorage
	// 		// to use it to check if user is logged in when other component are going to be used
	// 		Auth.login(data.addUser.token);
	// 		// Now when you sign up successfully, you'll be redirected to the homepage with your token stored in localStorage
	// 		// console.log(data);
	// 	} catch (e) {
	// 		console.error(e);
	// 	}
	// };
	// With this updated function, we will now pass the data from the form state object as variables for our addUser mutation function. Upon success, we destructure the data object from the response of our mutation and simply log it to see if we're getting our token
	// We use the try...catch block functionality here, as it is especially useful with asynchronous code such as Promises. This way, we can use async/await instead of .then() and .catch() method-chaining while still being able to handle any errors that may occur

    return (
        <div className='relative'>
            <div className="background-image-sign">
            </div>

            <div className="signup-container">
                <div className='card'>
                    <div className='card-body-sign'>
                        {/* <form onSubmit={handleFormSubmit}> */}
                        <div className='form-container form-bg'>
                            <div className='form-left'>
                                <p className='greeting'>Hello, friend!</p>
                                <input
                                    className='form-input rounded-full'
                                    placeholder='Username'
                                    name='username'
                                    type='username'
                                    id='username'
                                    // value={formState.username}
                                    // onChange={handleChange}
                                />
                                <input
                                    className='form-input rounded-full'
                                    placeholder='Email'
                                    name='email'
                                    type='email'
                                    id='email'
                                    // value={formState.email}
                                    // onChange={handleChange}
                                />
                                <input
                                    className='form-input rounded-full'
                                    placeholder='******'
                                    name='password'
                                    type='password'
                                    id='password'
                                    // value={formState.password}
                                    // onChange={handleChange}
                                />
                                <button className='btn-sign d-block rounded-full font-black' type='submit'>
                                    CREATE ACCOUNT
                                </button>
                                <p className='end'>Already have an account? Sign In</p>
                            </div>
                            <div className='form-right'>
                                {/* <h1>Welcome</h1> */}
                                {/* <h1>Welcome to <span className='gradient-text'>VEGETA</span></h1> */}
                                <p>Let's build together</p>
                            </div>
                        </div>
                        {/* {error && <div>Sign up failed</div>} */}
                        {/* if there's an error, we'll see a <div> element with a message saying so */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;