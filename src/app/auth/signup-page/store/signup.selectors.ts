import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SignUpState } from "./signup.state";

export const selectSignupState = createFeatureSelector<SignUpState>('signup');
export const selectUser = createSelector(
    selectSignupState,
    (state:SignUpState)=>state.user
);