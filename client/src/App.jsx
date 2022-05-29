import React, { useState } from "react";
// import ReactDOM from "react-dom/client";
import { Outlet } from "react-router-dom";
import poweredBy from "./powered-by-vitawind-dark.png";
import Navbar from "./components/Navbar/Navbar";

import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
// import function from Apollo Client that will retrieve the token from localStorage and include it with each request to the API.
import { setContext } from '@apollo/client/link/context';

// establish the connection to the back-end server's /graphql endpoint
const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});
// URI stands for "Uniform Resource Identifier."

// With this function, setContext, we can create essentially a middleware function (this one) that will retrieve the token for us and combine it with the existing httpLink
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// here, combine the authLink and httpLink objects so that every request retrieves the token and sets the request headers before making the request to the API
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [count, setCount] = useState(0);

  return (
    <ApolloProvider client={client}>
    <div className="flex flex-col text-center selection:bg-green-900">
      <header>
        <Navbar />
      </header>

      <main
        // className="grow bg-[#282c34] text-white"  DO WE NEED THIS AS A DIFF COLOR? SORRY FOR CHANGING IF SO - FEEL FREE TO CHANGE BACK
        className="grow bg-black text-white"
        style={{ marginBottom: "0px" }}
      >
        <Outlet />
        {/* <p className="mt-3">
            <button
              type="button"
              className="my-6 rounded bg-gray-300 px-2 py-2 text-[#282C34] transition-all hover:bg-gray-200"
              onClick={() => setCount((count) => count + 1)}
            >
              count is: {count}
            </button>
          </p> */}
      </main>

      {/* ADDED bg-black TO FOOTER */}
      <footer className="flex w-full items-center justify-around bg-black">
        <div className="w-48">
          <p>
            Built with <span alt="sweat">💦</span> by
            <br />
            <code className="text-[#8d96a7] montserrat-text">
              Jess, Jonathan, JT, Jordan, and Keenan
            </code>
            {""}
          </p>
        </div>
        <div className="hidden w-49 sm:flex">
          <p className="mt-3 flex gap-3 text-center text-[#8d96a7]">
            <a
              className="text-[#61dafb] transition-all hover:text-blue-400"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            {" | "}
            <a
              className="text-[#61dafb] transition-all hover:text-blue-400"
              href="https://vitejs.dev/guide/features.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vite Docs
            </a>
          </p>
        </div>
        <div className="hidden w-49 sm:flex">
          <img src={poweredBy} className="mx-auto my-5" alt="powered-by" />
        </div>
      </footer>
    </div>
    </ApolloProvider>
  );
}

export default App;
