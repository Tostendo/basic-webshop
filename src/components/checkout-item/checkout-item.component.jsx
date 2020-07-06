import React from "react";

import { connect } from "react-redux";

import { removeItem } from "../../redux/cart/cart.actions";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ item, removeItem }) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={item.imageUrl} alt="item" />
    </div>
    <span className="name">{item.name}</span>
    <span className="quantity">{item.amount}</span>
    <span className="price">{item.price}</span>
    <div className="remove-button" onClick={() => removeItem(item)}>
      &#10005;
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
