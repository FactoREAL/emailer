import { tokenActionType } from '../const';

export function setToken(token: string) {
  return {
    type: tokenActionType.SET_TOKEN,
    payload: token,
  };
}