import { LOGIN, LOGOUT } from "../constant"

export const isLogin = (state = null, action) => {
    switch (action.type) {
        case LOGIN:
            return state===action.payload
        case LOGOUT:
            return state===action.payload
        default: return state

    }
}
