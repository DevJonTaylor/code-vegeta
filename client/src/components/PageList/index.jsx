import React from 'react';
import { Link } from 'react-router-dom';

const PageList = ({ pages }) => {
    

    return (
        <div>
            <h3>Pages</h3>
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
                            page on {page.username}
                        </p>
                        
                    </div>
                ))}
        </div>
    );
};

export default PageList;