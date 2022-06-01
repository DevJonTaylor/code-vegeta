import React, { useState } from 'react';
// import './Content.css';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';
import { QUERY_USER, QUERY_ME } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import { Navigate, useParams } from 'react-router-dom';


const GalleryContent = ({ pages, title }) => {

    return (
        <section className="relative py-16 bg-gray-100 app-text min-h-[50vh]">
            <div className="container max-w-7xl px-4 mx-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-2xl -mt-64">
                    <div className="px-6">
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                <div className="-mt-20 w-40 h-40">
                                    <div className="profile-pic shadow-lg custom-profile-pic"></div>
                                </div>
                            </div>
                            <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:self-center flex justify-center mt-10 lg:justify-end lg:mt-0">

                            </div>
                            <div className="w-full lg:w-4/12 px-4 lg:order-1">
                                <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                   
                                </div>
                            </div>
                        </div>

                        <div className="text-center my-8">
                            <h1 className="text-gray-900 text-4xl font-bold leading-normal mt-0 mb-2">Public Templates</h1>
                            <div className="mt-0 mb-2 text-gray-700 font-medium flex items-center justify-center gap-2">
                                {!pages.length ? ( 
                                <>
                                    <div>
                                        <p className="mt-3 mb-5 w-100">No templates available. Build the first one! </p>
                                        <Link to='/editor'>
                                            <button className='btn-build rounded-lg btn-second shadow-lg text-primary bg-neutral'>
                                                START BUILDING
                                            </button>
                                        </Link>      
                                    </div>
                                </>
                                ) : (
                                <>
                                <p className="w-9/12 text-color text-sm font-light leading-relaxed mt-4 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.</p>
                                </>
                                )}
                            </div>
                        </div>

                        <div className="mb-10 py-2 border-t border-gray-200 text-center">
                            <div className="flex flex-wrap justify-center">
                                <div className="flex w-full flex-wrap items-center justify-around mt-7 px-6 pt-2 pb-4 lg:w-100">

                                    {/* {pages &&
                                        pages.map(page => (
                                            <div key={page._id} className="mb-16 w-[300px] h-[300px] border border-gray-200 text-color border rounded-lg">
                                                <Link to={`/profile/${page.username}`}>
                                                    <div className='bg-neutral py-2'>
                                                        <p className='text-primary font-bold hover:animate-pulse'>Built By | {page.username}</p>
                                                    </div>
                                                </Link>
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


                                            </div>
                                        ))} */}
                                        {pages &&
                                        pages.map((page) => (
                                        <div key={page._id} class="flex flex-col items-center">
                                            <div className="mockup-phone">
                                            <div className="camera"></div>
                                            <div className="display">
                                                <div className="artboard artboard-demo phone-1">
                                                <Link to={`/profile/${page.username}`}>
                                                    <div className='mt-6 px-2 rounded-xl bg-neutral py-2'>
                                                        <p className='text-primary font-bold hover:animate-pulse'>Built By | {page.username}</p>
                                                    </div>
                                                </Link>
                                                <iframe
                                                    height="100%"
                                                    width="100%"
                                                    srcDoc={`<html>
                                                                    <head>
                                                                        <meta charset="utf-8">
                                                                    </head>
                                                                    <style type="text/css">
                                                                        *::-webkit-scrollbar{display:none;}
                                                                        ${page.mycss}
                                                                    </style>
                                                                        ${page.myhtml}
                                                                    </html>`}
                                                    title="description"
                                                ></iframe>
                                                </div>
                                            </div>
                                            </div>
                                            <button
                                            className="delete-btn"
                                            onClick={() => handleDeletePageEvent(page._id)}
                                            >
                                            <span className="sidebar-icon hover:bg-red-600">
                                                <svg
                                                style={{ width: "24px", height: "24px" }}
                                                viewBox="0 0 24 24"
                                                >
                                                <path
                                                    fill="black"
                                                    d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"
                                                />
                                                </svg>
                                            </span>
                                            </button>
                                        </div>
                                        ))}



                                    {/* <div className="w-[450px] h-[280px] border border-gray-200 text-color rounded-lg bg-emerald-300"></div>
                                    <div className="w-[450px] h-[280px] border border-gray-200 text-color rounded-lg bg-emerald-300"></div> */}
                                    {/* <a
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <Button
                                            color="lightBlue"
                                            buttonType="link"
                                            ripple="dark"
                                        >
                                            Show more
                                        </Button>
                                    </a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default GalleryContent;