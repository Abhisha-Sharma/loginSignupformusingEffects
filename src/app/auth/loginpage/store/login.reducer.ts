import { createReducer, on } from "@ngrx/store";
import { initialState } from "./login.state";
import { loginfail, loginStart, loginSucess } from "./login.action";

export const loginReducer = createReducer(initialState,
    on(loginStart,(state,action)=>{
        console.log("login sucess action triggred");
        
return{
    ...state,
    loginuser:action.loginuser,
    loading:true,
    error:null
}
    }),
    on(loginSucess,(state,action)=>{
        return{
            ...state,
            loading:false,
            error:null
        }
    }),
    on(loginfail,(state,action)=>{
        console.log("login Failed",action.error)
        return{
            ...state,
            loading:false,
            error:action.error
            
        }
        
    })
)