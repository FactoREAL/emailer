import axios from 'axios';
import { Dispatch } from 'redux';

export function registration(authData: object) {
  return (dispatch: Dispatch) => {
    const body = { ...authData };
    const option = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };
    axios.post('https://dev.emailer-electron-laravel.cronix.life/api/v1/register', body, option)
      .then((res:any) => {
        console.log('успешная регистрация', res);
      })
      .catch(err => console.error(err));
  };
}

export function confirmRequest(code: string) {
  return (dispatch: Dispatch) => {
    const option = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };
    const url = `https://dev.emailer-electron-laravel.cronix.life/api/v1/register/confirm/${code}`;
    axios.post(url, option)
      .then((res:any) => {
        console.log('успешное подтверждение', res);
      })
      .catch(err => console.error(err));
  };
}
