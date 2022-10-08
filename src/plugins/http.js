import axios from "axios";

let API_ENDPOINT = "https://reqres.in/api/";   
/// beta
let config = {
  baseURL: `${API_ENDPOINT}`,
};

const httpClient = axios.create(config);

export default httpClient;

