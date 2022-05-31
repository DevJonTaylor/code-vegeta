import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Editor from "./pages/Editor/Editor";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Donate from "./pages/Donate/Donate";
import App from "./App";
import "./index.css";
import './pages/Signup/Signup.css';
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

// establish the connection to the back-end server's /graphql endpoint
const httpLink = createHttpLink({
  uri: "http://localhost:3001/graphql",
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

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Landing />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/donate" element={<Donate />} />
          </Route>
          {/* Keep editor out of App route to prevent headers and footers */}
          <Route path="/editor" element={<Editor />} />
        </Routes>
      </BrowserRouter>

    </ApolloProvider>
      </React.StrictMode>,
  document.getElementById("root")
);

console.log(process.env.NODE_ENV);


