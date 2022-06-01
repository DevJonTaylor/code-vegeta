const { User, Page } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
// import stripe
const stripe = require('stripe')(
  'sk_test_51L3RgwGfhsrOhMHZNiEAtQIhmSnAyJMnTz5uB8FGSygAOLHAGIcoknv2IlZQBBs0rs4l9Z7PXjDlcLiiSQ0TVOfe008dDQtUrN'
);

const notLoggedIn = () => {
  throw new AuthenticationError('You need to be logged in!')
}

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('pages')
          .populate('friends');

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
    // get all users
    users: async () => {
      return User.find()
      .select('-__v -password')
      .populate('friends')
      .populate('pages');
    },
    // get a user by username
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        .populate('friends')
        .populate('pages');
    },
    pages: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Page.find(params).sort({ createdAt: -1 });
    },
    // Get Single Thought
    page: async (parent, { _id }) => {
      return Page.findOne({ _id });
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
    addPage: async (parent, args, context) => {

      if (!context.user) return notLoggedIn()

      const page = await Page.create({ ...args, username: context.user.username });

      await User.findByIdAndUpdate(
        { _id: context.user._id },
        { $push: { pages: page._id } },
        { new: true }
      );

        return page;
    },
    updatePage: async (parent, { _id, mycss, myhtml }, context) => {
      try {
        if (!context.user) return notLoggedIn()
        const updateObject = {}
        if(mycss !== undefined) updateObject.mycss = mycss
        if(myhtml !== undefined) updateObject.myhtml = myhtml

        return Page.findByIdAndUpdate( { _id }, updateObject, { new: true } )
      } catch(error) {
        console.error(error)
        return Promise.reject(error)
      }
    },
    deletePage: async (parent, { _id }, context) => {
      if (!context.user) return notLoggedIn()

      try {
        const page = await Page.findOne({ _id })
        const user = await User.updateOne(
          { username: page.username },
          { $pull: { pages: { _id } } },
          { new: true }
        )
        await page.remove()

        return user
      } catch(error) {
        console.log(error)
        return Promise.reject(error)
      }
    },
    createPaymentIntent: async () => {
      try {
        const paymentIntent = await stripe.paymentIntents.create({
          amount: 50,
          currency: 'usd',
          automatic_payment_methods: {
            enabled: true,
          },
        });

        if (paymentIntent?.client_secret) {
          return {
            clientSecret: paymentIntent.client_secret,
            id: paymentIntent.id,
          };
        }
        return new Error('No client secret created.');
      } catch (err) {
        console.log({ err });
        throw new Error('No worky');
      }
    },
    addFriend: async (parent, { friendId }, context) => {
      // This mutation will look for an incoming friendId and add that to the current user's friends array
      // A user can't be friends with the same person twice, though, hence why we're using the $addToSet operator instead of $push to prevent duplicate entries

      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { friends: friendId } },
          { new: true }
        ).populate('friends');
    
        return updatedUser;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    updatePaymentIntent: async (parent, { id, amount }) => {
      try {
        await stripe.paymentIntents.update(id, {
          amount: 100 * amount,
        });
        return { success: true };
      } catch (err) {
        return { success: false };
      }
    },
  },
};

module.exports = resolvers;
