export enum tokenActionType {
  SET_TOKEN = 'SET_TOKEN',
}

export enum foldersActionType {
  SET_FOLDERS = 'SET_FOLDERS',
  ADD_FOLDER  = 'ADD_FOLDER',
  DEL_FOLDER  = 'DEL_FOLDER',
  SET_FOLDER = 'SET_FOLDER',
  TOGGLE_EDIT = 'TOGGLE_FOLDER_EDIT',
}

export enum mailsActionType {
  SET_MAILS = 'SET_MAILS',
  ADD_MAIL = 'ADD_MAIL',
  DEL_MAIL = 'DEL_MAIL',
  SET_MAIL = 'SET_MAIL',
  TOGGLE_EDIT = 'TOGGLE_MAIL_EDIT',
}

export type IActionType = tokenActionType | foldersActionType | mailsActionType;
