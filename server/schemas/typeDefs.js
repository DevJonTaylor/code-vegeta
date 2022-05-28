// Type definitions, or TypeDefs for short, involves literally defining every piece of data that the client can expect to work with through a query or mutation.

// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    pages: [Page]
  }

  type Page {
    _id: ID
    myhtml: String
    mycss: String
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
    createPaymentIntent: StripeResponse!
  }

  type StripeResponse {
    clientSecret: String
  }

  type Auth {
    token: ID!
    user: User
  }
`;

// export the typeDefs
module.exports = typeDefs;
