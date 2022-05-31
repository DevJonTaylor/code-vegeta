import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import axios from "axios";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
import Loader from "../../components/Loader/Loader";

import "./index.css";

const stripePromise = loadStripe(
  "pk_test_51L3RgwGfhsrOhMHZmZkwybKYLysZCcm1OBGdbHeCmlx85qbymMARL7qDcmORLqD6hVcH0jtyAkeTsKHfDZGaFNBT00h7dLI53P"
);

// const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PROMISE);

const Donate = () => {
  const [paymentIntent, setPaymentIntent] = useState(null);
  const [options, setOptions] = useState({
    clientSecret: "",
    appearance: {
      theme: "night",
    },
  });
  const [loading, setLoading] = useState(true);
  const [amount, setAmount] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    const generateClientSecret = async () => {
      const { data } = await axios.post(
        "http://localhost:3001/graphql",
        {
          query: `
              mutation CreatePaymentIntent {
              createPaymentIntent {
               clientSecret
               id
             }
          }
        `,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setPaymentIntent(data.data.createPaymentIntent);
      setOptions({
        clientSecret: data.data.createPaymentIntent.clientSecret,
        appearance: { ...options.appearance },
      });
      setLoading(false);
    };

    generateClientSecret();
  }, []);

  return (
    
    <div className="signup-container">
      <input
        type="number"
        placeholder="Type here"
        className="input w-full max-w-xs"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      {paymentIntent && !loading && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm paymentIntent={{ id: paymentIntent.id, amount }} />
        </Elements>
      )}
      {loading && (
        <div style={{ margin: "4rem auto" }}>
          <Loader />
        </div>
      )}
    </div>
  );
};

export default Donate;
