import axios from "axios";
import { Token } from "typescript";

const setAuthHeaderToken = (token: string) => {
    if (token !== "") {
        axios.defaults.headers.common['Authorization'] = "Bearer " + token;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
};

export default setAuthHeaderToken;