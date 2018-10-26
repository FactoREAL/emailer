import { IFolder } from 'src/reducers/folders';

export enum foldersActionType {
  SET_FOLDERS = 'SET_FOLDERS',
  ADD_FOLDER  = 'ADD_FOLDER',
  DEL_FOLDER  = 'DEL_FOLDER',
  SET_FOLDER = 'SET_FOLDER',
  TOGGLE_EDIT = 'TOGGLE_FOLDER_EDIT',
}

export const setFolders = (folders: IFolder[]) =>
  ({ type: foldersActionType.SET_FOLDERS, payload: folders });
type SetFolders = ReturnType<typeof setFolders>;

export const addFolder = (folder: IFolder) =>
  ({ type: foldersActionType.ADD_FOLDER, payload: folder });
type AddFolder = ReturnType<typeof addFolder>;

export const deleteFolder = (id: number) =>
  ({ type: foldersActionType.DEL_FOLDER, payload: { id } });
type DeleteFolder = ReturnType<typeof deleteFolder>;

export const toggleEdit = (id: number) =>
  ({ type: foldersActionType.TOGGLE_EDIT, payload: { id } });
type ToggleEdit = ReturnType<typeof toggleEdit>;

export const setFolder = (id: number, folder: IFolder) =>
  ({ type: foldersActionType.SET_FOLDER, payload: { id, folder } });
type SetFolder = ReturnType<typeof setFolder>;

export type FolderActions = SetFolders & AddFolder & DeleteFolder & ToggleEdit & SetFolder;
