import { apiNoAuth } from './api-configuration';

export default async function login(email: string, password: string) {
  return { name: 'John Admin', email: 'teste@gmail.com', role: 'admin' };
  //   return { name: 'John Student', email: 'teste@gmail.com', role: 'user' };
  // const {data} = await apiNoAuth.post('/login', {email, password})
  // localStorage.setItem('token', data.token)
  // return data
}
