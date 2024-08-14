import { LoginUser } from "../model/login.model";

export interface LoginState{
    loginUser:LoginUser|null;
    error:string|null,
    loading:boolean
}
export const initialState:LoginState = {
    loginUser: null,
    error: null,
    loading: false
}
