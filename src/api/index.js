import axios from "axios";

const api = axios.create({
        baseURL: 'https://text-translator2.p.rapidapi.com',
        headers: {
            'x-rapidapi-key': '51bc2b2297msh97c7df6ce322455p1efd31jsn900858049cbf',
            'x-rapidapi-host': 'text-translator2.p.rapidapi.com'
        }

})

export default api;