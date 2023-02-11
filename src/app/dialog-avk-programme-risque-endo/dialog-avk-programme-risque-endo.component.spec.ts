import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAvkProgrammeRisqueEndoComponent } from './dialog-avk-programme-risque-endo.component';

describe('DialogAvkProgrammeRisqueEndoComponent', () => {
  let component: DialogAvkProgrammeRisqueEndoComponent;
  let fixture: ComponentFixture<DialogAvkProgrammeRisqueEndoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAvkProgrammeRisqueEndoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAvkProgrammeRisqueEndoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
