import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import Header from '../../components/Profiles/Header';
import Content from '../../components/Profiles/Content';
import '../../components/Profiles/Content.css';


export default function Profile() {
    return (
        <div>
            <Header />
            <Content />
        </div>
    );
};
