import { IRootState } from 'src/reducers/rootReducer';

export const getFolders = (state:IRootState) => state.folders.data;
