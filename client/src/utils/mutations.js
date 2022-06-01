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
  mutation addPage($myhtml: String!, $mycss: String!) {
    addPage(myhtml: $myhtml, mycss: $mycss) {
    _id
    myhtml
    mycss
    username
    }
  }
`;

export const UPDATE_PAGE = gql`
  mutation updatePage($_id: ID!, $mycss: String, $myhtml: String) {
    updatePage(_id: $_id, mycss: $mycss, myhtml: $myhtml) {
      _id
      myhtml
      mycss
      username
    }
  }`

export const DELETE_PAGE = gql`
  mutation deletePage($_id: ID!) {
    deletePage(_id: $_id) {
      _id
      myhtml
      mycss
      username
    }
  }`

export const ADD_FRIEND = gql`
  mutation addFriend($id: ID!) {
    addFriend(friendId: $id) {
      _id
      username
      friendCount
      friends {
        _id
        username
      }
    }
  }
`;