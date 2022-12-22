import axios from "axios";
const API_PORT = import.meta.env.VITE_API_PORT;

const api = axios.create({
    baseURL: `http://localhost:3001`,
});

export default api;
