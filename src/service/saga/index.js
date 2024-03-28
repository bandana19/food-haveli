import { takeLatest } from "redux-saga/effects";
import { appActions } from "../action";
import { sagaEngine } from "./sagaEngine";

function* mySaga() {
  // Object.keys(appActions).map(function* (item) {
  //   Yield takeLatest(item, sagaEngine);
  // });
  yield takeLatest(appActions.REGISTER, sagaEngine);
  yield takeLatest(appActions.LOGIN,sagaEngine)
  yield takeLatest(appActions.GET_USER,sagaEngine)
}


export default mySaga;
