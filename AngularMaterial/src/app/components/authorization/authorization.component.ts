import { ILogin } from './../../Interfaces/ILogin';
import { ICreateAccount } from './../../Interfaces/ICreateAccount';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {
  spinnerValue: number = 0;
  interval: any;
  snackBarOpenState: boolean = false;
  loginStage: string = "";

  userAuthorizationChoice: number = 0;

  newAccountData: ICreateAccount = <ICreateAccount>{};
  loginAccountData: ILogin = <ILogin>{};

  loginStepController: AbstractControl = <AbstractControl>{};
  createAccountStepController: AbstractControl = <AbstractControl>{};

  constructor(private _snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
  }

  ngDoCheck()
  {
    if(this.spinnerValue > 50 && !this.snackBarOpenState)
    {
      clearInterval(this.interval);
      var snackBarRef = this._snackBar.open("an error detected during fetching data", "Auto Fix");
      this.snackBarOpenState = true;

      snackBarRef.afterDismissed().subscribe(() => {
        this.loginStage = "Initializing Application";
        this.interval = setInterval(() => {
          this.spinnerValue++;
        },30);
      });

    }



    if(this.spinnerValue >= 100)
    {
      clearInterval(this.interval);
      setTimeout(() => {
        this.router.navigate(['application']);
      }, 2000);

    }
  }

  UserAuthorizationChoiceChange(data: any): void
  {
    this.userAuthorizationChoice = data;
  }

  OnNewCreateAccount(data: ICreateAccount,stepper: MatStepper)
  {
    stepper.next();

    if(data == undefined) return;

    this.newAccountData = data;

    if(this.userAuthorizationChoice == 1)
      {
        setTimeout(() => {
          this.loginStage = "fetching data from server";
          stepper.next();
          this.interval = setInterval(() => {
          this.spinnerValue++;
        },100);
        }, 400);
      }
  }

  OnNewLogin(data: ILogin,stepper: MatStepper)
  {
    stepper.next();

    if(data == undefined) return;

    this.loginAccountData = data;

    this.loginStage = "fetching data from server";
    this.interval = setInterval(() => {
      this.spinnerValue++;
    },50);
  }
}
