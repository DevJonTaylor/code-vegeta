import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// Add Page
export const ADD_PAGE = gql`
  mutation addPage($myhtml: String!, $mycss: String!,) {
    addPage(myhtml: $myhtml, mycss: $mycss) {
    _id
    myhtml
    mycss
    username
    }
  }
`;