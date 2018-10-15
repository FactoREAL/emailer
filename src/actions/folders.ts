import { foldersActionType } from 'src/const';
import { IFolder } from 'src/types';

export function setFolders(folders: IFolder[]) {
  return {
    type: foldersActionType.SET_FOLDERS,
    payload: folders,
  };
}
export function addFolder(folder: IFolder) {
  return {
    type: foldersActionType.ADD_FOLDER,
    payload: folder,
  };
}

export function deleteFolder(id: number) {
  return {
    type: foldersActionType.DEL_FOLDER,
    payload: {
      id,
    },
  };
}

export function toggleEdit(id: number) {
  return {
    type: foldersActionType.TOGGLE_EDIT,
    payload: {
      id,
    },
  };
}

export function setFolder(id: number, folder: IFolder) {
  return {
    type: foldersActionType.SET_FOLDER,
    payload: {
      id,
      folder,
    },
  };
}
