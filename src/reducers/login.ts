import { TokenActions, loginActionType } from 'src/actions/login';

export function login(state: string = '', action: TokenActions) {
  switch (action.type) {
    case loginActionType.SET_TOKEN:
      return action.payload.token;
    default:
      return state;
  }
}
