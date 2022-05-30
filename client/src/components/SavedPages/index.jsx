import React from 'react';
import { Link } from 'react-router-dom';

const SavedPages = ({ pages, title }) => {
    if (!pages.length) {
        return <h3>{title} No pages Yet</h3>;
    }

    console.log(pages)

    return (
        <div>
            <h3>{title}</h3>
            {pages &&
                pages.map(page => (
                    <div key={page._id} className="card mb-3">
                        <p className="card-header">
                            <Link
                                to={`/profile/${page.username}`}
                                style={{ fontWeight: 700 }}
                                className="text-light"
                            >
                                {page.username}
                            </Link>{' '}
                            
                        </p>
                        
                    </div>
                ))}
        </div>
    );
};

export default SavedPages;
















// import React from 'react';
// import Auth from '../../utils/auth';
// import { useQuery, useMutation } from '@apollo/client';
// import { QUERY_ME } from '../../utils/queries';
// import { QUERY_PAGES } from '../../utils/queries';
// import { Navigate, useParams } from 'react-router-dom';

// const SavedPages = ( ) => {

//     const { loading, data } = useQuery(QUERY_ME);
//     const userData = data?.me || {};
//     const { username: userParam } = useParams();
//     const user = data?.me || data?.user || {};

//     if (loading) {
//         return <div>Loading...</div>;
//     }
//     const userDataLength = Object.keys(userData).length;
//     if (!userDataLength) {
//         return <h2>LOADING...</h2>;
//     }
    

// console.log(userData)

//     return (
//         <>
//             <h2>{userData.username}</h2>
//             <h2>{userParam ? `${user.username}'s` : 'your'}</h2>
//             <h2>
//                 {userData.pages.length
//                     ? `Viewing ${userData.username} saved ${userData.pages.length === 1 ? 'book' : 'books'}:`
//                     : 'You have no saved books!'}
//             </h2>
//             <div>
//                 {userData.pages &&
//                     userData.pages.map(page => (
//                         <div key={page._id} className="card mb-3">
//                             <p className="card-header">
//                                 {page.mycss}
//                                 {page.myhtml}
//                             </p>
//                         </div>
//                     ))}
//             </div>
//         </>
//     );
// };

// export default SavedPages;

