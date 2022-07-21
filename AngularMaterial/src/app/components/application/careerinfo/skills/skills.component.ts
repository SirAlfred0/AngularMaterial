import { ToolsService } from './../../../../servicies/tools.service';
import { FormControl } from '@angular/forms';
import { Observable, startWith, map } from 'rxjs';
import { Component, Input, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {


  @Input() skills: string[] = [];
  @Input() options: string[] = [];
  @Input() placeHolder: string = '';

  @Output() addEvent: EventEmitter<string> = new EventEmitter<string>();
  @Output() removeEvent: EventEmitter<string> = new EventEmitter<string>();
  @Output() selectEvent: EventEmitter<string> = new EventEmitter<string>();


  filteredOptions: Observable<string[]>;

  inputController = new FormControl('');
  @ViewChild('softwareInput', {static: true}) softwareInput!: ElementRef<HTMLInputElement>;

  constructor(private tools: ToolsService) {
    this.filteredOptions = this.inputController.valueChanges.pipe(
      startWith(null),
      map((item: string | null) => (item ? this.tools.filter(item,this.options) : this.options.slice())),
    );
  }

  ngOnInit(): void {
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    this.addEvent.emit(value);

    event.chipInput!.clear();
    this.inputController.setValue(null);
  }


  remove(item: string): void {
    this.removeEvent.emit(item);
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.selectEvent.emit(event.option.viewValue);
    this.softwareInput.nativeElement.value = '';
    this.inputController.setValue(null);
  }

}
