import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { signupFail, signupStart, signupSuccess } from './signup.actions';
import { catchError, map, of, switchMap } from 'rxjs';
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
      switchMap((action) =>
        this.signupService.signup(action.user).pipe(
          map((response) => {
            return signupSuccess({ redirect: true });
          }),
          catchError((error) => {
            return of(signupFail({ redirect: true }));
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
          alert('Signup sucessfully');
        })
      ),
    {
      dispatch: false,
    }
  );
}
