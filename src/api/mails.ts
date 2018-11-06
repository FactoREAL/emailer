import axios from 'axios';
import { IMail } from 'src/reducers/mails';

const token = localStorage.getItem('token') || '';

export function getMailsRequest() {
  const option = {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  return axios.get('https://dev.emailer-electron-laravel.cronix.life/api/v1/emails', option)
    .then(res => {
      const mails: IMail[] = [];
      res.data.data.map((m: any) => {
        mails.push({
          id: m.id,
          title: m.title,
          body: m.body,
          folder_id: m.folder_id,
          edit: false,
        });
      });
      return mails;
    })
    .catch(err => {
      console.error(err);
    });
}

export function deleteMailRequest(id: number) {
  const option = {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    data: {
      id: [id],
    },
  };
  return axios
    .delete('https://dev.emailer-electron-laravel.cronix.life/api/v1/emails', option);
}

export function addMailRequest(mail: IMail) {
  const option = {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  const body   = {
    emails: [
      {
        title: mail.title,
        description: 'simple folder',
        body: mail.body,
        folder_id: String(mail.folder_id),
      },
    ],
  };
  const url    = 'https://dev.emailer-electron-laravel.cronix.life/api/v1/emails';
  return axios
    .post(url, JSON.stringify(body), option)
    .then(res => {
      let { data }  = res;
      data          = data[0];
      const newMail = {
        id: data.id,
        title: data.title,
        body: data.body,
        folder_id: data.folder_id,
        edit: false,
      };
      return newMail;
    })
    .catch(err => {
      console.error(err);
    });
}

export function editMailRequest(id: number, mail: IMail) {
  const option = {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  const body   = {
    title: mail.title,
    body: mail.body,
  };
  return axios
    .put(`https://dev.emailer-electron-laravel.cronix.life/api/v1/emails/${id}`, body, option);
}
