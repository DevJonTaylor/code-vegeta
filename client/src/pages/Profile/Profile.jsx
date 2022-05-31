import React from 'react';
import Header from '../../components/Profiles/Header';
import Content from '../../components/Profiles/Content';
import '../../components/Profiles/Content.css';
import Auth from '../../utils/auth';
import { QUERY_USER, QUERY_ME } from '../../utils/queries';
import { useQuery } from '@apollo/client';

import { Navigate, useParams } from 'react-router-dom';

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
        <div>
            <Header />
            <Content pages={user.pages} title={user.username} />
        </div>
    );
};
