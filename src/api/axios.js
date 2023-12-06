import Axios from 'axios';


const BASE_URL = "https://localhost:7003";
// const BASE_URL = "https://app-kerryco-web-api-centralus-dev-001.azurewebsites.net/";
const EXAMPLE_URL = "https://localhost:7079";


export const Api = Axios.create({
    baseURL: BASE_URL,
});

export const axiosPrivate =  Axios.create({
    baseURL: EXAMPLE_URL
});
