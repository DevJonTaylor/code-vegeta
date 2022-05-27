import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L3RgwGfhsrOhMHZmZkwybKYLysZCcm1OBGdbHeCmlx85qbymMARL7qDcmORLqD6hVcH0jtyAkeTsKHfDZGaFNBT00h7dLI53P"
);

const Donate = () => {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:3001/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(
        `
          mutation CreatePaymentIntent {
            createPaymentIntent {
              clientSecret
            }
          }
        `
      ),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log({ data });
        setClientSecret(data.clientSecret);
      });
  }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
};

export default Donate;
