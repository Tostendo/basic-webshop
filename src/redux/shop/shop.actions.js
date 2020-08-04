import { ShopActionTypes } from "./shop.types";

export const setShopData = (data) => ({
  type: ShopActionTypes.SET_SHOP_DATA,
  payload: data,
});
