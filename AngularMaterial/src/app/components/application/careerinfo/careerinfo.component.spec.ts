import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerinfoComponent } from './careerinfo.component';

describe('CareerinfoComponent', () => {
  let component: CareerinfoComponent;
  let fixture: ComponentFixture<CareerinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareerinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareerinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
