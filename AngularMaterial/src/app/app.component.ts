
import {Component} from '@angular/core';
import {MatBottomSheet} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  PanelOpenState: boolean = false;
  constructor(private bottomSheet: MatBottomSheet)
  {

  }
}
