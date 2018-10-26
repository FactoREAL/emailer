import { TokenActions, tokenActionType } from 'src/actions/token';

export function token(state: string = '', action: TokenActions) {
  switch (action.type) {
    case tokenActionType.SET_TOKEN:
      return action.payload.token;
    default:
      return state;
  }
}
