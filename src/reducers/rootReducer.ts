import { combineReducers } from 'redux';
import { login } from './login';
import { folders, FoldersState } from './folders';
import { mails, MailsState } from './mails';

export interface IRootState {
  token: string;
  folders: FoldersState;
  mails: MailsState;
}

export const rootReducer = combineReducers<IRootState>({
  mails,
  folders,
  token: login,
});
