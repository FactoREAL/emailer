import { foldersActionType } from 'src/const';
import { IAction, IFolder } from 'src/types';

function folder(state: IFolder, action: IAction<any>) {
  switch (action.type) {
    case foldersActionType.TOGGLE_EDIT:
      return (action.payload.id === state.id) ? { ...state, edit: !state.edit } : state;
    case foldersActionType.SET_FOLDER:
      return (action.payload.id === state.id) ? { ...action.payload.folder } : state;
    default:
      return state;
  }
}

export function folders(state: IFolder[] = [], action: IAction<any>) {
  switch (action.type) {
    case foldersActionType.ADD_FOLDER:
      return [...state, { ...action.payload }];
    case foldersActionType.SET_FOLDERS:
      return action.payload;
    case foldersActionType.DEL_FOLDER:
      return state.filter(s => s.id !== action.payload.id!);
    case foldersActionType.TOGGLE_EDIT:
      return state.map(s => folder(s, action));
    case foldersActionType.SET_FOLDER:
      return state.map(s => folder(s, action));
    default:
      return state;
  }
}
