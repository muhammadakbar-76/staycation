/* eslint-disable import/no-anonymous-default-export */
import { CHECKOUT_BOOKING } from "../types.js";

const initialState = null;

export default function (state = initialState, action) {
    switch (action.type) {
        case CHECKOUT_BOOKING:
            return action.payload;
        default:
            return state;
    }
}