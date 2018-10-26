import { IMail } from 'src/reducers/mails';

export enum mailsActionType {
  SET_MAILS = 'SET_MAILS',
  ADD_MAIL = 'ADD_MAIL',
  DEL_MAIL = 'DEL_MAIL',
  SET_MAIL = 'SET_MAIL',
  TOGGLE_EDIT = 'TOGGLE_MAIL_EDIT',
}

export const setMails = (mails: IMail[]) =>
  ({ type: mailsActionType.SET_MAILS, payload:  mails });
type SetMails = ReturnType<typeof setMails>;

export const addMail = (mail: IMail) =>
  ({ type: mailsActionType.ADD_MAIL, payload: mail });
type AddMail = ReturnType<typeof addMail>;

export const delMail = (id: number) =>
  ({ type: mailsActionType.DEL_MAIL, payload: { id } });
type DelMail = ReturnType<typeof delMail>;

export const toggleEdit = (id: number) =>
  ({ type: mailsActionType.TOGGLE_EDIT, payload: { id } });
type ToggleEdit = ReturnType<typeof toggleEdit>;

export const setMail = (id: number, mail: IMail) =>
  ({ type: mailsActionType.SET_MAIL, payload: { id, mail } });
type SetMail = ReturnType<typeof setMail>;

export type MailsActions = SetMails & AddMail & DelMail & ToggleEdit & SetMail;
