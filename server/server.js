require('dotenv').config({ path: `${__dirname}/../client/.env` });

// import ApolloServer
const { ApolloServer } = require('apollo-server-express');

const path = require('path');
const { authMiddleware } = require('./utils/auth');

const cors = require('cors');
const express = require('express');

const {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageDisabled,
} = require('apollo-server-core');

// import our typeDefs and resolvers
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;

// create a new Apollo server and pass in our schema data
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
  plugins: [
    process.env.NODE_ENV === 'production'
      ? ApolloServerPluginLandingPageDisabled()
      : ApolloServerPluginLandingPageGraphQLPlayground(),
  ],
});

const app = express();
const whiteList = ['http://localhost:3000', 'http://localhost*'];
const corsOptions = {
  origin: (origin, callback) => {
    return callback(
      whiteList.indexOf(origin) !== -1 ? null : new Error('Not Allowed'),
      true
    );
  },
};

app
  .use(express.urlencoded({ extended: false }))
  .use(express.json())
  .use(cors());

// Serve up static assets
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../client/dist')));
//   app.use(express.static(path.join(__dirname, '../client/dist/index.html')));
// }

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../client/dist'));
  app.get('*', (req, res) => {
    res.sendFile(path.join('../client/dist', '../client/dist/index.html'));
  });
}

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();

  // integrate our Apollo server with the Express application as middleware
  server.applyMiddleware({ app });

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      // log where we can go to test our GQL API
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

// Call the async function to start the server
startApolloServer(typeDefs, resolvers);

// STRIPE
// const calculateOrderAmount = (items) => {
//   // Replace this constant with a calculation of the order's amount
//   // Calculate the order total on the server to prevent
//   // people from directly manipulating the amount on the client
//   return 1400;
// };

// app.post('/create-payment-intent', async (req, res) => {
//   const { items } = req.body;

//   // Create a PaymentIntent with the order amount and currency
//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: calculateOrderAmount(items),
//     currency: 'eur',
//     automatic_payment_methods: {
//       enabled: true,
//     },
//   });

//   res.send({
//     clientSecret: paymentIntent.client_secret,
//   });
// });
