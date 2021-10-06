import axios from "axios";
import { FETCH_PAGE } from "../types";

export const fetchPage = (url, page) => (dispatch) => {
    return axios.get(url,{
        crossDomain: true
    }).then( res => {
        dispatch({
            type: FETCH_PAGE,
            payload: {
                [page] : res.data
            }
        })
    })
}