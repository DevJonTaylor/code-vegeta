// Type definitions, or TypeDefs for short, involves literally defining every piece of data that the client can expect to work with through a query or mutation.

// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    friendCount: Int
    pages: [Page]
    friends: [User]
  }

  type Page {
    _id: ID
    myhtml: String
    mycss: String
    username: String
  }

  type StripeResponse {
    clientSecret: String
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    pages(username: String): [Page]
    page(_id: ID!): Page
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addPage(myhtml: String!, mycss: String!): Page
    updatePage(_id: ID!, myhtml: String, mycss: String): Page
    deletePage(_id: ID!): Page
    addFriend(friendId: ID!): User
    createPaymentIntent: StripeResponse!
    updatePaymentIntent(id: String!, amount: Int!): UpdateStripeResponse!
  }

  type StripeResponse {
    clientSecret: String
    id: String
  }

  type UpdateStripeResponse {
    success: Boolean
  }

  type Auth {
    token: ID!
    user: User
    friends: [User]
  }
`;

// export the typeDefs
module.exports = typeDefs;
