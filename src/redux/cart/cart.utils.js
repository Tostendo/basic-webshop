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
