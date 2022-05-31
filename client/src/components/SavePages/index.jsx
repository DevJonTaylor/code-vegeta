import React, { useState, useEffect } from 'react';
import "grapesjs/dist/css/grapes.min.css";

import grapesjs from "grapesjs";
import "grapesjs-blocks-basic";
import grapesTouch from "grapesjs-touch";
import "../../pages/Editor/vegetaPlugin";


import { useMutation } from '@apollo/client';
import { ADD_PAGE } from '../../utils/mutations';
import Auth from '../../utils/auth';

const SavePages = () => {
  // NEW
  const [savePage] = useMutation(ADD_PAGE);
  // END NEW

  ///////////////////////////////////
  // create function to handle saving a book to our database
  const handleSubmit = async () => {
    // find the book in `searchedBooks` state by the matching id
    const htmlToSave = grapesjs.editors[0].getHtml();
    const cssToSave = grapesjs.editors[0].getCss();
    console.log(grapesjs.editors[0].getHtml())
    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      await savePage({
        variables: { myhtml: htmlToSave, mycss: cssToSave },
      });



      // if book successfully saves to user's account, save book id to state
      // setSavedBookIds([...savedBookIds, bookToSave.bookId]);
    } catch (err) {
      console.error(err);
    }
  };
  /////////////////////////////////////////////////

  return (
    <div style={{ paddingLeft: 5 }}>
      
      <span data-tip="Save to database" onClick={handleSubmit} className='class="gjs-pn-btn sidebar-icon hover:bg-green-600 group"'><svg  style={{width:'24px', height:'24px'}} viewBox="0 0 24 24"><path fill="currentColor" d="M17 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V7L17 3M19 19H5V5H16.17L19 7.83V19M12 12C10.34 12 9 13.34 9 15S10.34 18 12 18 15 16.66 15 15 13.66 12 12 12M6 6H15V10H6V6Z" /></svg></span>
     
    </div>
  );
};

export default SavePages;
