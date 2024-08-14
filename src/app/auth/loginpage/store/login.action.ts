import { createAction, props } from '@ngrx/store';
import { LoginUser } from '../model/login.model';

export const LOGIN_START = '[auth page]login start';
export const LOGIN_SUCESS = '[auth page]login sucess';
export const LOGIN_FAIL = '[auth page]login fail';
export const loginStart = createAction(
  LOGIN_START,
  props<{ loginuser: LoginUser }>()
);
export const loginSucess = createAction(
  LOGIN_SUCESS,
  props<{ redirect: boolean }>()
);
export const loginfail = createAction(
  LOGIN_FAIL,
  props<{ redirect: boolean,error:string }>()
);
