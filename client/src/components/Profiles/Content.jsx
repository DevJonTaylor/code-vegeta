import React, { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import Auth from "../../utils/auth";

import { ADD_FRIEND, DELETE_PAGE } from "../../utils/mutations";
import { useQuery, useMutation } from "@apollo/client";
import { useDeletePage } from "../../hooks/usePage";

import "./Content.css";
import "../Navbar/Navbar.css";

const Content = ({
  friendCount,
  username,
  friends,
  userParam,
  user_id,
  pages,
}) => {
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
  const [deletePage, { loading, error }] = useDeletePage();

  /**
   * <ReactComponent onClick={event => handleDeletePageEvent(event, id)}
   * @param event
   * @param id
   */
  const handleDeletePageEvent = async (_id) => {
    await deletePage({ variables: { _id: _id } });
    location.reload();
  };

  const IsDeleteLoading = () =>
    loading ? (
      <>{/* Handle user interaction for loading results from deletePage. */}</>
    ) : (
      ""
    );

  const IsDeleteError = () =>
    error ? (
      <>{/* Handle user interaction for error results from deletePage. */}</>
    ) : (
      ""
    );

  const [addFriend] = useMutation(ADD_FRIEND);

  const handleClick = async () => {
    try {
      await addFriend({
        variables: { id: user_id },
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <section className="pp-text relative min-h-[50vh] bg-gray-100 py-16">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="relative mb-6 -mt-64 flex w-full min-w-0 flex-col break-words rounded-2xl bg-white shadow-xl">
          <div className="px-6">
            <div className="flex flex-wrap justify-center">
              <div className="flex w-full justify-center px-4 lg:order-2 lg:w-3/12">
                <div className="-mt-20 h-40 w-40">
                  <img
                    alt="Profile picture"
                    src="https://api.lorem.space/image/face?hash=33791"
                    className="profile-pic shadow-lg"
                  ></img>
                </div>
              </div>
              <div className="mt-10 flex w-full justify-center px-4 lg:order-3 lg:mt-0 lg:w-4/12 lg:justify-end lg:self-center">
                {userParam && !isFriend ? (
                  <>
                    <button
                      className="btn-profile btn-second rounded-lg bg-neutral text-primary shadow-lg"
                      onClick={handleClick}
                    >
                      ADD FRIEND
                    </button>
                  </>
                ) : (
                  <></>
                )}
                {Auth.getProfile().data.username === username && (
                  <Link to="/editor">
                    <button className="btn-build btn-second rounded-lg bg-neutral text-primary shadow-lg">
                      START BUILDING
                    </button>
                  </Link>
                )}
              </div>
              <div className="w-full px-4 lg:order-1 lg:w-4/12">
                <div className="flex justify-center py-4 pt-8 lg:pt-4">
                  <div className="mr-4 p-3 text-center">
                    <span className="block text-xl font-bold uppercase tracking-wide text-gray-900">
                      {pages.length}
                    </span>
                    <span className="text-sm font-bold text-gray-700">
                      Templates
                    </span>
                  </div>
                  <div className="mr-4 p-3 text-center">
                    <div className="flex-none">
                      <div className="dropdown-hover dropdown">
                        <label
                          tabIndex="0"
                          className="btn-friends avatar btn-ghost"
                        >
                          <span className="block text-xl font-bold uppercase tracking-wide text-gray-900">
                            {friendCount}
                          </span>

                          {friendCount > 0 ? (
                            <>
                              <span
                                x="50%"
                                y="60%"
                                textAnchor="middle"
                                className="luminance text-sm font-bold"
                              >
                                Friends
                              </span>
                            </>
                          ) : (
                            <>
                              <span className="text-sm font-bold text-gray-700">
                                Friends
                              </span>
                            </>
                          )}
                        </label>

                        {friendCount > 0 && (
                          // <ul tabIndex="0" className="dropdown-content rounded-box mt-3 w-48 bg-base-100 py-3 shadow app-text justify-content-center text-color">
                          <ul
                            tabIndex="0"
                            className="justify-content-center dropdown-content menu rounded-box w-48 bg-base-100 p-2 shadow"
                          >
                            {friends.map((friend) => (
                              <li
                                className="friends-list text-primary"
                                key={friend._id}
                              >
                                <Link to={`/profile/${friend.username}`}>
                                  {friend.username}
                                </Link>
                                {/* <a href={`/profile/${friend.username}`}>{friend.username}</a> */}
                              </li>
                            ))}
                          </ul>
                        )}
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

            <div className="mt-1 mb-6 text-center">
              <h1 className="animate-character mt-0 mb-2 text-4xl font-bold leading-normal text-gray-900">
                {username}
              </h1>
              {userParam ? (
                <>
                  <div className="mt-0 mb-2 flex items-center justify-center gap-2 font-medium text-gray-700">
                    <p className="text-color mt-2 mb-2 w-9/12 text-sm font-light leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor.
                    </p>
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>

            <div className="mb-10 border-t border-gray-200 py-2 text-center">
              <div className="flex flex-wrap justify-center">
                <div className="flex w-full flex-wrap items-center justify-around px-6 pt-2 pb-4 lg:w-11/12">
                  {pages &&
                    pages.map((page) => (
                      <div key={page._id} class="flex flex-col items-center">
                        <div className="mockup-phone">
                          <div className="camera"></div>
                          <div className="display">
                            <div className="artboard artboard-demo phone-1">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
