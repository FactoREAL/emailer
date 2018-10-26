import { tokenActionType } from '../const';

export function setToken(token: string) {
  return {
    type: tokenActionType.SET_TOKEN,
    payload: token,
  };
}
export type setToken = ReturnType<typeof setToken>;

export type TokenActions = setToken;
