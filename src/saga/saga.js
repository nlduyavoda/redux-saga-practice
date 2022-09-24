import { call, delay, put, takeLatest } from "redux-saga/effects"; // effect
import {
  SAGA_EDIT_FORM_INTEREST,
  SAGA_EDIT_FORM_MEDIAS,
  SAGA_EDIT_FORM_TITLE,
  SAGA_ADD_MEDIAS,
} from "utils";
import { fakeCallApi } from "./helper"; //helper
import { formSlice } from "./reducer";

function* onEditFormTitle({ payload, type }) {
  yield delay(1000);
  //call api
  const apiRes = yield call(() => {
    return fakeCallApi(payload);
  });
  console.log("formSlice.actions :>> ", formSlice);
  yield put(formSlice.actions.editTitle(apiRes));
}

function* onEditFormInterests({ payload, type }) {
  yield delay(1000);
  const apiRes = yield call(() => {
    return fakeCallApi(payload);
  });
  yield put(formSlice.actions.editInterests(apiRes));
}

function* onEditFormMedias({ payload, type }) {
  yield delay(1000);
  const apiRes = yield call(() => {
    return fakeCallApi(payload);
  });
  yield put(formSlice.actions.editMedias(apiRes));
}

function* onAddFormMedias({ payload, type }) {
  yield delay(1000);
  const apiRes = yield call(() => {
    return fakeCallApi(payload);
  });
  yield put(formSlice.actions.addMedias(apiRes));
}

function* CartSaga() {
  yield takeLatest(SAGA_EDIT_FORM_TITLE, onEditFormTitle);
  yield takeLatest(SAGA_EDIT_FORM_INTEREST, onEditFormInterests);
  yield takeLatest(SAGA_EDIT_FORM_MEDIAS, onEditFormMedias);
  yield takeLatest(SAGA_ADD_MEDIAS, onAddFormMedias);
}

export default CartSaga;
