const path = require('path');

const { authMiddleware } = require('./utils/auth');
const express = require('express');
const cors = require('cors')

// import ApolloServer
const { ApolloServer } = require('apollo-server-express');

// import our typeDefs and resolvers
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
// create a new Apollo server and pass in our schema data
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
});

const app = express();
const whiteList = [
  'http://localhost:3000',
  'http://localhost*'
]
const corsOptions = {
  origin: (origin, callback) => {
    return callback(whiteList.indexOf(origin) !== -1 ? null : new Error('Not Allowed'), true)
  }
}

app
  .use(express.urlencoded({ extended: false }))
  .use(express.json())
  .use(cors())

// Serve up static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

app.all('/editor', ({ method }, res) => {
  const data = {"gjs-html":"<body><h1>Hello World Component!</h1></body>","gjs-components":"[{\"tagName\":\"h1\",\"type\":\"text\",\"components\":[{\"type\":\"textnode\",\"content\":\"Hello World Component!\"}]}]","gjs-assets":"[]","gjs-css":"* { box-sizing: border-box; } body {margin: 0;}","gjs-styles":"[]"}
  switch(method) {
    case 'get':
      return res.json(data)
    case 'post':
      return res.json({
        code: 200,
        message: 'ok'
      })
    default:
      return res.json({
        code: 200,
        message: 'ok'
      })
  }
})

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();

  // integrate our Apollo server with the Express application as middleware
  server.applyMiddleware({ app });

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      // log where we can go to test our GQL API
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
};

// Call the async function to start the server
startApolloServer(typeDefs, resolvers);