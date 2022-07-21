import { IExperience } from './../../../../Interfaces/IExperience';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Inject} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-new-experience-dialog',
  templateUrl: './new-experience-dialog.component.html',
  styleUrls: ['./new-experience-dialog.component.scss']
})
export class NewExperienceDialogComponent implements OnInit {

  NewExController = new FormGroup({
    CompanyName: new FormControl('',{validators: Validators.required,nonNullable: true}),
    JobTitle: new FormControl('',{validators: Validators.required,nonNullable: true}),
    Start: new FormControl('',{validators: Validators.required,nonNullable: true}),
    End: new FormControl('',{validators: Validators.required,nonNullable: true})
  })

  constructor(public dialogRef: MatDialogRef<NewExperienceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IExperience) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


  ExFormHasError(): boolean {
    var CompanyNameHasError = this.NewExController.controls.CompanyName.errors == null ? false : true;
    var JobTitleHasError = this.NewExController.controls.JobTitle.errors == null ? false : true;
    var StartHasError = this.NewExController.controls.Start.errors == null ? false : true;
    var EndHasError = this.NewExController.controls.End.errors != null &&  !this.data.StealEmployed ? true : false;


    return CompanyNameHasError || JobTitleHasError || StartHasError || EndHasError;
  }
}
