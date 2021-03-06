import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Editor from "./components/Editor/Editor";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Donate from "./pages/Donate/Donate";
import Gallery from "./pages/Gallery/Gallery";
import App from "./App";
import "./index.css";
import "./pages/Signup/Signup.css";
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Test from "./pages/Test/Test";

// establish the connection to the back-end server's /graphql endpoint
const httpLink = createHttpLink({
  uri: import.meta.env.VITE_GRAPHQL_ENDPOINT,
});
// URI stands for "Uniform Resource Identifier."

// With this function, setContext, we can create essentially a middleware function (this one) that will retrieve the token for us and combine it with the existing httpLink
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

// here, combine the authLink and httpLink objects so that every request retrieves the token and sets the request headers before making the request to the API
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Router basename={`/`}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Landing />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/:username" element={<Profile />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/test" element={<Test />} />
          </Route>
          {/* Keep editor out of App route to prevent headers and footers */}
          <Route path="/editor" element={<Editor />} />
        </Routes>
      </Router>
    </ApolloProvider>
  </React.StrictMode>
);

console.log(process.env.NODE_ENV);
