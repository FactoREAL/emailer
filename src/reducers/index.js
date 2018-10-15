import { combineReducers } from 'redux';
import { token } from './token';
import { folders } from './folders';
import { mails } from './mails'

export const allReducers = combineReducers({
  token,
  folders,
  mails,
});