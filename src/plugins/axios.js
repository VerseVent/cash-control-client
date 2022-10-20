import axios from "axios";

const requestHandler = request => {
    // if (localStorage.getItem("access_token")) {
        try {
            request.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`;
        } catch (e) {
            console.log(e);
        }
        return request;
    // }
};

const options = {};
options.baseURL = import.meta.env.VITE_BACK_END_BASE_URL;
const instance = axios.create(options);
instance.interceptors.request.use(request => requestHandler(request))

export default instance;
