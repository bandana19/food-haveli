import { takeLatest } from "redux-saga/effects";
import { appActions } from "../action";
import { sagaEngine } from "./sagaEngine";

function* mySaga() {
  // Object.keys(appActions).map(function* (item) {
  //   Yield takeLatest(item, sagaEngine);
  // });
  yield takeLatest(appActions.REGISTER, sagaEngine);
}


export default mySaga;
