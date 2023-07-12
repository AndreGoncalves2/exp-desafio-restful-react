import axios from "axios";

export const api = axios.create({
    baseURL: 'https://movies-notes-rocket.onrender.com'
})