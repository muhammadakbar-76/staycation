import axios from "../../configs/axios";
import { FETCH_PAGE } from "../types";

export const fetchPage = (url, page) => (dispatch) => {
    return axios.get(url).then( res => {
        dispatch({
            type: FETCH_PAGE,
            payload: {
                [page] : res.data
            }
        })
    })
}