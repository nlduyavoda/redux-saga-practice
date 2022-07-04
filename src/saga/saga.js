import { takeLatest, call, put, delay } from "redux-saga/effects"; // effect
import { getPosts, fakeCallApi } from "./helper"; //helper
import { GET_POSTS, POST_FORM_VALUES, getPostsSuccess } from "./action";

function* onGetPosts(props) {
  console.log("props :>> ", props);
  const response = yield call(fakeCallApi); // call HELPER
  yield put(getPostsSuccess(response));
}
function* onPostFormValues(props) {
  console.log("[SAGA-START]");
  yield delay(3000);
  const api_responsed = yield call(fakeCallApi); // call HELPER
  console.log("api_responsed :>> ", api_responsed);
  yield put({
    type: POST_FORM_VALUES,
    payload: api_responsed,
  });
}

function* CartSaga() {
  console.log("saga throw");
  yield takeLatest(POST_FORM_VALUES, onPostFormValues);
}

export default CartSaga;
