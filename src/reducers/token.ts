import { IAction } from '../types/index';
import { tokenActionType } from '../const/index';

export function token(state: string = '', action: IAction<string>) {
  switch (action.type) {
    case tokenActionType.SET_TOKEN:
      return action.payload;
    default:
      return state;
  }
}
