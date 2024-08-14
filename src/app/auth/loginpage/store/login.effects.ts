import { Injectable } from '@angular/core';
import { LoginServiceService } from '../service/login-service.service';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { loginfail, loginStart, loginSucess } from './login.action';
import { catchError, filter, map, of, switchMap } from 'rxjs';

@Injectable()
export class LoginEffects {
  constructor(
    private action$: Actions,
    private loginService: LoginServiceService
  ) {}
  login$ = createEffect(() =>
    this.action$.pipe(
      ofType(loginStart),
      switchMap((action) =>
        this.loginService.login(action.loginuser).pipe(
          map((loginusers) => {
            console.log(loginusers);
            
            if (loginusers.length > 0) {
              return loginSucess({ redirect: true });
            } else {
              return loginfail({
                redirect: false,
                error: 'Inavlid Credentials',
              });
            }
          }),
          catchError((error) =>
            of(loginfail({ redirect: false, error: error.message }))
          )
        )
      )
    )
  );
  loginSuccess$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(loginSucess),
        map(() => {
          alert('login sucessful');
        })
      ),
    { dispatch: false }
  );
  loginfail$=createEffect(()=>
  this.action$.pipe(
    ofType(loginfail),
    map(()=>{
      alert('Invaid Credentials')
    })
  ),
  { dispatch: false }
)
}
