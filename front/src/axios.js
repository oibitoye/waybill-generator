// import axios from 'axios';

// // Axios global configuration
// // axios.defaults.baseURL = 'http://localhost:5700/api'; // Update with your API base URL
// axios.defaults.headers.common['Authorization'] = ''; // Add authentication token if needed
// axios.defaults.headers.post['Content-Type'] = 'application/json';
// axios.defaults.withCredentials = false;

// export default axios;

import axios from 'axios'
import { getCSRFTOKEN, getAuthToken, removeAuthData, setAuthToken, setCSRFTOKEN } from './utils/helpers'


const options = {
    // baseURL: 'http://52.177.201.73:5700/api',
    headers: {
        Accept: 'application/json,text/plain,*/*',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'XSRF-TOKEN': `${getCSRFTOKEN()}`
    },
}

const request = axios.create(options)

// const Csrf = async () => {
//     try {
//         const response = await axios.get('https://172.20.10.4:3600/api/auth/local')
//         // handle response data here
//         setCSRFTOKEN(response.headers['x-csrf-token'])
//         // console.log(getCSRFTOKEN())
//     } catch (error) {
//         if (error.response) {
//             // Request made and server responded
//             // console.log(error.response.data);
//             // console.log(error.response.status);
//             // console.log(error.response.headers);
//         } else if (error.request) {
//             // The request was made but no response was received
//             console.log(error.request);
//         } else {
//             // Something happened in setting up the request that triggered an Error
//             console.log('Error', error.message);
//         }
//         console.log(error.config);
//     }
// }

request.interceptors.request.use(
    (config) => {
        // Csrf();
        const JWT_TOKEN = getAuthToken()
        if (JWT_TOKEN) {
            config.headers['x-auth-token'] = JWT_TOKEN;
        }
        return config
    },
    (error) => {
        console.log('in axios', error)
        return Promise.reject(error)
    }
)

request.interceptors.response.use(
    (response) => {
        // const token = response.header('x-auth-token');
        // if (token && !getAuthToken()) {
        //     setAuthToken(token)
        //     // localStorage.setItem('auth_token', token);
        // }
        return response;
    },
    (error) => {
        // const { logout } = useAuth()
        // console.log('in axios', error);
        // if (error.response.status === 401) {
        //     // logout()
        //     console.log(error.response)
        // }
        return Promise.reject(error);
    }
);

export default request;
