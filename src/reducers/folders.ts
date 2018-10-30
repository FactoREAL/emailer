import { FolderActions, foldersActionType } from 'src/actions/folders';

export type IFolder = {
  id: number,
  name: string,
  edit: boolean,
};

export interface FoldersState {
  loading: boolean;
  data: IFolder[];
}

function folder(state: IFolder, action: FolderActions) {
  switch (action.type) {
    case foldersActionType.TOGGLE_EDIT:
      return (action.payload.id === state.id) ? { ...state, edit: !state.edit } : state;
    case foldersActionType.SET_FOLDER:
      return (action.payload.id === state.id) ? { ...action.payload.folder } : state;
    default:
      return state;
  }
}

const initFoldersState = {
  loading: false,
  data: [],
};

export function folders(state: FoldersState = initFoldersState, action: FolderActions) {
  let newFolders;
  switch (action.type) {
    case foldersActionType.FETCH_FOLDERS:
    case foldersActionType.GET_FOLDERS_REQUEST:
      return { ...state, loading: true };
    case foldersActionType.ADD_FOLDER:
      return { ...state, data: [...state.data, { ...action.payload }] };
    case foldersActionType.SET_FOLDERS:
      return { ...state, data: action.payload, loading: false };
    case foldersActionType.DEL_FOLDER:
      newFolders = state.data.filter(s => s.id !== action.payload.id);
      return { ...state, data: newFolders };
    case foldersActionType.TOGGLE_EDIT:
    case foldersActionType.SET_FOLDER:
      newFolders = state.data.map(s => folder(s, action));
      return { ...state, data: newFolders };
    default:
      return state;
  }
}
