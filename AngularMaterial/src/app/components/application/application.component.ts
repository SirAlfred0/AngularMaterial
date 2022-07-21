import { DialogComponent } from './dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent{
  sideNavOpenState: boolean = false;


  constructor(private _dialog: MatDialog)
  {

  }

  OpenDialog(data: string)
  {
    this._dialog.open(DialogComponent, {
      data: data
    });
  }
}
