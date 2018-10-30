import { MailsActions, mailsActionType } from 'src/actions/mails';

export type IMail = {
  id: number,
  title: string,
  body: string,
  folder_id: number,
  edit: boolean,
};

export type MailsState = {
  loading: boolean,
  data: IMail[],
};

function mail(state: IMail, action: MailsActions) {
  switch (action.type) {
    case mailsActionType.TOGGLE_EDIT:
      return (state.id === action.payload.id) ? { ...state, edit: !state.edit } : state;
    case mailsActionType.SET_MAIL:
      return (state.id === action.payload.id) ? { ...action.payload.mail } : state;
    default:
      return state;
  }
}

const initMailsState = {
  loading: false,
  data: [],
};

export function mails(state: MailsState = initMailsState, action: MailsActions) {
  let newMails;
  switch (action.type) {
    case mailsActionType.FETCH_MAILS:
    case mailsActionType.GET_MAILS_REQUEST:
      return { ...state, loading: true };
    case mailsActionType.SET_MAILS:
      return { ...state, data: action.payload, loading: false };
    case mailsActionType.ADD_MAIL:
      return { ...state, data: [...state.data, { ...action.payload }] };
    case mailsActionType.DEL_MAIL:
      newMails = state.data.filter(s => s.id !== action.payload.id);
      return { ...state, data: newMails };
    case mailsActionType.TOGGLE_EDIT:
    case mailsActionType.SET_MAIL:
      newMails = state.data.map(s => mail(s, action));
      return { ...state, data: newMails };
    default:
      return state;
  }
}
