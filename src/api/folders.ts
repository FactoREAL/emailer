import axios from 'axios';
import { addFolder, deleteFolder, setFolder, setFolders } from 'src/actions/folders';
import { Dispatch } from 'redux';
import { IFolder } from 'src/types';

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
        dispatch(setFolders(folders));
        callback();
      })
      .catch(err => {
        console.error(err);
      });
    // const folders = [
    //   { id: 1, name: 'folder 1', edit: false },
    //   { id: 2, name: 'folder 2', edit: false },
    //   { id: 3, name: 'folder 3', edit: false },
    // ];
    // dispatch(setFolders(folders));
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
      .then(res => {
        dispatch(deleteFolder(id));
      })
      .catch(err => {
        console.error(err);
      });
    // dispatch(deleteFolder(id));
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
        dispatch(addFolder(folder));
      })
      .catch(err => {
        console.error(err);
      });
    // const folder = { name, id: 5, edit: false };
    // dispatch(addFolder(folder));
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
      .then(res => {
        const folder = { id, name, edit: false };
        dispatch(setFolder(id, folder));
      })
      .catch(err => {
        console.error(err);
      });
    // const folder = { id, name, edit: false };
    // dispatch(setFolder(id, folder));
  };
}
