import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
import Loader from "../../components/Loader/Loader";
import "./index.css";

const stripePromise = loadStripe(
  "pk_test_51L3RgwGfhsrOhMHZmZkwybKYLysZCcm1OBGdbHeCmlx85qbymMARL7qDcmORLqD6hVcH0jtyAkeTsKHfDZGaFNBT00h7dLI53P"
);

// const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PROMISE);

const Donate = () => {
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(true);
  const [amount, amountInput] = useInput({ placeholder: "amount" });

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:3001/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
             mutation CreatePaymentIntent {
             createPaymentIntent {
               clientSecret
             }
           }
        `,
      }),
    })
      .then((res) => res.json())
      .then(({ data }) => {
        setClientSecret(data.createPaymentIntent.clientSecret);
        setLoading(false);
      });
  }, []);

  function useInput(opts) {
    const [value, setValue] = useState("");
    const input = (
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        {...opts}
      />
    );

    return [value, input];
  }

  const appearance = {
    theme: "night",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="signup-container">
      <div>
        {amountInput}
        <p>{amount}</p>
      </div>
      {clientSecret && !loading && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
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
