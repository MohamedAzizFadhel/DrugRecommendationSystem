import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAvkProgrammeOraleComponent } from './dialog-avk-programme-orale.component';

describe('DialogAvkProgrammeOraleComponent', () => {
  let component: DialogAvkProgrammeOraleComponent;
  let fixture: ComponentFixture<DialogAvkProgrammeOraleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAvkProgrammeOraleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAvkProgrammeOraleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
