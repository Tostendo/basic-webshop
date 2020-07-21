import React from "react";
import StripeCheckout from "react-stripe-checkout";

import "./strip-button.styles.scss";

const StripCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51H6xKbIhiZ8c1rM9VVPUTbjx9iAbYpa8IR7sKOC9fYTq81IyZx5m40ey7XB9EU5RAYqh2aMiFoWlSfl3LLKgNCLW007QInVgcX";

  const onToken = (token) => {
    console.log(token);
    alert("Payment successful!");
  };

  return (
    <StripeCheckout
      label="Pay now"
      name="Basic Webshop"
      billingAddress
      shippingAddress
      img="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      stripeKey={publishableKey}
      panelLabel="Pay now"
      token={onToken}
    />
  );
};

export default StripCheckoutButton;
