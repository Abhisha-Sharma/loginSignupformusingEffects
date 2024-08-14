import { User } from "../../model/signup.model"

export interface SignUpState {
    user:User|null;
}
export const initialState:SignUpState = {
    user:null
}


    