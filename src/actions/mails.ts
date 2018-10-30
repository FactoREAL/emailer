import { IMail } from 'src/reducers/mails';

export enum mailsActionType {
  FETCH_MAILS       = 'FETCH_MAILS',
  GET_MAILS_REQUEST = 'GET_MAILS_REQUEST',
  ADD_MAIL_REQUEST  = 'ADD_MAIL_REQUEST',
  DEL_MAIL_REQUEST  = 'DEL_MAIL_REQUEST',
  EDIT_MAIL_REQUEST = 'EDIT_MAIL_REQUEST',
  SET_MAILS         = 'SET_MAILS',
  ADD_MAIL          = 'ADD_MAIL',
  DEL_MAIL          = 'DEL_MAIL',
  SET_MAIL          = 'SET_MAIL',
  TOGGLE_EDIT       = 'TOGGLE_MAIL_EDIT',
}

export const addMailRequest = (mail: IMail) =>
  ({ type: mailsActionType.ADD_MAIL_REQUEST, payload: { mail } });
export type AddMailRequest = ReturnType<typeof addMailRequest>;

export const delMailRequest = (id: number) =>
  ({ type: mailsActionType.DEL_MAIL_REQUEST, payload: { id } });
export type DelMailRequest = ReturnType<typeof delMailRequest>;

export const editMailRequest = (id: number, mail: IMail) =>
  ({ type: mailsActionType.EDIT_MAIL_REQUEST, payload: { id, mail } });
export type EditMailRequest = ReturnType<typeof editMailRequest>;

export const fetchMails = () =>
  ({ type: mailsActionType.FETCH_MAILS });
export type FetchMails = ReturnType<typeof fetchMails>;

export const getMailsRequest = () =>
  ({ type: mailsActionType.GET_MAILS_REQUEST });
export type GetMailsRequest = ReturnType<typeof getMailsRequest>;

export const setMails = (mails: IMail[]) =>
  ({ type: mailsActionType.SET_MAILS, payload: mails });
export type SetMails = ReturnType<typeof setMails>;

export const addMail = (mail: IMail) =>
  ({ type: mailsActionType.ADD_MAIL, payload: mail });
export type AddMail = ReturnType<typeof addMail>;

export const delMail = (id: number) =>
  ({ type: mailsActionType.DEL_MAIL, payload: { id } });
export type DelMail = ReturnType<typeof delMail>;

export const toggleEdit = (id: number) =>
  ({ type: mailsActionType.TOGGLE_EDIT, payload: { id } });
export type ToggleEdit = ReturnType<typeof toggleEdit>;

export const setMail = (id: number, mail: IMail) =>
  ({ type: mailsActionType.SET_MAIL, payload: { id, mail } });
export type SetMail = ReturnType<typeof setMail>;

export type MailsActions = FetchMails
  & SetMails
  & AddMail
  & DelMail
  & ToggleEdit
  & SetMail
  & GetMailsRequest
  & AddMailRequest
  & DelMailRequest
  & EditMailRequest;
