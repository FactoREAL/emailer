import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';

import * as fromActions from 'src/actions/login';
import * as fromApi from 'src/api/login';
import { history } from 'src/components/App';

export default function* watcher() {
  yield takeEvery(fromActions.loginActionType.SET_TOKEN, setTokenSaga);
  yield takeEvery(fromActions.loginActionType.LOGIN_REQUEST, loginRequestSaga);
}

export function* setTokenSaga(action: fromActions.SetToken) {
  const { token } = action.payload;
  localStorage.setItem('token', token);
  yield axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export function* loginRequestSaga(action: fromActions.LoginRequest) {
  const { email, password } = action.payload;
  const token = yield call(fromApi.loginRequest, email, password);
  yield put(fromActions.setToken(token));
  if (action.payload.next) {
    history.push(action.payload.next);
  }
}
