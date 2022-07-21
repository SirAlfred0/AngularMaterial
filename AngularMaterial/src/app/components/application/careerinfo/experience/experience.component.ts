import { IExperience } from './../../../../Interfaces/IExperience';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  @Input() experience: IExperience= <IExperience>{};
  @Output() RemoveExperienceEvent: EventEmitter<IExperience> = new EventEmitter<IExperience>();

  constructor() { }

  ngOnInit(): void {
  }


  Remove()
  {
    this.RemoveExperienceEvent.emit(this.experience);
  }
}
