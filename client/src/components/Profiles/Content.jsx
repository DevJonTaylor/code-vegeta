import React, { useState } from 'react';
import './Content.css';

import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import { QUERY_USER, QUERY_ME } from '../../utils/queries';
import { useQuery } from '@apollo/client';

import { Navigate, useParams } from 'react-router-dom';



import "grapesjs/dist/css/grapes.min.css";

import grapesjs from "grapesjs";
import "grapesjs-blocks-basic";
import "grapesjs-component-countdown";
import "grapesjs-navbar";
import "grapesjs-lory-slider";
import "grapesjs-tabs";
import gjsForms from "grapesjs-plugin-forms";
import grapesTouch from "grapesjs-touch";
import RunBuddy from '../RunBuddy/RunBuddy';




const Content = ({ pages, title }) => {
    const { username: userParam } = useParams();

    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
        variables: { username: userParam }
    });

    const user = data?.me || data?.user || {};


    // navigate to personal profile page if username is the logged-in user's
    if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
        return <Navigate to="/profile" />;
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    // What happens if you navigate to /profile and you aren't logged in?
    if (!user?.username) {
        return (
            <h4>
                You need to be logged in to see this page. Use the navigation links above to sign up or log in!
            </h4>
        );
    }
    console.log(user)




    return (
        <section className="relative py-16 bg-gray-100 app-text">
            <div className="container max-w-7xl px-4 mx-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-2xl -mt-64">
                    <div className="px-6">
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                <div className="relative">
                                    <div className="w-40 -mt-20">
                                        <img alt="Profile picture" src="https://api.lorem.space/image/face?hash=33791" className="rounded-full shadow-lg w-40 h-40 align-middle border-none profile-pic"></img>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:self-center flex justify-center mt-10 lg:justify-end lg:mt-0">

                                <button className='btn-profile d-block rounded-lg btn-main'>ADD FRIEND</button>
                            </div>
                            <div className="w-full lg:w-4/12 px-4 lg:order-1">
                                <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                    <div className="mr-4 p-3 text-center">
                                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-900">
                                            22
                                        </span>
                                        <span className="text-sm text-gray-700">
                                            Templates
                                        </span>
                                    </div>
                                    <div className="mr-4 p-3 text-center">
                                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-900">
                                            10
                                        </span>
                                        <span className="text-sm text-gray-700">
                                            Friends
                                        </span>
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

                        <div className="text-center my-8">
                            <h1 className="text-gray-900 text-4xl font-bold leading-normal mt-0 mb-2">{title}</h1>
                            <div className="mt-0 mb-2 text-gray-700 font-medium flex items-center justify-center gap-2">
                                {/* <Icon name="place" size="xl" /> */}
                                <p className="w-9/12 text-color text-sm font-light leading-relaxed mt-4 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.</p>
                            </div>
                        </div>

                        <div className="mb-10 py-2 border-t border-gray-200 text-center">
                            <div className="flex flex-wrap justify-center">
                                {/* <p className="w-full text-color text-lg font-light leading-relaxed mt-6 mb-4">
                                      TEMPLATES HERE
                                </p> */}
                                <div className="w-full lg:w-11/12 flex justify-between flex-wrap items-center px-10 pt-8">

                                    {pages &&
                                        pages.map(page => (
                                            <div key={page._id} className="w-[300px] h-[300px] border border-gray-200 text-color border rounded-lg bg-sky-300">

                                                <iframe height="100%" width='100%' srcDoc={`<html>
                                                <head>
                                                    <meta charset="utf-8">
                                                </head>
                                                <style type="text/css">
                                                    ${page.mycss}
                                                </style>
                                                     ${page.myhtml}
                                                </html>`} title="description" >

                                                    {/* {page.myhtml} */}

                                                </iframe>


                                            </div>
                                        ))}


                                    <div className="w-[300px] h-[200px] border border-gray-200 text-color border rounded-lg bg-sky-300"></div>
                                    <div className="w-[300px] h-[200px] border border-gray-200 text-color border rounded-lg bg-sky-300"></div>
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

export default Content;