import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

import { ADD_FRIEND, DELETE_PAGE } from '../../utils/mutations';
import { useQuery, useMutation } from '@apollo/client';
import { useDeletePage } from '../../hooks/usePage'

import './Content.css';
import '../Navbar/Navbar.css';

const Content = ({ friendCount, username, friends, userParam, user_id, pages }) => {
    
    const AuthUserFriends = Auth.getProfile().data.friends;
    // current user profile id = user_id
    // console.log(AuthUserFriends);
    // console.log('current user profile id: ', user_id);
    
    // check if the current profile user is already a friend of the logged in user
    // if they are friends, then isFriend will be true
    const isFriend = AuthUserFriends.includes(user_id);
    // console.log('isFriend: ', isFriend);

    /**
     * Setup for deletePage event handler. As long as there is not an error and loading finishes then everything was
     * successful
     */
    const [deletePage, { loading, error }] = useDeletePage()

    /**
     * <ReactComponent onClick={event => handleDeletePageEvent(event, id)}
     * @param event
     * @param id
     */
    const handleDeletePageEvent = async (_id) => {
        await deletePage({ variables: { _id: _id } })
    }

    const IsDeleteLoading = () => loading
        ? (<>{/* Handle user interaction for loading results from deletePage. */}</>)
        : ''

    const IsDeleteError = () => error
        ? (<>{/* Handle user interaction for error results from deletePage. */}</>)
        : ''

    const [addFriend] = useMutation(ADD_FRIEND);

    const handleClick = async () => {
        try {
            await addFriend({
                variables: { id: user_id }
            });
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <section className="relative py-16 bg-gray-100 pp-text min-h-[50vh]">
            <div className="container max-w-7xl px-4 mx-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-2xl -mt-64">
                    <div className="px-6">
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                <div className="-mt-20 w-40 h-40">
                                <img alt="Profile picture" src="https://api.lorem.space/image/face?hash=33791" className="profile-pic shadow-lg"></img>
                                </div>
                            </div>
                            <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:self-center flex justify-center mt-10 lg:justify-end lg:mt-0">
                            {userParam && !isFriend ? (
                                <>
                                    <button className='btn-profile rounded-lg btn-second shadow-lg text-primary bg-neutral' onClick={handleClick}>ADD FRIEND</button>
                                </>
                                ) : (
                                <>
                                </>
                            )}
                            { Auth.getProfile().data.username === username &&                                 
                                <button className='btn-build rounded-lg btn-second shadow-lg text-primary bg-neutral'>
                                    <Link to='/editor'>
                                        START BUILDING
                                    </Link>
                                </button>
                            }
                            </div>
                            <div className="w-full lg:w-4/12 px-4 lg:order-1">
                                <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                    <div className="mr-4 p-3 text-center">
                                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-900">
                                            22
                                        </span>
                                        <span className="text-sm text-gray-700 font-bold">
                                            Templates
                                        </span>
                                    </div>
                                    <div className="mr-4 p-3 text-center">
                                        <div className="flex-none">
                                            <div className="dropdown dropdown-hover">
                                                <label tabIndex="0" className="avatar btn-ghost btn-friends">
                                                    <span className="text-xl font-bold block uppercase tracking-wide text-gray-900">
                                                        {friendCount}
                                                    </span>

                                                    {friendCount > 0 ? (
                                                    <>
                                                        <span x="50%" y="60%"  textAnchor="middle"  className='text-sm luminance font-bold'>
                                                            Friends
                                                        </span>
                                                    </>
                                                    ) : (
                                                    <>
                                                        <span className='text-sm text-gray-700 font-black'>
                                                            Friends
                                                        </span>
                                                    </>
                                                    )}
                                                </label>

                                                {friendCount > 0 &&
                                                    // <ul tabIndex="0" className="dropdown-content rounded-box mt-3 w-48 bg-base-100 py-3 shadow app-text justify-content-center text-color">
                                                    <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-48 justify-content-center bg-neutral">
                                                        {friends.map(friend => (
                                                            <li className="friends-list text-primary" key={friend._id}>
                                                                <Link to={`/profile/${friend.username}`}>{friend.username}</Link>
                                                                {/* <a href={`/profile/${friend.username}`}>{friend.username}</a> */}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="lg:mr-4 p-3 text-center">
                                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-900">
                                            89
                                        </span>
                                        <span className="text-sm text-gray-700">
                                            Comments
                                        </span>
                                    </div> */}
                                </div>
                            </div>
                        </div>

                        <div className="text-center mt-1 mb-6">
                            <h1 className="text-gray-900 text-4xl font-bold leading-normal mt-0 mb-2 animate-character">{username}</h1>
                            {userParam ? (
                                <>
                                    <div className="mt-0 mb-2 text-gray-700 font-medium flex items-center justify-center gap-2">
                                        <p className="w-9/12 text-color text-sm font-light leading-relaxed mt-2 mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.</p>
                                    </div>
                                </>
                            ) : (
                                <>
                                </>
                            )}
                        </div>

                        <div className="mb-10 py-2 border-t border-gray-200 text-center">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-11/12 flex justify-around flex-wrap items-center px-10 pt-8">
                                    {pages &&
                                        pages.map(page => (
                                            <div key={page._id} className="w-[300px] h-[300px] border border-gray-200 text-color border rounded-lg iframe-card">

                                                <iframe height="100%" width='100%' srcDoc={`<html>
                                                <head>
                                                    <meta charset="utf-8">
                                                </head>
                                                <style type="text/css">
                                                    ${page.mycss}
                                                </style>
                                                     ${page.myhtml}
                                                </html>`} title="description" >

                                                </iframe>
                                                <button className='delete-btn' onClick={() => handleDeletePageEvent(page._id)}>
                                                    <span className="sidebar-icon hover:bg-red-600"><svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24"><path fill="black" d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" /></svg></span>
                                                </button>

                                            </div>
                                        ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Content;