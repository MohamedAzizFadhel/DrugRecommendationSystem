import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAvkProgrammeRisqueEndoFaibleComponent } from './dialog-avk-programme-risque-endo-faible.component';

describe('DialogAvkProgrammeRisqueEndoFaibleComponent', () => {
  let component: DialogAvkProgrammeRisqueEndoFaibleComponent;
  let fixture: ComponentFixture<DialogAvkProgrammeRisqueEndoFaibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAvkProgrammeRisqueEndoFaibleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAvkProgrammeRisqueEndoFaibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
