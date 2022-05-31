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
      friendCount
      friends {
        _id
        username
      }
      pages {
        _id
        myhtml
        mycss
      }
    }
  }
`;

//For the Profile Page
export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      pages {
        _id
        myhtml
        mycss
      }
      friendCount
      friends {
        _id
        username
      }
    }
  }
`;