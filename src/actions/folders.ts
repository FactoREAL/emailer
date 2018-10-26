import { foldersActionType } from 'src/const';
import { IFolder } from 'src/types';

export function setFolders(folders: IFolder[]) {
  return {
    type: foldersActionType.SET_FOLDERS,
    payload: folders,
  };
}
export type setFolders = ReturnType<typeof setFolders>;

export function addFolder(folder: IFolder) {
  return {
    type: foldersActionType.ADD_FOLDER,
    payload: folder,
  };
}
export type addFolder = ReturnType<typeof addFolder>;

export function deleteFolder(id: number) {
  return {
    type: foldersActionType.DEL_FOLDER,
    payload: {
      id,
    },
  };
}
export type deleteFolder = ReturnType<typeof deleteFolder>;

export function toggleEdit(id: number) {
  return {
    type: foldersActionType.TOGGLE_EDIT,
    payload: {
      id,
    },
  };
}
export type toggleEdit = ReturnType<typeof toggleEdit>;

export function setFolder(id: number, folder: IFolder) {
  return {
    type: foldersActionType.SET_FOLDER,
    payload: {
      id,
      folder,
    },
  };
}
export type setFolder = ReturnType<typeof setFolder>;

// export const folderActions = {
//   setFolders,
//   addFolder,
//   deleteFolder,
//   toggleEdit,
//   setFolder,
// };
export type FolderActions = setFolders & addFolder & deleteFolder & toggleEdit & setFolder;
