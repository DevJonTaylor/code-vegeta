import React, { useState } from 'react';
import './Content.css';

const Content = () => {
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
                            <h1 class="text-gray-900 text-4xl font-bold leading-normal mt-0 mb-2">Jenna Stones</h1>
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
                                    <div className="w-[300px] h-[200px] border border-gray-200 text-color border rounded-lg bg-sky-300"></div>
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