import { takeLatest, call, put, all } from "redux-saga/effects";

import { ShopActionTypes } from "./shop.types";

import {
  firestore,
  convertCollectionsToMap,
} from "../../firebase/firebase.utils";

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "./shop.actions";

export function* fetchCollectionAsync() {
  yield console.log("I am fired");

  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();

    const colletionsMap = yield call(convertCollectionsToMap, snapshot);
    yield put(fetchCollectionsSuccess(colletionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTION_START,
    fetchCollectionAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
