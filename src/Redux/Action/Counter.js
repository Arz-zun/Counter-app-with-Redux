import { INCREAMENT,DECREAMENT } from "../constant"
export const increament = (newNum) => {
    return {
        type: INCREAMENT,
        payload:newNum
    }
}
export const decreament = () => {
    return {
        type: DECREAMENT
    }
}