import axios from "axios";
import { CHECKOUT_BOOKING } from "../types";

export const checkoutBooking = (payload) => (dispatch) => {
    dispatch({
        type: CHECKOUT_BOOKING,
        payload
    })
}

export const submitBooking = (payload) => () => {
   return axios.post("https://backend-staycation76.herokuapp.com/api/v1/member/booking-page", payload, {headers: {contentType: "multipart/form-data"}});
}