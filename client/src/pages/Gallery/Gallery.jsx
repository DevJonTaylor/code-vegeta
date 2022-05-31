import React from 'react';
import Header from '../../components/Profiles/Header';
import GalleryContent from '../../components/GalleryContent/GalleryContent';
import '../../components/Profiles/Content.css';
import Auth from '../../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_PAGES } from '../../utils/queries';
import { Navigate, useParams } from 'react-router-dom';

export default function Gallery() {

    const { loading, data } = useQuery(QUERY_PAGES);
    const pages = data?.pages || [];
   
    return (
        <div>
            <section className="relative block h-[300px]">
                <div className="bg-profile-background bg-cover bg-center absolute top-0 w-full h-full" />
            </section>
            <GalleryContent pages={pages}  />
        </div>
    );
};
