import { IFolder } from 'src/reducers/folders';

export enum foldersActionType {
  FETCH_FOLDERS       = 'FETCH_FOLDERS',
  GET_FOLDERS_REQUEST = 'GET_FOLDERS_REQUEST',
  DEL_FOLDER_REQUEST  = 'DEL_FOLDER_REQUEST',
  ADD_FOLDER_REQUEST  = 'ADD_FOLDER_REQUEST',
  EDIT_FOLDER_REQUEST = 'EDIT_FOLDER_REQUEST',
  SET_FOLDERS         = 'SET_FOLDERS',
  ADD_FOLDER          = 'ADD_FOLDER',
  DEL_FOLDER          = 'DEL_FOLDER',
  SET_FOLDER          = 'SET_FOLDER',
  TOGGLE_EDIT         = 'TOGGLE_FOLDER_EDIT',
}

export const editFolderRequest = (id: number, name: string) =>
  ({ type: foldersActionType.EDIT_FOLDER_REQUEST, payload: { id, name } });
export type EditFolderRequest = ReturnType<typeof editFolderRequest>;

export const addFolderRequest = (name: string) =>
  ({ type: foldersActionType.ADD_FOLDER_REQUEST, payload: { name } });
export type AddFolderRequest = ReturnType<typeof addFolderRequest>;

export const delFolderRequest = (id: number) =>
  ({ type: foldersActionType.DEL_FOLDER_REQUEST, payload: { id } });
export type DelFolderRequest = ReturnType<typeof delFolderRequest>;

export const fetchFolders = () =>
  ({ type: foldersActionType.FETCH_FOLDERS });
export type FetchFolders = ReturnType<typeof fetchFolders>;

export const getFoldersRequest = () =>
  ({ type: foldersActionType.GET_FOLDERS_REQUEST });
export type GetFoldersRequest = ReturnType<typeof getFoldersRequest>;

export const setFolders = (folders: IFolder[]) =>
  ({ type: foldersActionType.SET_FOLDERS, payload: folders });
export type SetFolders = ReturnType<typeof setFolders>;

export const addFolder = (folder: IFolder) =>
  ({ type: foldersActionType.ADD_FOLDER, payload: folder });
export type AddFolder = ReturnType<typeof addFolder>;

export const deleteFolder = (id: number) =>
  ({ type: foldersActionType.DEL_FOLDER, payload: { id } });
export type DeleteFolder = ReturnType<typeof deleteFolder>;

export const toggleEdit = (id: number) =>
  ({ type: foldersActionType.TOGGLE_EDIT, payload: { id } });
export type ToggleEdit = ReturnType<typeof toggleEdit>;

export const setFolder = (id: number, folder: IFolder) =>
  ({ type: foldersActionType.SET_FOLDER, payload: { id, folder } });
export type SetFolder = ReturnType<typeof setFolder>;

export type FolderActions = FetchFolders
  & SetFolders
  & AddFolder
  & DeleteFolder
  & ToggleEdit
  & SetFolder
  & GetFoldersRequest
  & DelFolderRequest
  & AddFolderRequest
  & EditFolderRequest;
