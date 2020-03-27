import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppinstructionsComponent } from './appinstructions.component';

describe('AppinstructionsComponent', () => {
  let component: AppinstructionsComponent;
  let fixture: ComponentFixture<AppinstructionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppinstructionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppinstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
