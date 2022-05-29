import { gql } from '@apollo/client';

//All Pages
export const QUERY_PAGES = gql`
  query pages($username: String) {
    pages(username: $username) {
        _id
        myhtml
        mycss
        username
    }
  }
`;

//Single Page
export const QUERY_PAGE = gql`
  query page($id: ID!) {
    page(_id: $id) {
        _id
        myhtml
        mycss
        username
    }
  }
`;

// retrieve all data related to the logged-in user
export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      pages {
        _id
        myhtml
        mycss
        username
        }
      
    }
  }
`;