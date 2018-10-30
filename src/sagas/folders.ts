import { call, put, select, takeEvery } from 'redux-saga/effects';
import * as fromActions from 'src/actions/folders';
import * as fromApi from 'src/api/folders';
import * as fromSelectors from 'src/selectors/folders';

export default function* watcher() {
  yield takeEvery(fromActions.foldersActionType.FETCH_FOLDERS, fetchFoldersSaga);
  yield takeEvery(fromActions.foldersActionType.GET_FOLDERS_REQUEST, getFoldersRequestSaga);
  yield takeEvery(fromActions.foldersActionType.DEL_FOLDER_REQUEST, deleteFolderRequestSaga);
  yield takeEvery(fromActions.foldersActionType.ADD_FOLDER_REQUEST, addFolderRequestSaga);
  yield takeEvery(fromActions.foldersActionType.EDIT_FOLDER_REQUEST, editFolderRequestSaga);
}

export function* fetchFoldersSaga() {
  const folders = yield select(fromSelectors.getFolders);
  if (!folders.length) {
    yield put(fromActions.getFoldersRequest());
  } else yield put(fromActions.setFolders(folders));
}

export function* getFoldersRequestSaga() {
  const folders     = yield call(fromApi.getFoldersRequest);
  yield put(fromActions.setFolders(folders));
}

export function* deleteFolderRequestSaga(action: fromActions.DeleteFolder) {
  yield call(fromApi.deleteFolderRequest, action.payload.id);
  yield put(fromActions.deleteFolder(action.payload.id));
}

export function* addFolderRequestSaga(action: fromActions.AddFolderRequest) {
  const folder = yield call(fromApi.addFolderRequest, action.payload.name);
  yield put(fromActions.addFolder(folder));
}

export function* editFolderRequestSaga(action: fromActions.EditFolderRequest) {
  const { id, name } = action.payload;
  const folder = yield call(fromApi.editFolderRequest, id, name);
  yield put(fromActions.setFolder(id, folder));
}
