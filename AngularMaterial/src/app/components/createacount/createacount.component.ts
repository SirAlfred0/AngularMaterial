import { ICreateAccount } from './../../Interfaces/ICreateAccount';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-createacount',
  templateUrl: './createacount.component.html',
  styleUrls: ['./createacount.component.scss']
})
export class CreateacountComponent{

  @Output() userAuthorizationChoiceEvent: EventEmitter<number> = new EventEmitter<number>();
  @Output() userAccountEvent: EventEmitter<ICreateAccount> = new EventEmitter<ICreateAccount>();
  @Output() LoginStepControllerEvent: EventEmitter<AbstractControl> = new EventEmitter<AbstractControl>();

  createAccountPasswordHiddenState: boolean = true;
  userAuthorizationChoice: number = 0;

  createAccountForm = new FormGroup({
    'firstName': new FormControl('',{validators: Validators.required, nonNullable: true}),
    'lastName': new FormControl('',{validators: Validators.required, nonNullable: true}),
    'userName': new FormControl('',{validators: Validators.required, nonNullable: true}),
    'password': new FormControl('',{validators: Validators.required, nonNullable: true})
  });

  ngDoCheck()
  {
    this.LoginStepControllerEvent.emit(this.createAccountForm);
  }

  OnUserAuthorizationChoiceChange()
  {
    this.userAuthorizationChoiceEvent.emit(this.userAuthorizationChoice);
  }


  OnNewUserSubmit()
  {
    if(this.CreateAccountFormHasError())
    {
      this.userAccountEvent.emit();
      return;
    }

    var createAccountdata: ICreateAccount = <ICreateAccount>{};

    createAccountdata.FirstName = this.createAccountForm.controls.firstName.value;
    createAccountdata.LastName = this.createAccountForm.controls.lastName.value;
    createAccountdata.UserName = this.createAccountForm.controls.userName.value;
    createAccountdata.Password = this.createAccountForm.controls.password.value;

    this.userAccountEvent.emit(createAccountdata);
  }


  private CreateAccountFormHasError(): boolean {
    var firstNameHasError = this.createAccountForm.controls.firstName.errors == null ? false : true;
    var lastNameHasError = this.createAccountForm.controls.lastName.errors == null ? false : true;
    var userNameHasError = this.createAccountForm.controls.userName.errors == null ? false : true;
    var passwordHasError = this.createAccountForm.controls.password.errors == null ? false : true;
    return firstNameHasError || lastNameHasError || userNameHasError || passwordHasError;
  }
}
