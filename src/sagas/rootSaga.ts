import foldersSaga from './folders';
import mailsSaga from './mails';
import loginSaga from './login';
import { all, spawn } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([
    spawn(foldersSaga),
    spawn(mailsSaga),
    spawn(loginSaga),
  ]);
}
