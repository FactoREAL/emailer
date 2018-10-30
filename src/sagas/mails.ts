import { call, put, select, takeEvery } from 'redux-saga/effects';
import * as fromActions from 'src/actions/mails';
import * as fromApi from 'src/api/mails';
import * as fromSelectors from 'src/selectors/mails';

export default function* watcher() {
  yield takeEvery(fromActions.mailsActionType.FETCH_MAILS, fetchMailsSaga);
  yield takeEvery(fromActions.mailsActionType.GET_MAILS_REQUEST, getMailsRequestSaga);
  yield takeEvery(fromActions.mailsActionType.DEL_MAIL_REQUEST, delMailRequestSaga);
  yield takeEvery(fromActions.mailsActionType.ADD_MAIL_REQUEST, addMailRequestSaga);
  yield takeEvery(fromActions.mailsActionType.EDIT_MAIL_REQUEST, editMailRequestSaga);
}

export function* fetchMailsSaga() {
  const mails = yield select(fromSelectors.getMails);
  if (!mails.length) {
    yield put(fromActions.getMailsRequest());
  } else yield put(fromActions.setMails(mails));
}

export function* getMailsRequestSaga() {
  const mails = yield call(fromApi.getMailsRequest);
  yield put(fromActions.setMails(mails));
}

export function* delMailRequestSaga(action: fromActions.DelMailRequest) {
  const { id } = action.payload;
  yield call(fromApi.deleteMailRequest, id);
  yield put(fromActions.delMail(id));
}

export function* addMailRequestSaga(action: fromActions.AddMailRequest) {
  const mail = yield call(fromApi.addMailRequest, action.payload.mail);
  yield put(fromActions.addMail(mail));
}

export function* editMailRequestSaga(action: fromActions.EditMailRequest) {
  const { id, mail } = action.payload;
  yield call(fromApi.editMailRequest, id, mail);
  yield put(fromActions.setMail(id, mail));
}
