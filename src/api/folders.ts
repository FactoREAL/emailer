import axios from 'axios';

import { IFolder } from 'src/reducers/folders';

const token = localStorage.getItem('token') || '';

export function getFoldersRequest() {
  const option = {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  return axios
    .get('https://dev.emailer-electron-laravel.cronix.life/api/v1/folders', option)
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
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    data: {
      ids: [id],
    },
  };
  return axios
    .delete('https://dev.emailer-electron-laravel.cronix.life/api/v1/folders', option);
}

export function addFolderRequest(name: string) {
  const option = {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  const body   = {
    name,
    description: 'NULL',
    parent_id: 'NULL',
  };
  return axios
    .post('https://dev.emailer-electron-laravel.cronix.life/api/v1/folders', body, option)
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
  const option = {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  const body   = {
    name,
  };
  return axios
    .put(`https://dev.emailer-electron-laravel.cronix.life/api/v1/folders/${id}`, body, option)
    .then(() => {
      const folder = { id, name, edit: false };
      return folder;
    })
    .catch(err => {
      console.error(err);
    });
}
