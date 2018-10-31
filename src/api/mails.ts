import request from 'src/utils/request';
import { IMail } from 'src/reducers/mails';

export function getMailsRequest() {
  return request
    .get('/emails')
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
    data: { id: [id] },
  };
  return request
    .delete('https://dev.emailer-electron-laravel.cronix.life/api/v1/emails', option);
}

export function addMailRequest(mail: IMail) {
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
  return request
    .post('/emails', body)
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
  const body   = {
    title: mail.title,
    body: mail.body,
  };
  return request
    .put(`/emails/${id}`, body);
}
