import Button from '@material-tailwind/react/Button';
import Image from '@material-tailwind/react/Image';
import React, { useState } from 'react';

// import H3 from '@material-tailwind/react/Heading3';
// import Icon from '@material-tailwind/react/Icon';
// import LeadText from '@material-tailwind/react/LeadText';
// import ProfilePicture from 'assets/img/team-2-800x800.jpg';

import './Content.css';

export default function Content() {
    return (
        <section className="relative py-16 bg-gray-100">
            <div className="container max-w-7xl px-4 mx-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-2xl -mt-64">
                    <div className="px-6">
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                <div className="relative">
                                    <div className="w-40 -mt-20">
                                        {/* <Image
                                            // src={ProfilePicture}
                                            src='https://api.lorem.space/image/face?hash=33791'
                                            alt="Profile picture"
                                            raised
                                            rounded
                                            className='rounded-full'
                                        /> */}
                                        <img alt="Profile picture" src="https://api.lorem.space/image/face?hash=33791" className="rounded-full shadow-lg w-40 h-40 align-middle border-none profile-pic"></img>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:self-center flex justify-center mt-10 lg:justify-end lg:mt-0">
                                {/* <Button color="lightBlue" ripple="light">
                                    Connect
                                </Button> */}
                                <button className='btn-login d-block rounded-lg btn-main'>ADD Friend</button>
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
                                    <div className="lg:mr-4 p-3 text-center">
                                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-900">
                                            89
                                        </span>
                                        <span className="text-sm text-gray-700">
                                            Comments
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-center my-8">
                            {/* <H3 color="gray">Jenna Stones</H3> */}
                            <div className="mt-0 mb-2 text-gray-700 font-medium flex items-center justify-center gap-2">
                                {/* <Icon name="place" size="xl" /> */}
                                Username
                            </div>
                            <div className="mb-2 text-gray-700 mt-10 flex items-center justify-center gap-2">
                                {/* <Icon name="work" size="xl" /> */}
                                Solution Manager - Creative Tim Officer
                            </div>
                            <div className="mb-2 text-gray-700 flex items-center justify-center gap-2">
                                {/* <Icon name="account_balance" size="xl" /> */}
                                University of Computer Science
                            </div>
                        </div>

                        <div className="mb-10 py-2 border-t border-gray-200 text-center">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-9/12 px-4 flex flex-col items-center">
                                    {/* <LeadText color="blueGray">
                                        An artist of considerable range, Jenna
                                        the name taken by Melbourne-raised,
                                        Brooklyn-based Nick Murphy writes,
                                        performs and records all of his own
                                        music, giving it a warm, intimate feel
                                        with a solid groove structure. An artist
                                        of considerable range.
                                    </LeadText> */}
                                    <p className="text-color text-lg font-light leading-relaxed mt-6 mb-4">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.
                                    </p>
                                    <a
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        {/* <Button
                                            color="lightBlue"
                                            buttonType="link"
                                            ripple="dark"
                                        >
                                            Show more
                                        </Button> */}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
