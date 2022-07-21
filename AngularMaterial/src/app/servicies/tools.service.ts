import { Injectable } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  constructor() { }

  add(value: string, list: string[]): void {
    if (value) {
      list.push(value);
    }
  }


  remove(item: any, list: any[]): void {
    const index = list.indexOf(item);

    if (index >= 0) {
      list.splice(index, 1);
    }
  }

  selected(value: string, list: string[]): void {
    list.push(value);
  }

  filter(value: string, list: string[]): string[] {
    const filterValue = value.toLowerCase();

    return list.filter(item => item.toLowerCase().includes(filterValue));
  }
}
