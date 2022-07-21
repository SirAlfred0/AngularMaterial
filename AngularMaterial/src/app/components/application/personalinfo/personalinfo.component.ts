import { FilemanagerComponent } from './filemanager/filemanager.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personalinfo',
  templateUrl: './personalinfo.component.html',
  styleUrls: ['./personalinfo.component.scss']
})
export class PersonalinfoComponent implements OnInit {

  constructor(private _matBottomSheet: MatBottomSheet) { }

  ngOnInit(): void {
  }


  OpenFileManager() : void
  {
    this._matBottomSheet.open(FilemanagerComponent);
  }
}
