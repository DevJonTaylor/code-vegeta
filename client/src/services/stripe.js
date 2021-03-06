import axios from "axios";

const generateStripePayment = async ({ id, amount }) => {
  console.log({ id });
  console.log({ amount });
  let clientSecret = null;

  // Create PaymentIntent as soon as the page loads
  const { data } = await axios.post(
    import.meta.env.VITE_GRAPHQL_ENDPOINT,
    {
      query: `
          mutation UpdatePaymentIntent($id: String!, $amount: Int!) {
            updatePaymentIntent(id: $id, amount: $amount) {
             success
           }
        }
      `,
      variables: { id, amount: parseInt(amount) },
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (data?.createPaymentIntent?.clientSecret) {
    clientSecret = data.createPaymentIntent.clientSecret;
  }
};

export default generateStripePayment;
