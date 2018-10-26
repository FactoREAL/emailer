import { combineReducers } from 'redux';
import { token } from './token';
import { IFolder, folders } from './folders';
import { IMail, mails } from './mails';

export interface IRootState {
  token: string;
  folders: IFolder[];
  mails: IMail[];
}

export const rootReducer = combineReducers<IRootState>({
  token,
  folders,
  mails,
});
