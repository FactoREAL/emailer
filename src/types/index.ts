export interface IRootState {
  token: string;
  folders: IFolder[];
  mails: IMail[];
}

export interface IFolder {
  id: number;
  name: string;
  edit: boolean;
}

export interface IMail {
  id: number;
  title: string;
  body: string;
  folder_id: number;
  edit: boolean;
}
