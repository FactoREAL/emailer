import { combineReducers } from 'redux';
import { Token, token } from './token';
import { Folder, folders } from './folders';
import { Mail, mails } from './mails';

export type RootReducer = {
  token: Token,
  folders: Folder[],
  mails: Mail,
};

export const rootReducer = combineReducers({
  token,
  folders,
  mails,
});
