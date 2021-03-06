import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import "./index.css";
import generateStripePayment from "../../services/stripe";

const CheckoutForm = ({ paymentIntentId }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState("");

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const res = await generateStripePayment({ id: paymentIntentId, amount });

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: import.meta.env.VITE_DONATE_RETURN_URL,
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occured.");
    }

    setIsLoading(false);
  };

  return (
    <div className="donate-container">
      <form
        className="form-checkout checkout-bg app-text"
        id="payment-form"
        onSubmit={handleSubmit}
      >
        <label className="label">
          <span className="label-text">Donated Amount</span>
        </label>
        <input
          type="number"
          placeholder="$0.00"
          className="input w-full mb-3"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <PaymentElement id="payment-element" />
        <button
          disabled={isLoading || !stripe || !elements}
          id="submit"
          className="btn-checkout btn-main rounded-full bg-neutral text-primary shadow-lg"
        >
          <span id="button-text">
            {isLoading ? <div className="spinner" id="spinner"></div> : "PAY NOW"}
          </span>
        </button>
        {/* Show any error or success messages */}
        {message && <div id="payment-message">{message}</div>}
      </form>
    </div>
  );
};

export default CheckoutForm;
