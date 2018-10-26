import { Dispatch } from 'redux';
import axios from 'axios';

import * as fromActions from 'src/actions/folders';
import { IFolder } from 'src/reducers/folders';

export function loadFolders(token: string, callback: any) {
  return (dispatch: Dispatch) => {
    const option = {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };
    axios.get('https://dev.emailer-electron-laravel.cronix.life/api/v1/folders', option)
      .then(res => {
        const folders: IFolder[] = [];
        res.data.folders.map((f: any) => {
          folders.push({ id: f.id, name: f.name, edit: false });
        });
        dispatch(fromActions.setFolders(folders));
        callback();
      })
      .catch(err => {
        console.error(err);
      });
  };
}

export function deleteFolderRequest(id: number, token: string) {
  return (dispatch: Dispatch) => {
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
    axios.delete('https://dev.emailer-electron-laravel.cronix.life/api/v1/folders', option)
      .then(() => {
        dispatch(fromActions.deleteFolder(id));
      })
      .catch(err => {
        console.error(err);
      });
  };
}

export function addFolderRequest(name: string, token: string) {
  return (dispatch: Dispatch) => {
    const option = {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };
    const body = {
      name,
      description: 'NULL',
      parent_id: 'NULL',
    };
    axios.post('https://dev.emailer-electron-laravel.cronix.life/api/v1/folders', body, option)
      .then(res => {
        const { data } = res;
        const folder = { id: data.id, name: data.name, edit: false };
        dispatch(fromActions.addFolder(folder));
      })
      .catch(err => {
        console.error(err);
      });
  };
}

export function editFolderRequest(id: number, name: string, token: string) {
  return (dispatch: Dispatch) => {
    const option = {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };
    const body = {
      name,
    };
    axios.put(`https://dev.emailer-electron-laravel.cronix.life/api/v1/folders/${id}`, body, option)
      .then(() => {
        const folder = { id, name, edit: false };
        dispatch(fromActions.setFolder(id, folder));
      })
      .catch(err => {
        console.error(err);
      });
  };
}
