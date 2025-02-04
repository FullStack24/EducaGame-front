import axios from 'axios'

const baseURL = 'http://localhost:3001'

export const api = axios.create({
    baseURL: baseURL,
    headers: {
        'Authorization': `Bearer ${getToken()}`
    }
})

export const apiNoAuth = axios.create({
    baseURL: baseURL
})

function getToken() {
    try {
        return localStorage.getItem('token') ?? ''
    } catch (error) {
    return ''        
    }
}
