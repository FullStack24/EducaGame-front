import { api } from './api-configuration';

export default async function updateUser(name: string, email: string) {
  return api.patch(`/users`, {
    name,
    email,
  });
}
