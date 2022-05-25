import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import poweredBy from "./powered-by-vitawind-dark.png";
import Navbar from "./components/Navbar/Navbar";
import Canvas from "./components/Canvas/Canvas";
import CheckoutForm from "./components/CheckoutForm/CheckoutForm";

require("dotenv").config();

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(process.env.STRIPE_TEST_PROMISE);

function App() {
  const [count, setCount] = useState(0);

  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="text-center selection:bg-green-900">
      <header>
        <Navbar />
      </header>

      <main className="flex min-h-screen flex-col items-center justify-around bg-[#282c34] text-white">
        <Canvas />

        <p className="mt-3">
          <button
            type="button"
            className="my-6 rounded bg-gray-300 px-2 py-2 text-[#282C34] transition-all hover:bg-gray-200"
            onClick={() => setCount((count) => count + 1)}
          >
            count is: {count}
          </button>
        </p>

        {/* STRIPE FORM */}
        <div className="App">
          {clientSecret && (
            <Elements options={options} stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          )}
        </div>
      </main>

      <footer className="flex w-full items-center justify-around">
        <div className="w-48">
          <p>
            Built with <span alt="sweat">💦</span> by
            <br />
            <code className="text-[#8d96a7]">
              Jess, Jonathan, JT, Jordan, and Keenan
            </code>
            {""}
          </p>
        </div>
        <div className="hidden w-48 sm:flex">
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
        <div className="hidden w-48 sm:flex">
          <img src={poweredBy} className="mx-auto my-8" alt="powered-by" />
        </div>
      </footer>
    </div>
  );
}

export default App;
