import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAvkProgrammeComponent } from './dialog-avk-programme.component';

describe('DialogAvkProgrammeComponent', () => {
  let component: DialogAvkProgrammeComponent;
  let fixture: ComponentFixture<DialogAvkProgrammeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAvkProgrammeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAvkProgrammeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
