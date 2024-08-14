import { createReducer, on } from "@ngrx/store";
import { initialState } from "./signup.state";
import { signupStart, signupSuccess } from "./signup.actions";

export const signupReducer = createReducer(initialState,
    on(signupStart,(state,action)=>{
        return{
            ...state,
            user: action.user,

        }
    }),
    on(signupSuccess, (state, action) => {
        return {
          ...state,
        };
      }),
    
)