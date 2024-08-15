import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { signupFail, signupStart, signupSuccess } from './signup.actions';
import { catchError, exhaustMap, map, of, switchMap } from 'rxjs';
import { SignupServiceService } from '../service/signup-service.service';

@Injectable()
export class SignupEffects {
  constructor(
    private action$: Actions,
    private signupService: SignupServiceService
  ) {}
  signup$ = createEffect(() =>
    this.action$.pipe(
      ofType(signupStart),
      exhaustMap((action) =>
        this.signupService.signup(action.user).pipe(
          map((response) => {
            return signupSuccess({ redirect: true });
          }),
          catchError((error) =>{
            console.error('Signup failed', error);
            return of(signupFail({ redirect: true }))
          })
        )
      )
    )
  );
  signupSucess$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(signupSuccess),
        map(() => {
          console.log("signup sucessfully");
          
          alert('Signup sucessfully');
        })
      ),
    {
      dispatch: false,
    }
  );
}
