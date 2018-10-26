import { IMail } from 'src/types';
import { mailsActionType } from 'src/const';

export function setMails(mails: IMail[]) {
  return {
    type: mailsActionType.SET_MAILS,
    payload:  mails,
  };
}
export type setMails = ReturnType<typeof setMails>;

export function addMail(mail: IMail) {
  return {
    type: mailsActionType.ADD_MAIL,
    payload: mail,
  };
}
export type addMail = ReturnType<typeof addMail>;

export function delMail(id: number) {
  return {
    type: mailsActionType.DEL_MAIL,
    payload: {
      id,
    },
  };
}
export type delMail = ReturnType<typeof delMail>;

export function toggleEdit(id: number) {
  return {
    type: mailsActionType.TOGGLE_EDIT,
    payload: {
      id,
    },
  };
}
export type toggleEdit = ReturnType<typeof toggleEdit>;

export function setMail(id: number, mail: IMail) {
  return {
    type: mailsActionType.SET_MAIL,
    payload: {
      id,
      mail,
    },
  };
}
export type setMail = ReturnType<typeof setMail>;

export type MailActions = setMails & addMail & delMail & toggleEdit & setMail;
