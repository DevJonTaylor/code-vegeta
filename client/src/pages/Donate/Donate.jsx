import React, { useState, useEffect } from "react";
// import { loadEnv } from "vite";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import axios from "axios";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
import Loader from "../../components/Loader/Loader";

import "./index.css";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PROMISE);

const Donate = () => {
  const [paymentIntent, setPaymentIntent] = useState(null);
  const [options, setOptions] = useState({
    clientSecret: "",
    appearance: {
      theme: "night",
    },
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    const generateClientSecret = async () => {
      const { data } = await axios.post(
        import.meta.env.VITE_GRAPHQL_ENDPOINT,
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
      {paymentIntent && !loading && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm paymentIntentId={paymentIntent.id} />
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
