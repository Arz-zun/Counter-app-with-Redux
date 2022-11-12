import { LOGIN,LOGOUT} from "../constant"
export const Login=(login)=>{
    return{
        type:LOGIN,
        payload:login
    }
}
export const Logout=(logout)=>{
    return{
        type:LOGOUT,
        payload:logout
    }
}