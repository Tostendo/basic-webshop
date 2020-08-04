import { ShopActionTypes } from "./shop.types";
import {
  firestore,
  convertCollectionsToMap,
} from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTION_START,
});

export const fetchCollectionsSuccess = (data) => ({
  type: ShopActionTypes.FETCH_COLLECTION_SUCCESS,
  payload: data,
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: ShopActionTypes.FETCH_COLLECTION_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionsStart());

    collectionRef
      .get()
      .then((snapshot) => {
        const data = convertCollectionsToMap(snapshot);
        dispatch(fetchCollectionsSuccess(data));
      })
      .catch((e) => {
        dispatch(fetchCollectionsFailure(e.message));
      });
  };
};
