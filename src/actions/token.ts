export enum tokenActionType {
  SET_TOKEN = 'SET_TOKEN',
}

export const setToken = (token: string) =>
  ({ type: tokenActionType.SET_TOKEN, payload: { token } });
type SetToken = ReturnType<typeof setToken>;

export type TokenActions = SetToken;
