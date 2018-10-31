import request from 'src/utils/request';

export const loginRequest = (email: string, password: string) => {
  const body = {
    email,
    password,
  };
  return request
    .post('/login', body)
    .then((res: any) => {
      return res.data.token;
    });
};

export function registration(authData: object) {
  const body = { ...authData };
  request
    .post('/register', body)
    .then((res: any) => {
      console.log('успешная регистрация', res);
    })
    .catch(err => console.error(err));
}

export function confirmRequest(code: string) {
  request
    .post(`/register/confirm/${code}`)
    .then((res: any) => {
      console.log('успешное подтверждение', res);
    })
    .catch(err => console.error(err));
}
