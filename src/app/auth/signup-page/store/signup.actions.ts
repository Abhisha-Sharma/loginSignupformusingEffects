import { createAction, props } from '@ngrx/store';
import { User } from '../../model/signup.model';

export const SIGNUP_START = '[auth page] signup start';
export const SIGNUP_SUCCESS = '[auth page] signup success';
export const SIGNUP_FAIL = '[auth page] signup fail';
export const signupStart = createAction(
  SIGNUP_START,
  props<{
    user:User
  }>()
);
export const signupSuccess = createAction(
  SIGNUP_SUCCESS,
  props<{ redirect: boolean }>()
);
export const signupFail = createAction(
    SIGNUP_FAIL,
    props<{redirect:boolean}>()
)
