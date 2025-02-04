import { apiNoAuth } from "./api-configuration";

export default async function register(...args: [name: string, email: string, password: string, role: string]) {  
    return await apiNoAuth.post('/register', {...args})
}

