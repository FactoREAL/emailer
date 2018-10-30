import { IRootState } from 'src/reducers/rootReducer';

export const getMails = (state: IRootState) => state.mails.data;
