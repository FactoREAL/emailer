import { IMail } from 'src/types';
import { mailsActionType } from 'src/const';

export function setMails(mails: IMail[]) {
  return {
    type: mailsActionType.SET_MAILS,
    payload:  mails,
  };
}

export function addMail(mail: IMail) {
  return {
    type: mailsActionType.ADD_MAIL,
    payload: mail,
  };
}

export function delMail(id: number) {
  return {
    type: mailsActionType.DEL_MAIL,
    payload: {
      id,
    },
  };
}

export function toggleEdit(id: number) {
  return {
    type: mailsActionType.TOGGLE_EDIT,
    payload: {
      id,
    },
  };
}

export function setMail(id: number, mail: IMail) {
  return {
    type: mailsActionType.SET_MAIL,
    payload: {
      id,
      mail,
    },
  };
}
