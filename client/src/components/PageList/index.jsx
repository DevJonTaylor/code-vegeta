import React from 'react';
import { Link } from 'react-router-dom';

const PageList = ({ pages }) => {
    if (!pages.length) {
        return <h3>No Pages Yet</h3>;
    }

    return (
        <div>
            <h3>Pages</h3>
            {pages &&
                pages.map(page => (
                    <div key={page._id} className="card mb-3">
                        <p className="card-header">

                            {page.username}

                            {page.myhtml}
                        </p>

                    </div>
                ))}
        </div>
    );
};

export default PageList;