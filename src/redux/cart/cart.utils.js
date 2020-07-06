export const addItemsToCart = (cartItems, newItem) => {
  const existing = cartItems.find((item) => item.id === newItem.id);

  if (existing) {
    return cartItems.map((cartItem) => {
      if (cartItem.id === newItem.id) {
        return { ...cartItem, amount: cartItem.amount + 1 };
      } else {
        return cartItem;
      }
    });
  }
  return [...cartItems, { ...newItem, amount: 1 }];
};

export const removeItemFromCart = (cartItems, itemToRemove) => {
  return cartItems.filter((item) => item.id !== itemToRemove.id);
};

export const removeItem = (cartItems, item) => {
  const existing = cartItems.find((item) => item.id === item.id);

  if (existing.amount > 1) {
    return cartItems.map((cartItem) => {
      if (cartItem.id === item.id) {
        return { ...cartItem, amount: cartItem.amount - 1 };
      } else {
        return cartItem;
      }
    });
  } else {
    return removeItemFromCart(cartItems, item);
  }
};
