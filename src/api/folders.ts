import request from 'src/utils/request';

import { IFolder } from 'src/reducers/folders';

export function getFoldersRequest() {
  return request
    .get('/folders')
    .then(res => {
      const folders: IFolder[] = [];
      res.data.folders.map((f: any) => {
        folders.push({ id: f.id, name: f.name, edit: false });
      });
      return folders;
    })
    .catch(err => {
      console.error(err);
    });
}

export function deleteFolderRequest(id: number) {
  const option = {
    data: { ids: [id] },
  };
  return request
    .delete('/folders', option);
}

export function addFolderRequest(name: string) {
  const body   = {
    name,
    description: 'NULL',
    parent_id: 'NULL',
  };
  return request
    .post('https://dev.emailer-electron-laravel.cronix.life/api/v1/folders', body)
    .then(res => {
      const { data } = res;
      const folder   = { id: data.id, name: data.name, edit: false };
      return folder;
    })
    .catch(err => {
      console.error(err);
    });
}

export function editFolderRequest(id: number, name: string) {
  const body   = {
    name,
  };
  return request
    .put(`https://dev.emailer-electron-laravel.cronix.life/api/v1/folders/${id}`, body)
    .then(() => {
      const folder = { id, name, edit: false };
      return folder;
    })
    .catch(err => {
      console.error(err);
    });
}
