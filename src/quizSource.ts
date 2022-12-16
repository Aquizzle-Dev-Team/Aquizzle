import { useDispatch } from "react-redux";
import {BASE_URL, API_KEY} from "./apiConfig";
import { addPromiseState } from "./features/promiseStateSlice";


function callAPI(params: any): Promise<any> {
    params = new URLSearchParams(params);
    return fetch(BASE_URL+params, {
    "method": "GET",
    "headers": {
        'X-Api-Key': API_KEY,
    }}).then((response: any) => {
        if (!response.ok)
            throw new Error(`API problem ${response.status}`);
        return response.json();
    });
}

async function getQuestions(params = {}): Promise<any> {
    return callAPI(params);
}

export {getQuestions};
