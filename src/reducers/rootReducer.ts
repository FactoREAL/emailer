import { combineReducers } from 'redux';
import { token } from './token';
import { folders, FoldersState } from './folders';
import { mails, MailsState } from './mails';

export interface IRootState {
  token: string;
  folders: FoldersState;
  mails: MailsState;
}

export const rootReducer = combineReducers<IRootState>({
  token,
  folders,
  mails,
});
