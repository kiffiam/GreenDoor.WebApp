import axios from "axios";
import { Token } from "typescript";

/*export function setAxiosInterceptors() {
    axios.interceptors.response.use(function (response) {
        return response;
    }, function (error) {
        if (error.response.status == 403)
            window.location.pathname = "/";
        if (error.response.status == 401)
            redirectToLoginPage(window.location.pathname);
        return Promise.reject(error);
    });
}*/

const setAuthHeaderToken = (token: string) => {
    if (token !== "") {
        axios.defaults.headers.common['Authorization'] = "Bearer " + token;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
};

export default setAuthHeaderToken;