import { ILogin } from './../../Interfaces/ILogin';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{

  @Output() NewUserLoginEvent: EventEmitter<ILogin> = new EventEmitter<ILogin>();
  @Output() LoginFormController: EventEmitter<AbstractControl> = new EventEmitter<AbstractControl>();

  loginPasswordHiddenState: boolean = true;

  loginForm = new FormGroup({
    userName: new FormControl('',{validators: Validators.required,nonNullable: true}),
    password: new FormControl('',{validators: Validators.required,nonNullable: true})
  });

  ngDoCheck()
  {
    this.LoginFormController.emit(this.loginForm);
  }

  OnNewUserLogin()
  {
    if(this.LoginFormHasError())
    {
      this.NewUserLoginEvent.emit();
      return;
    }

    var loginData: ILogin = <ILogin>{};

    loginData.UserName = this.loginForm.controls.userName.value;
    loginData.Password = this.loginForm.controls.password.value;

    this.NewUserLoginEvent.emit(loginData);
  }

  private LoginFormHasError(): boolean {
    var userNameHasError = this.loginForm.controls.userName.errors == null ? false : true;
    var passwordHasError = this.loginForm.controls.password.errors == null ? false : true;
    return userNameHasError || passwordHasError;
  }
}
