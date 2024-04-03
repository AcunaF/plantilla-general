// @ts-ignore
import types from "../../../Auth/types/types";

const initialState = {
    logged : false,
}
export const authReducer = (state ={}, action: { type: any; payload: any; }) => {

    switch (action.type) {
        case types.login:
            return {
                ...state,
                logged: true,
                user: action.payload
            }

        case types.logout:
            return {
                ...state,
                logged: false
            }
        default:
            return state
    }
}
