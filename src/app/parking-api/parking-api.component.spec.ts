import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingAPIComponent } from './parking-api.component';

describe('ParkingAPIComponent', () => {
  let component: ParkingAPIComponent;
  let fixture: ComponentFixture<ParkingAPIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkingAPIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
