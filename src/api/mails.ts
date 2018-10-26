import { Dispatch } from 'redux';
import { addMail, delMail, setMail, setMails } from 'src/actions/mails';
import axios from 'axios';
import { IMail } from 'src/reducers/mails';

export function loadMails(token: string, callback: any) {
  return (dispatch: Dispatch) => {
    const option = {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };
    axios.get('https://dev.emailer-electron-laravel.cronix.life/api/v1/emails', option)
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
        dispatch(setMails(mails));
        callback();
      })
      .catch(err => {
        console.error(err);
      });
    // const mails = [
    //   { id: 1, title: 'title 1', body: 'body 1', folder_id: 1, edit: false },
    //   { id: 2, title: 'title 2', body: 'body 2', folder_id: 2, edit: false },
    //   { id: 3, title: 'title 22', body: 'body 22', folder_id: 2, edit: false },
    //   { id: 4, title: 'title 3', body: 'body 3', folder_id: 3, edit: false },
    // ];
    // dispatch(SetMails(mails));
  };
}

export function deleteMailRequest(id: number, token: string) {
  return (dispatch: Dispatch) => {
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
    axios.delete('https://dev.emailer-electron-laravel.cronix.life/api/v1/emails', option)
      .then(res => {
        dispatch(delMail(id));
      })
      .catch(err => {
        console.error(err);
      });
  };
}

export function addMailRequest(mail: IMail, token: string) {
  return (dispatch: Dispatch) => {
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
    const url = 'https://dev.emailer-electron-laravel.cronix.life/api/v1/emails';
    axios.post(url, JSON.stringify(body), option)
      .then(res => {
        console.log('addMailRequest', res);
        let { data } = res;
        data = data[0];
        const newMail = {
          id: data.id,
          title: data.title,
          body: data.body,
          folder_id: data.folder_id,
          edit: false,
        };
        dispatch(addMail(newMail));
      })
      .catch(err => {
        console.error(err);
      });
  };
}

export function editMailRequest(id: number, mail: IMail, token: string) {
  return (dispatch: Dispatch) => {
    const option = {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };
    const body = {
      title: mail.title,
      body: mail.body,
    };
    axios.put(`https://dev.emailer-electron-laravel.cronix.life/api/v1/emails/${id}`, body, option)
      .then(res => {
        dispatch(setMail(id, mail));
      })
      .catch(err => {
        console.error(err);
      });
    // dispatch(SetMail(id, mail));
  };
}
