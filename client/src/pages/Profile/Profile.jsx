import React from 'react';
import Header from '../../components/Profiles/Header';
import Content from '../../components/Profiles/Content';
import '../../components/Profiles/Content.css';

import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../../utils/queries';

import Auth from '../../utils/auth';

export default function Profile() {
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

    if (!user?.username) {
		return (
		  <div className='signup-container flex flex-wrap justify-center content-center text-primary font-black'>
			<p>You need to be logged in to see this page. <br />
            Use the navigation links above to sign up or log in!</p>
		  </div>
		);
	}

    return (
        <div >
            <Header />
            <Content
                pages={user.pages}
                username={user.username}
                friendCount={user.friendCount}
                friends={user.friends}
                // username at url
                userParam={userParam}
                // user id of friend
                user_id={user._id}
            />
        </div>
    );
};
