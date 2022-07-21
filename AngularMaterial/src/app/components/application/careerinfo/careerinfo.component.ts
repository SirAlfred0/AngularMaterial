import { NewExperienceDialogComponent } from './new-experience-dialog/new-experience-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { IExperience } from './../../../Interfaces/IExperience';
import { ToolsService } from './../../../servicies/tools.service';
import { FormControl } from '@angular/forms';
import { Component } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { Observable, startWith, map } from 'rxjs';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-careerinfo',
  templateUrl: './careerinfo.component.html',
  styleUrls: ['./careerinfo.component.scss']
})
export class CareerinfoComponent{
  softwareSkills: string[] = [];
  softwareOptions: string[] = ['word','powerPoint','excel','visualStudio', 'access', 'photoshop'];

  frameworkSkills: string[] = [];
  frameworkOptions: string[] = ['angular','react','vue.js','flutter', 'asp.net', '.net'];

  languageSkills: string[] = [];
  languageOptions: string[] = ['javaScript','typeScript','php','html', 'css', 'c#', 'f#', 'VB'];

  experiences: IExperience[] = [];

  colsSize: number = 3;
  constructor(private tools: ToolsService,private _dialog: MatDialog) {
  }

  OnResize(event: any)
  {
    var size = event.target.innerWidth;
    if (size < 1650) {
      this.colsSize = 2;
      if (size < 1230)
        this.colsSize = 1;
    }

    if (size >= 1650) {
      this.colsSize = 3;
      if(size > 2200)
      this.colsSize = 4;
    }
  }

  AddNewSoftware(value: string): void {
    this.tools.add(value,this.softwareSkills);
  }

  RemoveSoftware(item: string): void {
    this.tools.remove(item,this.softwareSkills);
  }

  SelectedSoftware(value: string): void {
    this.tools.selected(value,this.softwareSkills);
  }


  AddNewFramework(value: string): void {
    this.tools.add(value,this.frameworkSkills);
  }

  RemoveFramework(item: string): void {
    this.tools.remove(item,this.frameworkSkills);
  }

  SelectedFramework(value: string): void {
    this.tools.selected(value,this.frameworkSkills);
  }


  AddNewLanguage(value: string): void {
    this.tools.add(value,this.languageSkills);
  }

  RemoveLanguage(item: string): void {
    this.tools.remove(item,this.languageSkills);
  }

  SelectedLanguage(value: string): void {
    this.tools.selected(value,this.languageSkills);
  }


  RemoveExperience(value: IExperience)
  {
    this.tools.remove(value,this.experiences);
  }


  openDialog(): void {
    const dialogRef = this._dialog.open(NewExperienceDialogComponent, {
      width: '40%',
      data: <IExperience>{}
    });

    dialogRef.afterClosed().subscribe((data: IExperience) => {
      if(data != undefined)
      this.experiences.push(data);
    })
  }
}
