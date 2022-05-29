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
  // const [savePage] = useMutation(ADD_PAGE);
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
    <div>
     <div onClick={handleSubmit}>Submit</div>
    </div>
  );
};

export default SavePages;
