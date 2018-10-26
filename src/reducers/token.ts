import { tokenActionType } from '../const/index';
import { TokenActions } from 'src/actions/token';

export type Token = string;

export function token(state: Token = '', action: TokenActions) {
  switch (action.type) {
    case tokenActionType.SET_TOKEN:
      return action.payload;
    default:
      return state;
  }
}
