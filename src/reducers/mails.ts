import { IAction, IMail } from 'src/types';
import { mailsActionType } from 'src/const';

function mail(state: IMail, action: IAction<any>) {
  switch (action.type) {
    case mailsActionType.TOGGLE_EDIT:
      return (state.id === action.payload.id) ? { ...state, edit: !state.edit } : state;
    case mailsActionType.SET_MAIL:
      return (state.id === action.payload.id) ? { ...action.payload.mail } : state;
    default:
      return state;
  }
}

export function mails(state: IMail[] = [], action: IAction<any>) {
  switch (action.type) {
    case mailsActionType.SET_MAILS:
      return action.payload;
    case mailsActionType.ADD_MAIL:
      return [...state, { ...action.payload }];
    case mailsActionType.DEL_MAIL:
      return state.filter(s => s.id !== action.payload.id);
    case mailsActionType.TOGGLE_EDIT:
      return state.map(s => mail(s, action));
    case mailsActionType.SET_MAIL:
      return state.map(s => mail(s, action));
    default:
      return state;
  }
}