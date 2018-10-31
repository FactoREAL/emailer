export enum loginActionType {
  LOGIN_REQUEST = 'LOGIN_REQUEST',
  SET_TOKEN = 'SET_TOKEN',
}

export const loginRequest = (email: string, password: string, next?:string) =>
  ({ type: loginActionType.LOGIN_REQUEST, payload: { email, password, next } });
export type LoginRequest = ReturnType<typeof loginRequest>;

export const setToken = (token: string) =>
  ({ type: loginActionType.SET_TOKEN, payload: { token } });
export type SetToken = ReturnType<typeof setToken>;

export type TokenActions = SetToken
  & LoginRequest;
